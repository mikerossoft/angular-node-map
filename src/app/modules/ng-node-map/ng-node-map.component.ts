import {
    Component,
    Input,
    OnInit,
    OnChanges,
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

enum NodeType {
    Connector = 'Connector',
    Input = 'Input',
    Subscription = 'Subscription',
    OutputItem = 'Output Item',
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
    @Input() public toggleCallback: (item?: any, enabled?: boolean) => void;
    @Input() public showLatestDataCallback: (item?: any) => void;

    rectHeight: number = 0;
    rectWidth: number = 0;
    fontAwesomeClass = 'fa node-icon';
    fontAwesomeToggleClass = 'fa node-icon toggle-icon';
    hideIconClass = 'hide-icon';
    indiciumPrimaryColor = '#1ab394';
    defaultHightLightColor = this.indiciumPrimaryColor;
    defaultNodeBgColor = '#303F9F';
    defaultTextColor = '#FFF';
    defaultIconColor = '#FFF';
    defaultDisabledColor = '#f3f3f4';
    typeIconClass = 'fa icon-white not-clickable type-icon';
    highlightClassName = 'node_onselect_highlight';
    unhighlightClassName = 'node_unselect_highlight';
    toggleEnableIcon = '\uf205';
    toggleDisableIcon = '\uf204';

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
        const calculatedHeight = calculateViewHeight(
            this.rectHeight,
            heightMultiplier
        );
        const calculatedWidth = calculateViewWidth(
            depthestLevelHorizontalVal,
            nodesHorizontalGapSpaceEstimator
        );

        const margin = { top: 0, right: 0, bottom: 0, left: 0 };
        //if calculatedWidth < calculatedHeight
        //which means there are a lot of input nodes
        //use browserHeight instead
        const width =
            calculatedWidth < calculatedHeight
                ? getBrowserWidth()
                : calculatedWidth;
        const height = this.rectHeight * 2 * heightMultiplier;

        /*
        Diagram window size debugging 
        */
        // console.log(`heightMultiplier: ${heightMultiplier}`);
        // console.log(`browserWidth: ${getBrowserWidth()}`);
        // console.log(`browserHeight: ${getBrowserHeight()}`);
        // console.log(`calculatedWidth: ${calculatedWidth}`);
        // console.log(`calculatedHeight: ${calculatedHeight}`);
        // console.log(`height: ${height}`);
        // console.log(`width: ${width}`);

        /*
        append the svg object to the body of the page
        appends a 'group' element to 'svg'
        moves the 'group' element to the top left margin
        */
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
            nodeEnter
                .append('rect')
                .attr('class', function (d) {
                    const item = getItem(d);

                    if (item.enabled) {
                        this.style.stroke = item.borderSelectColor
                            ? item.borderSelectColor
                            : classScope.defaultHightLightColor;
                    } else {
                        this.style.stroke = item.borderColor
                            ? item.borderColor
                            : classScope.defaultHightLightColor;
                    }

                    return `node ${classScope.unhighlightClassName}`;
                })
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
                .attr('id', function (d) {
                    const item = getItem(d);
                    return item.uri ? item.uri : 'unknown';
                })
                .style('fill', function (d) {
                    const item = getItem(d);
                    let returnColor;
                    if (item.enabled !== undefined && !item.enabled) {
                        //disabled
                        returnColor = classScope.defaultDisabledColor;
                    } else {
                        //eabled
                        switch (item.type) {
                            case NodeType.Input:
                                returnColor =
                                    item.hasError === true
                                        ? item.errorColor
                                        : item.bodyColour;

                                this.style.stroke =
                                    item.hasError === true
                                        ? item.errorBorder
                                        : item.borderColour;
                                break;
                            case NodeType.OutputItem:
                                returnColor =
                                    item.hasError === true
                                        ? item.errorColor
                                        : item.bodyColour;
                                this.style.stroke =
                                    item.hasError === true
                                        ? item.errorBorder
                                        : item.borderColour;
                                break;
                            default:
                                returnColor = item.bodyColour
                                    ? item.bodyColour
                                    : classScope.defaultNodeBgColor;
                                this.style.stroke = item.borderColour;
                        }
                    }
                    return returnColor;
                })
                .on('click', function (d) {
                    const item = getItem(d);
                    //set a timer for the single click
                    //if double click happens, it will prevent the function inside the timer to be called
                    prevent = false;
                    timer = setTimeout(() => {
                        if (!prevent) {
                            //this block is used for applying a highlight color to the code
                            this.style.stroke = item.borderColour;

                            //find the node where it was highlighted previously
                            const highlightedElements: HTMLCollectionOf<Element> =
                                document.getElementsByClassName(
                                    classScope.highlightClassName
                                );
                            console.log(highlightedElements);

                            if (highlightedElements?.length) {
                                for (
                                    let i = 0;
                                    i < highlightedElements.length;
                                    i++
                                ) {
                                    const element: any = highlightedElements[i];
                                    element.classList.remove(
                                        classScope.highlightClassName
                                    );
                                    element.classList.add(
                                        classScope.unhighlightClassName
                                    );

                                    if (
                                        (item.hasError &&
                                            item.type == NodeType.Input) ||
                                        (item.hasError &&
                                            item.type == NodeType.OutputItem)
                                    ) {
                                        element.style.stroke = item.errorBorder;
                                    } else {
                                        element.style.stroke =
                                            item.borderColour;
                                    }
                                }
                            } else {
                                this.classList.remove(
                                    classScope.unhighlightClassName
                                );
                                this.classList.add(
                                    classScope.highlightClassName
                                );
                                if (
                                    (item.hasError &&
                                        item.type == NodeType.Input) ||
                                    (item.hasError &&
                                        item.type == NodeType.OutputItem)
                                ) {
                                    this.style.stroke = item.errorBorder;
                                } else {
                                    this.style.stroke = item.borderSelectColor;
                                }
                            }
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
                .style('fill', function (d) {
                    return d.data.textColor
                        ? d.data.textColor
                        : classScope.defaultTextColor;
                })
                .text(function (d) {
                    return formatText(d.data.name);
                })
                .call(wrap, 110);
            /*
            Delete icon
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
            */
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
                .style('fill', function (d) {
                    return d.data.iconColor
                        ? d.data.iconColor
                        : classScope.defaultIconColor;
                })
                .text(function (d) {
                    return '\uf044';
                })
                .on('click', function (d) {
                    configureEditIconOnClick(d);
                });
            /*
                Add icon
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
            */
            //Toggle icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canToggleIconShow(d))
                .attr('dy', '-1.18em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.Toggle);
                })
                .style('fill', function (d) {
                    return d.data.iconColor
                        ? d.data.iconColor
                        : classScope.defaultIconColor;
                })
                .text(function (d) {
                    const item = getItem(d);

                    return item.enabled
                        ? classScope.toggleEnableIcon
                        : classScope.toggleDisableIcon;
                })
                .on('click', function (d) {
                    const curToggle = this.innerHTML;
                    let isEnabled = false;
                    const descendantList = d.descendants();

                    if (curToggle == classScope.toggleEnableIcon) {
                        isEnabled = false;
                        console.log(isEnabled);
                        toggleDescendants(d, descendantList, isEnabled, false);
                    } else {
                        isEnabled = true;
                        console.log(isEnabled);
                        toggleDescendants(d, descendantList, isEnabled, false);
                    }
                })
                .each(function (d) {
                    const item = getItem(d);
                    //node can be toggled and has been disabled
                    if (item.canToggle && !item.enabled) {
                        const descendantList = d.descendants();
                        const isEnabled = false;

                        if (item.type == NodeType.Input) {
                            toggleDescendants(
                                d,
                                descendantList,
                                isEnabled,
                                false
                            );
                        } else if (item.type == NodeType.Subscription) {
                            const ancestorList = d.ancestors();
                            //ancestorList and ancestorList.length are truthy
                            if (ancestorList?.length) {
                                const nearestAncestor = getItem(
                                    ancestorList[1]
                                );
                                //if ancestor is enabled, disable the all the descendants
                                if (nearestAncestor.enabled) {
                                    toggleDescendants(
                                        d,
                                        descendantList,
                                        isEnabled,
                                        false
                                    );
                                }
                            }
                        }
                    }
                });
            //Show Latest Data icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canShowLatestIconShow(d))
                .attr('dy', '-1.18em')
                .attr('x', function (d) {
                    return getIconPosInterim(d, IconType.ShowLatest);
                })
                .style('fill', function (d) {
                    return d.data.iconColor
                        ? d.data.iconColor
                        : classScope.defaultIconColor;
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
                .style('fill', function (d) {
                    return d.data.iconColor
                        ? d.data.iconColor
                        : classScope.defaultIconColor;
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

            function toggleDescendants(
                d3DataObj,
                descendantList,
                isEnabled,
                isInit
            ) {
                const toggleStyleId = 'text.fa.node-icon.toggle-icon';
                let newNodeBGColor;
                let newNodeBorderColor;

                for (const descendant of descendantList) {
                    const item = getItem(descendant);
                    item.enabled = isEnabled;
                    //find node reference
                    const nodeContainer = document.querySelector<HTMLElement>(
                        `#${item.uri}`
                    );

                    //change node bg color
                    if (isEnabled) {
                        //apply error color if the node isEnabled and hasError
                        if (
                            (item.hasError && item.type == NodeType.Input) ||
                            (item.hasError && item.type == NodeType.OutputItem)
                        ) {
                            newNodeBGColor = item.errorColor;
                            newNodeBorderColor = item.errorBorder;
                        } else {
                            newNodeBGColor = item.bodyColour
                                ? item.bodyColour
                                : classScope.defaultNodeBgColor;

                            newNodeBorderColor = item.borderColour;
                        }
                        nodeContainer.style.fill = newNodeBGColor;
                        nodeContainer.style.stroke = newNodeBorderColor;
                    } else {
                        nodeContainer.style.fill =
                            classScope.defaultDisabledColor;
                    }

                    //find the node's toggle reference
                    const toggleRef =
                        nodeContainer.parentNode.querySelector(toggleStyleId);

                    if (toggleRef) {
                        if (isEnabled)
                            //toggle enabled icon
                            toggleRef.innerHTML = classScope.toggleEnableIcon;
                        //toggle diabled icon
                        else toggleRef.innerHTML = classScope.toggleDisableIcon;
                    }
                }
                //the onClick function SHOULD not be called during init
                if (!isInit) {
                    configureToggleIconOnClick(d3DataObj, isEnabled);
                }
            }

            function getTypeIcon(d) {
                const item = getItem(d);

                if (item) {
                    switch (item.type) {
                        case NodeType.Connector:
                            if (item.typeIcon) return item.typeIcon;
                            return '\uf1e6';
                        case NodeType.Input:
                            if (item.typeIcon) return item.typeIcon;
                            return '\uf090';
                        case NodeType.Subscription:
                            if (item.typeIcon) return item.typeIcon;
                            return '\uf0ca';
                        case NodeType.OutputItem:
                            if (item.typeIcon) return item.typeIcon;
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

            function handleOnToggle(d, enabled) {
                if (d) {
                    classScope.toggleCallback(d, enabled);
                } else {
                    console.error('handleOnToggle: selected item is null');
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
                let returnText: string;
                if (checkIfSingleWord(text)) {
                    try {
                        returnText = splitTextAndNumber(text);
                    } catch (error) {
                        returnText = text;
                    }
                    return returnText;
                }
                //if not single word
                returnText = text;
                return returnText;
            }

            function checkIfSingleWord(text: string): boolean {
                var result = text.trim().indexOf(' ') === -1 ? true : false;
                return result;
            }
            function splitTextAndNumber(text: string) {
                let splitText = text.match(
                    /[A-Z][a-z]+|[0-9]+|[A-Z][A-Z]+|[a-z][A-Z]+/g
                );
                if (splitText) {
                    return splitText.join(' ');
                } else {
                    return text;
                }
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

                if (canToggle) return classScope.fontAwesomeToggleClass;
                else return classScope.hideIconClass;
            }

            function configureToggleIconOnClick(d, enabled) {
                const canToggle = enabled;
                if (canToggle) return handleOnToggle(d, enabled);
                else return handleOnToggle(d, enabled);
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
                                1.5,
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
        //calculateViewWidth
        function calculateViewWidth(
            depthestLevelHorizontalVal,
            nodesHorizontalGapSpaceEstimator
        ): number {
            let normal =
                140 * depthestLevelHorizontalVal +
                nodesHorizontalGapSpaceEstimator * 140;
            return normal;
        }
        //calculateViewHeight
        function calculateViewHeight(rectHeight, heightMultiplier): number {
            return rectHeight * 2 * heightMultiplier;
        }

        function getBrowserWidth() {
            return Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth
            );
        }

        function getBrowserHeight() {
            return Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );
        }
    }
}
