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
}

@Component({
    selector: 'app-node-map',
    templateUrl: './ng-node-map.component.html',
    styleUrls: ['./ng-node-map.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NodeMapComponent implements OnInit, OnChanges {
    @Input() dataSource: any;
    @Input() public onEdit: (item?: any) => void;
    @Input() public onDelete: (item?: any) => void;
    @Input() public onAdd: (item?: any) => void;
    @Input() public onSelect: (item?: any) => void;
    rectHeight: number = 0;
    rectWidth: number = 0;
    fontAwesomeClass = 'fa fa-edit icon-edit';
    hideIconClass = 'hide-icon';

    constructor() {
        this.rectHeight = 65;
        this.rectWidth = 120;
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
        // console.log(this.dataSource);
        console.log(document.querySelectorAll('.node-map'));
        if (document.querySelectorAll('.node-map').length > 0) {
            this.cleanUp();
        }

        this.drawNodeMap();
    }

    private cleanUp(): void {
        document.querySelectorAll('.node-map').forEach(function (element) {
            element.remove();
        });
    }

    ngOnInit(): void {}

    private drawNodeMap(): void {
        const classScope = this;

        const nodeMapRoot = this.dataSource as NodeMapRoot;
      
        if (!(nodeMapRoot && nodeMapRoot.root && nodeMapRoot.root.nodes)){
          nodeMapRoot.root.nodes = []
        }
      
        const nodes = nodeMapRoot.root.nodes;

        // Assigns parent, children, height, depth
        root = d3.hierarchy(this.dataSource.root, (d: any) => d.nodes);
        const depthestLevelHorizontal = getMaxLevelHorizontally(root);
        console.log(`depthestLevelHorizontal:${depthestLevelHorizontal}`);

        const depthestLevelHorizontalVal = Number.isFinite(
            depthestLevelHorizontal
        )
            ? depthestLevelHorizontal
            : 0;
        const nodesHorizontalGapSpaceEstimator = Math.round(
            depthestLevelHorizontalVal / 3
        );

        //using recursive function to get the verticle node level
        const nodesLength: number[] = [];
        getMaxArrayLengthFromSource(nodes);
        const maxArrayLength = Math.max(...nodesLength);
        //using this variable to calculate the height of the drawing
        //3 general fits for most of the case, so the default number will be 3
        const heightMultiplier = maxArrayLength < 3 ? 3 : maxArrayLength;

        const nodesVerticalGapSpaceEstimator = Math.round(maxArrayLength / 3);
        // const rectWidth = 120,
        // rectHeight = 65;
        // Set the dimensions and margins of the diagram
        var margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width =
                140 * depthestLevelHorizontalVal +
                nodesHorizontalGapSpaceEstimator * 140,
            height =
                70 * nodesVerticalGapSpaceEstimator + 140 * heightMultiplier;
        console.log(`heightMultiplier: ${heightMultiplier}`);

        console.log('width');
        console.log(width);

        console.log('height');
        console.log(height);

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

        function getMaxArrayLengthFromSource(nodeMap: any): void {
            for (var i = 0; i < nodeMap.length; i++) {
                if (Array.isArray(nodeMap[i].nodes)) {
                    nodesLength.push(nodeMap[i].nodes.length);
                    getMaxArrayLengthFromSource(nodeMap[i].nodes);
                }
            }
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
                    //if bodyColour is not defined, returns the #303F9F default color
                    return d.data.bodyColour ? d.data.bodyColour : '#303F9F';
                })
                .on('click', function (d) {
                    const highlightClassName = 'node_onselect_highlight';
                    //set a timer for the single click
                    //if double click happens, it will prevent the function inside the timer to be called
                    prevent = false;
                    timer = setTimeout(() => {
                        if (!prevent) {
                            console.log(this);
                            const highlightedClasses = document.getElementsByClassName(
                                highlightClassName
                            );

                            if (highlightedClasses) {
                                while (highlightedClasses.length) {
                                    highlightedClasses[0].classList.remove(
                                        highlightClassName
                                    );
                                }
                            }

                            this.classList.add(highlightClassName);
                            handleOnSelect(d);
                        }
                    }, delay);
                })
                .on('dblclick', function (d) {
                    //assign value to prevent the single click from
                    //calling the timer function
                    prevent = true;
                    console.log(`dblclick prevent: ${prevent}`);
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
                    return formatTitleText(d.data.name);
                })
                .append('tspan')
                .attr('class', 'node-text')
                .attr('dy', '1.50em')
                .attr('x', function (d) {
                    return 13;
                })
                .text(function (d) {
                    return formatTypeText(d.data.type);
                });

            //Delete icon
            nodeEnter
                .append('text')
                .attr('class', (d) => canDeleteIconShow(d))
                .attr('dy', '-1.1em')
                .attr('x', function (d) {
                    return getIconPos(d, IconType.Delete);
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
                .attr('dy', '-1.05em')
                .attr('x', function (d) {
                    return getIconPos(d, IconType.Edit);
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
                .attr('dy', '-1.10em')
                .attr('x', function (d) {
                    return getIconPos(d, IconType.Add);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf067';
                })
                .on('click', function (d) {
                    configureAddIconOnClick(d);
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
                console.log(d);

                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }

                update(d);
            }

            function handleOnSelect(d) {
                const item = getItem(d);
                if (item) {
                    classScope.onSelect(item);
                } else {
                    console.error('handleOnSelect: selected item is null');
                }
            }

            function handleOnEdit(d) {
                const item = getItem(d);
                if (item) {
                    classScope.onEdit(item);
                } else {
                    console.error('handleOnEdit: selected item is null');
                }
            }
            function handleOnDelete(d) {
                const item = getItem(d);
                if (item) {
                    classScope.onDelete(item);
                } else {
                    console.error('handleOnDelete: selected item is null');
                }
            }
            function handleOnAdd(d) {
                const item = getItem(d);
                if (item) {
                    classScope.onAdd(item);
                } else {
                    console.error('handleOnAdd: selected item is null');
                }
            }
            function handleNothing() {}

            function getItem(d: any): any {
                let item;
                try {
                    item = d.data.nodes[0];
                } catch (error) {
                    item = d.data;
                }
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

            function formatTitleText(display: string): any {
                const longTextSymbol = '..';
                if (display.length > 10) {
                    return display.substr(0, 10) + longTextSymbol;
                } else {
                    return display;
                }
            }

            function formatTypeText(display: string): any {
                const longTextSymbol = '..';
                if (display.length > 16) {
                    return display.substr(0, 16) + longTextSymbol;
                } else {
                    return display;
                }
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
                const numberOfDisplayIcons = iconFlagList.filter(Boolean)
                    .length;

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
