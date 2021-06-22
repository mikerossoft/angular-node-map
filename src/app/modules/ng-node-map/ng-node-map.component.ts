import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { NodeMapRoot } from './ng-node-map-interface';
import * as d3 from 'd3';

enum IconType {
    Add,
    Edit,
    Delete,
    Toggle,
    ShowLatest,
}

@Component({
    selector: 'app-node-map',
    templateUrl: './ng-node-map.component.html',
    styleUrls: ['./ng-node-map.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NodeMapComponent implements OnInit, OnChanges {
    @Input() dataSource: any;
    @Input() public editCallback: (item?: any) => void;
    @Input() public deleteCallback: (item?: any) => void;
    @Input() public addCallback: (item?: any) => void;
    @Input() public selectCallback: (item?: any) => void;
    @Input() public toggleCallback: (item?: any) => void;
    @Input() public showLatestDataCallback: (item?: any) => void;

    rectHeight: number = 0;
    rectWidth: number = 0;
    fontAwesomeClass = 'fa icon-white';
    hideIconClass = 'hide-icon';
    indiciumPrimaryColor = '#1ab394';
    defaultHightLightColor = this.indiciumPrimaryColor;
    defaultNodeBgColor = '#303F9F';
    typeIconClass = 'fa icon-white not-clickable type-icon';
    toggleEnableIcon = '\uf204';
    toggleDisableIcon = '\uf205';

    constructor() {
        this.rectHeight = 65;
        this.rectWidth = 120;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (document.querySelectorAll('.node-map').length > 0) {
            this.cleanUp();
        }

        this.nodeMapInit(this.dataSource);
    }

    private cleanUp(): void {
        document.querySelectorAll('.node-map').forEach(function (element) {
            element.remove();
        });
    }

    ngOnInit(): void {}

    public isJson(param) {
        if (typeof param === 'object') {
            return true;
        }
        return false;
    }
    public nodeMapInit(data: any): void {
        if (this.isJson(data)) {
            this.drawNodeMap(data);
        } else {
            throw new Error('InvalidJSON');
        }
    }

    private drawNodeMap(data: any): void {
        const classScope = this;

        const nodeMapRoot = data as NodeMapRoot;
        const nodes = nodeMapRoot.root.nodes;

        // Assigns parent, children, height, depth
        root = d3.hierarchy(nodeMapRoot.root, (d: any) => d.nodes);
        const depthestLevelHorizontal = getMaxLevelHorizontally(root);

        const depthestLevelHorizontalVal = Number.isFinite(
            depthestLevelHorizontal
        )
            ? depthestLevelHorizontal
            : 0;
        const nodesHorizontalGapSpaceEstimator = Math.round(
            depthestLevelHorizontalVal / 3
        );

        const maxSubscription = getMaxLevelSubscription(nodes);
        //using this variable to calculate the height of the drawing
        //3 general fits for most of the case, so the default number will be 3
        const heightMultiplier = maxSubscription < 3 ? 3 : maxSubscription + 1;

        /*
        Calculating the drawing's display area
        */
        var margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width =
                140 * depthestLevelHorizontalVal +
                nodesHorizontalGapSpaceEstimator * 140,
            height = this.rectHeight * 2 * heightMultiplier;

        /*
        Diagram window size debugging 
        */
        // console.log(`heightMultiplier: ${heightMultiplier}`);
        // console.log('width');
        // console.log(width);
        // console.log('height');
        // console.log(height);

        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3
            .select('div#node-map')
            .append('svg')
            .attr('class', 'node-map')
            .attr('viewBox', `0 0 ${width} ${height}`);

        var g = svg
            .append('g')
            .attr(
                'transform',
                'translate(' + margin.left + ',' + margin.top + ')'
            );

        var i = 0,
            duration = 1000,
            root;

        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);

        root.x0 = height / 2;
        root.y0 = 0;

        // Collapse after the second level
        // root.children.forEach(collapse);

        update(root);

        // Collapse the node and all their children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        function getMaxLevelSubscription(nodeMap: any): number {
            let subCounter: number = 0;
            for (let i = 0; i < nodeMap.length; i++) {
                const itemNode = nodeMap[i].nodes;
                for (let j = 0; j < itemNode.length; j++) {
                    subCounter++;
                }
            }
            return subCounter;
        }
        function getMaxLevelHorizontally(root: any): number {
            let returnVal =
                d3.max(
                    root.descendants().map(function (d) {
                        return d.depth;
                    })
                ) + 1;
            //plus the root level;

            return +returnVal;
        }

        function update(source: any) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);

            // Compute the new tree layout.
            var nodes = treeData.descendants(),
                links = treeData.descendants().slice(1);

            //calculate the distance between each node item
            nodes.forEach(function (d) {
                d.y = d.depth * 160;
            });

            // ****************** Nodes section ***************************

            // Update the nodes...
            var node: any = g
                .selectAll('g.node')
                .data(nodes, function (d: any) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new modes at the parent's previous position.
            var nodeEnter = node
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', function (d) {
                    return 'translate(' + source.y0 + ',' + source.x0 + ')';
                });

            //setting to differenciate single click and double clicks
            var prevent = false;
            const delay = 200;
            var timer: any;
            // let rectWidth = 120,
            //     rectHeight = 65;
            nodeEnter
                .append('rect')
                .attr('class', 'node')
                .attr('width', classScope.rectWidth)
                .attr(
                    'height',

                    function (d) {
                        return classScope.rectHeight;
                    }
                )
                .attr('x', 0)
                .attr('y', (classScope.rectHeight / 2) * -1)
                // .attr('y', 0)
                // .attr('y', rectHeight * -1)
                //add the radius to the node border's edges
                .attr('rx', '5')
                .style('fill', function (d) {
                    const item = getItem(d);
                    //if the item is not enabled, invert style will
                    //apply for the backgroudn color of the node
                    if (item.enabled !== undefined && !item.enabled) {
                        this.style.filter = 'invert(35%)';
                    }

                    //get the reference of the node container for later use
                    //if bodyColour is not defined, returns the #303F9F default color
                    return d.data.bodyColour
                        ? d.data.bodyColour
                        : classScope.defaultNodeBgColor;
                })
                .on('click', function (d) {
                    const highlightClassName = 'node_onselect_highlight';
                    //set a timer for the single click
                    //if double click happens, it will prevent the function inside the timer to be called
                    prevent = false;
                    timer = setTimeout(() => {
                        if (!prevent) {
                            const borderColour = getItem(d).borderColour
                                ? getItem(d).borderColour
                                : classScope.defaultHightLightColor;

                            //this block is used for applying a highlight color to the code
                            this.style.stroke = borderColour;

                            //find the node where it was highlighted previously
                            const highlightedElements: HTMLCollectionOf<Element> =
                                document.getElementsByClassName(
                                    highlightClassName
                                );
                            //remove the hightlight styling class for the previous selected node
                            if (highlightedElements) {
                                for (
                                    let i = 0;
                                    i < highlightedElements.length;
                                    i++
                                ) {
                                    const element = highlightedElements[i];
                                    element.classList.remove(
                                        highlightClassName
                                    );
                                    element.style.stroke = '';
                                }
                            }
                            this.classList.add(highlightClassName);
                            //handleOnSelect callback
                            handleOnSelect(d);
                        }
                    }, delay);
                })
                .on('dblclick', function (d) {
                    //assign value to prevent the single click from
                    //calling the timer function
                    prevent = true;
                    clearTimeout(timer);
                    expandCollapse(d);
                });

            // Add labels for the nodes
            // nodeEnter
            //     .append('text')
            //     .attr('x', 15)
            //     .attr('y', -17)
            //     .attr('class', 'fa fa-edit icon-edit')
            //     .attr('font-size', function (d) {
            //         return '20px';
            //     })
            //     .text(function (d) {
            //         return '\uf044';
            //     });
            nodeEnter
                .append('text')
                .attr('dy', '.25em')
                .attr('class', 'node-text')
                .attr('x', function (d) {
                    return 13;
                })
                .attr('text-anchor', function (d) {
                    return 'start';
                })
                .text(function (d) {
                    return formatText(d.data.name);
                })
                .call(wrap, 110);

            //Delete icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canDeleteIconShow(d))
                .attr('dy', '-1.20em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.Delete);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf1f8';
                })
                .on('click', function (d) {
                    configureDeleteIconOnClick(d);
                });
            //Edit icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canEditIconShow(d))
                .attr('dy', '-1.15em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.Edit);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf044';
                })
                .on('click', function (d) {
                    configureEditIconOnClick(d);
                });
            //Add icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canAddIconShow(d))
                .attr('dy', '-1.18em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.Add);
                })
                .text(function (d) {
                    return '\uf067';
                })
                .on('click', function (d) {
                    configureAddIconOnClick(d);
                });
            //Toggle icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canToggleIconShow(d))
                .attr('dy', '-1.18em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.Toggle);
                })
                .text(function (d) {
                    const item = getItem(d);

                    return item.enabled
                        ? classScope.toggleEnableIcon
                        : classScope.toggleDisableIcon;
                })
                .on('click', function (d) {
                    const curToggle = this.innerHTML;
                    const nodeContainer =
                        this.parentNode.querySelector('rect.node');

                    if (curToggle == classScope.toggleEnableIcon) {
                        this.innerHTML = classScope.toggleDisableIcon;
                        nodeContainer.style.filter = 'invert(35%)';
                    } else {
                        this.innerHTML = classScope.toggleEnableIcon;
                        nodeContainer.style.filter = 'invert(0%)';
                    }
                    configureToggleIconOnClick(d);
                });
            //Show Latest Data icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canShowLatestIconShow(d))
                .attr('dy', '-1.18em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.ShowLatest);
                })
                .text(function (d) {
                    return '\uf080';
                })
                .on('click', function (d) {
                    configureCanShowLatestIconOnClick(d);
                });
            //Node type icon
            nodeEnter
                .append('text')
                .attr('class', classScope.typeIconClass)
                .attr('dy', '-1.05em')
                .attr('x', function (d) {
                    return '.20em';
                })
                .text(function (d) {
                    return getTypeIcon(d);
                });

            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);

            // Transition to the proper position for the node
            nodeUpdate
                .transition()
                .duration(duration)
                .attr('transform', function (d) {
                    return 'translate(' + d.y + ',' + d.x + ')';
                });

            // Update the node attributes and style
            nodeUpdate
                .select('circle.node')
                .attr('r', 10)
                .style('fill', function (d) {
                    return d._children ? 'lightsteelblue' : '#fff';
                })
                .attr('cursor', 'pointer');

            // Remove any exiting nodes
            var nodeExit = node
                .exit()
                .transition()
                .duration(duration)
                .attr('transform', function (d) {
                    return 'translate(' + source.y + ',' + source.x + ')';
                })
                .remove();

            // On exit reduce the node circles size to 0
            nodeExit.select('circle').attr('r', 1e-6);

            // On exit reduce the opacity of text labels
            nodeExit.select('text').style('fill-opacity', 1e-6);

            // ****************** links section ***************************

            // Update the links...
            var link: any = g
                .selectAll('path.link')
                .data(links, function (d: any) {
                    return d.id;
                });

            // Enter any new links at the parent's previous position.
            var linkEnter = link
                .enter()
                .insert('path', 'g')
                .attr('class', 'link')
                .attr('d', function (d) {
                    var o = { x: source.x0, y: source.y0 };
                    return diagonal(o, o);
                });

            // UPDATE
            var linkUpdate = linkEnter.merge(link);

            // Transition back to the parent element position
            linkUpdate
                .transition()
                .duration(duration)
                .attr('d', function (d) {
                    return diagonal(d, d.parent);
                });

            // Remove any exiting links
            var linkExit = link
                .exit()
                .transition()
                .duration(duration)
                .attr('d', function (d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal(o, o);
                })
                .remove();

            // Store the old positions for transition.
            nodes.forEach(function (d: any) {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;

                return path;
            }

            // Toggle children on click.
            function expandCollapse(d) {
                const selectedObj = d.data;

                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }

                update(d);
            }

            function getTypeIcon(d) {
                const item = getItem(d);
                if (item) {
                    switch (item.type) {
                        case 'Connector':
                            return '\uf1e6';
                        case 'Input':
                            return '\uf090';
                        case 'Subscription':
                            return '\uf0ca';
                        case 'Subscription Item':
                            return '\uf08b';
                    }
                } else {
                    console.error("getTypeIcon: Type's icon cannot be found");
                }
                return '';
            }

            function handleOnSelect(d) {
                const item = getItem(d);
                if (item) {
                    classScope.selectCallback(item);
                } else {
                    console.error('handleOnSelect: selected item is null');
                }
            }

            function handleOnEdit(d) {
                const item = getItem(d);
                if (item) {
                    classScope.editCallback(item);
                } else {
                    console.error('handleOnEdit: selected item is null');
                }
            }
            function handleOnDelete(d) {
                const item = getItem(d);
                if (item) {
                    classScope.deleteCallback(item);
                } else {
                    console.error('handleOnDelete: selected item is null');
                }
            }
            function handleOnAdd(d) {
                const item = getItem(d);
                if (item) {
                    classScope.addCallback(item);
                } else {
                    console.error('handleOnAdd: selected item is null');
                }
            }

            function handleOnToggle(d) {
                const item = getItem(d);
                if (item) {
                    classScope.toggleCallback(item);
                } else {
                    console.error('handleOnToogle: selected item is null');
                }
            }

            function handleOnShowLatestData(d) {
                const item = getItem(d);
                if (item) {
                    classScope.showLatestDataCallback(item);
                } else {
                    console.error(
                        'handleOnShowLatestData: selected item is null'
                    );
                }
            }
            function handleNothing() {}

            function getItem(d: any): any {
                let item;
                item = d.data;
                return item;
            }

            function calculateNodeIconX(
                distance: number,
                multiplier: number
            ): number {
                return (
                    classScope.rectWidth -
                    (classScope.rectWidth / 10) * (distance * multiplier)
                );
            }

            function formatText(text: string): string {
                if (checkIfSingleWord(text)) {
                    return splitTextAndNumber(text);
                }
                return text;
            }

            function checkIfSingleWord(text: string): boolean {
                var result = text.trim().indexOf(' ') === -1 ? true : false;
                return result;
            }
            function splitTextAndNumber(text: string) {
                return text.match(/[A-Z][a-z]+|[0-9]+|[A-Z][A-Z]+/g).join(' ');
            }

            function wrap(text, width) {
                text.each(function () {
                    var text = d3.select(this),
                        words = text.text().split(/\s+/).reverse(),
                        word,
                        line = [],
                        lineNumber = 0,
                        lineHeight = 1, // ems
                        x = text.attr('x'),
                        y = text.attr('y'),
                        dy = 0, //parseFloat(text.attr("dy")),
                        tspan = text
                            .text(null)
                            .append('tspan')
                            .attr('x', x)
                            .attr('y', y)
                            .attr('dy', dy + 'em');
                    while ((word = words.pop())) {
                        line.push(word);
                        tspan.text(line.join(' '));
                        if (tspan.node().getComputedTextLength() > width) {
                            line.pop();
                            tspan.text(line.join(' '));
                            line = [word];
                            tspan = text
                                .append('tspan')
                                .attr('x', x)
                                .attr('y', y)
                                .attr('dy', '1em')
                                .text(word);
                            lineNumber++;
                        }
                        if (lineNumber > 1) break;
                    }
                });
            }

            function canShowLatestIconShow(d): any {
                const canShowLatest = d?.data?.canShowLatest;

                if (canShowLatest) return classScope.fontAwesomeClass;
                else return classScope.hideIconClass;
            }

            function configureCanShowLatestIconOnClick(d) {
                const canShowLatest = d?.data?.canShowLatest;
                if (canShowLatest) return handleOnShowLatestData(d);
                else return handleNothing;
            }

            function canToggleIconShow(d): any {
                const canToggle = d?.data?.canToggle;

                if (canToggle) return classScope.fontAwesomeClass;
                else return classScope.hideIconClass;
            }

            function configureToggleIconOnClick(d) {
                const canToggle = d?.data?.canToggle;
                if (canToggle) return handleOnToggle(d);
                else return handleNothing;
            }

            function canAddIconShow(d): any {
                const canAdd = d?.data?.canAdd;

                if (canAdd) return classScope.fontAwesomeClass;
                else return classScope.hideIconClass;
            }
            function configureAddIconOnClick(d) {
                const canAdd = d?.data?.canAdd;
                if (canAdd) return handleOnAdd(d);
                else return handleNothing;
            }

            function canEditIconShow(d): any {
                const canEdit = d?.data?.canEdit;
                if (canEdit) return classScope.fontAwesomeClass;
                else return classScope.hideIconClass;
            }
            function configureEditIconOnClick(d) {
                const canEdit = d?.data?.canEdit;
                if (canEdit) return handleOnEdit(d);
                else return handleNothing;
            }
            function canDeleteIconShow(d): any {
                const canDelete = d?.data?.canDelete;
                if (canDelete) return classScope.fontAwesomeClass;
                else return classScope.hideIconClass;
            }
            function configureDeleteIconOnClick(d) {
                const canDelete = d?.data?.canDelete;
                if (canDelete) return handleOnDelete(d);
                else return handleNothing;
            }
            //It can handle all five buttons's positions
            //to do - in later release
            function getAllIconPos(d, iconType: IconType) {}

            //only can handle toggle, edit and showLatestData buttons' positions
            function getIconPosInterim(d, iconType: IconType) {
                const canToggle =
                    typeof d?.data?.canToggle !== 'undefined'
                        ? d?.data?.canToggle
                        : false;

                const canEdit =
                    typeof d?.data?.canEdit !== 'undefined'
                        ? d?.data?.canEdit
                        : false;

                const canShowLatest =
                    typeof d?.data?.canShowLatest !== 'undefined'
                        ? d?.data?.canShowLatest
                        : false;

                const iconFlagList = [canToggle, canEdit, canShowLatest];
                const numberOfDisplayIcons =
                    iconFlagList.filter(Boolean).length;

                const iconMeasurer = {
                    numberOfIcons: numberOfDisplayIcons,
                    canTogglePos: 0.0,
                    canEditPos: 0.0,
                    canShowLatestPos: 0.0,
                };
                //show all icons
                if (iconMeasurer.numberOfIcons === 3) {
                    iconMeasurer.canTogglePos = calculateNodeIconX(1.6, 3);
                    iconMeasurer.canEditPos = calculateNodeIconX(1.525, 2);
                    iconMeasurer.canShowLatestPos = calculateNodeIconX(1.4, 1);
                } else {
                    //show 2 icons
                    if (iconMeasurer.numberOfIcons === 2) {
                        if (canToggle && canEdit) {
                            iconMeasurer.canTogglePos = calculateNodeIconX(
                                1.525,
                                2
                            );
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        } else if (canToggle && canShowLatest) {
                            iconMeasurer.canTogglePos = calculateNodeIconX(
                                1.4,
                                2
                            );
                            iconMeasurer.canShowLatestPos = calculateNodeIconX(
                                1.25,
                                1
                            );
                        } else if (canEdit && canShowLatest) {
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.525,
                                2
                            );
                            iconMeasurer.canShowLatestPos = calculateNodeIconX(
                                1.25,
                                1
                            );
                        }
                    } else {
                        //show only 1 icon
                        if (canToggle) {
                            iconMeasurer.canTogglePos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        } else if (canEdit) {
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        } else {
                            iconMeasurer.canShowLatestPos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        }
                    }
                }
                switch (iconType) {
                    case IconType.Toggle:
                        return iconMeasurer.canTogglePos;
                    case IconType.Edit:
                        return iconMeasurer.canEditPos;
                    case IconType.ShowLatest:
                        return iconMeasurer.canShowLatestPos;
                    default:
                        return 0.0;
                }
            }

            //only can handle add, edit and delete buttons' positions
            function getIconPos(d, iconType: IconType) {
                const canAdd =
                    typeof d?.data?.canAdd !== 'undefined'
                        ? d?.data?.canAdd
                        : false;

                const canEdit =
                    typeof d?.data?.canEdit !== 'undefined'
                        ? d?.data?.canEdit
                        : false;

                const canDelete =
                    typeof d?.data?.canDelete !== 'undefined'
                        ? d?.data?.canDelete
                        : false;

                const iconFlagList = [canAdd, canEdit, canDelete];
                const numberOfDisplayIcons =
                    iconFlagList.filter(Boolean).length;

                const iconMeasurer = {
                    numberOfIcons: numberOfDisplayIcons,
                    canAddPos: 0.0,
                    canEditPos: 0.0,
                    canDeletePos: 0.0,
                };
                //show all icons
                if (iconMeasurer.numberOfIcons === 3) {
                    iconMeasurer.canAddPos = calculateNodeIconX(1.6, 3);
                    iconMeasurer.canEditPos = calculateNodeIconX(1.525, 2);
                    iconMeasurer.canDeletePos = calculateNodeIconX(1.25, 1);
                } else {
                    //show 2 icons
                    if (iconMeasurer.numberOfIcons === 2) {
                        if (canAdd && canEdit) {
                            iconMeasurer.canAddPos = calculateNodeIconX(
                                1.525,
                                2
                            );
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        } else if (canAdd && canDelete) {
                            iconMeasurer.canAddPos = calculateNodeIconX(1.4, 2);
                            iconMeasurer.canDeletePos = calculateNodeIconX(
                                1.25,
                                1
                            );
                        } else if (canEdit && canDelete) {
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.525,
                                2
                            );
                            iconMeasurer.canDeletePos = calculateNodeIconX(
                                1.25,
                                1
                            );
                        }
                    } else {
                        //show only 1 icon
                        if (canAdd) {
                            iconMeasurer.canAddPos = calculateNodeIconX(1.5, 1);
                        } else if (canEdit) {
                            iconMeasurer.canEditPos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        } else {
                            iconMeasurer.canDeletePos = calculateNodeIconX(
                                1.5,
                                1
                            );
                        }
                    }
                }

                switch (iconType) {
                    case IconType.Add:
                        return iconMeasurer.canAddPos;
                    case IconType.Edit:
                        return iconMeasurer.canEditPos;
                    case IconType.Delete:
                        return iconMeasurer.canDeletePos;
                    default:
                        return 0.0;
                }
            }
        }
    }
}
