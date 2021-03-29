import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import * as data from '../../assets/dataExample.json';
// import { drawNodeMap } from '../../../tree_boxes_modules/tree-boxes.js';

import * as d3 from 'd3';
// import * as d3hierarchy from 'd3-hierarchy';
// import * as d3selection from 'd3-selection';

// declare function drawNodeMap(d3: any): void;
// declare function sayHello(): void;

@Component({
    selector: 'app-node-map',
    templateUrl: './node-map.component.html',
    styleUrls: ['./node-map.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NodeMapComponent implements OnInit, OnChanges {
    @Input() dataSource: any;
    @Input() public onEdit: (item?: any) => void;
    @Input() public onDelete: (item?: any) => void;
    @Input() public onAdd: (item?: any) => void;
    @Input() public onSelect: (item?: any) => void;

    constructor() {
        // sayHello();
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
        console.log(this.dataSource);

        const classScope = this;
        // Set the dimensions and margins of the diagram
        var margin = { top: 8, right: 8, bottom: 8, left: 8 },
            // width = 960 - margin.left - margin.right,
            width = document.body.clientWidth - margin.left - margin.right,
            // height = 500 - margin.top - margin.bottom;
            //max depth -1 ?
            height = 140 * 4 - margin.top - margin.bottom;

        console.log('width');
        console.log(document.body.clientWidth);

        console.log('height');
        console.log(document.body.clientHeight);

        const nodeMap = document.querySelector('#node-map');
        console.log('nodeMap');
        console.log(nodeMap);
        console.log(nodeMap.clientHeight);
        console.log(nodeMap.clientWidth);

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

        // Assigns parent, children, height, depth
        root = d3.hierarchy(this.dataSource.root, (d: any) => d.nodes);

        // console.log('root');
        // console.log(root);

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

        function update(source) {
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

            var rectHeight = 70,
                rectWidth = 140;
            //setting to differenciate single click and double clicks
            var prevent = false;
            const delay = 200;
            var timer: any;

            console.log('rectHeight');
            console.log(rectHeight);
            console.log(rectHeight / 2);
            console.log((rectHeight / 2) * -1);

            nodeEnter
                .append('rect')
                .attr('class', 'node')
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('x', 0)
                .attr('y', (rectHeight / 2) * -1)
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
                .attr('dy', '-.35em')
                .attr('class', 'node-text')
                .attr('x', function (d) {
                    return 13;
                })
                .attr('text-anchor', function (d) {
                    return 'start';
                })
                .text(function (d) {
                    return d.data.name;
                })
                .append('tspan')
                .attr('class', 'node-text')
                .attr('dy', '1.75em')
                .attr('x', function (d) {
                    return 13;
                })
                .text(function (d) {
                    return d.data.type;
                });

            //Delete icon
            nodeEnter
                .append('text')
                .attr('class', 'fa fa-edit icon-edit')
                .attr('dy', '-1.1em')
                .attr('x', function (d) {
                    // console.log('fa-edit d');
                    // console.log(d);

                    return calculateNodeIconX(1.25, 1);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf1f8';
                })
                .on('click', function (d) {
                    handleOnDelete(d);
                });
            //Edit icon
            nodeEnter
                .append('text')
                .attr('class', 'fa fa-edit icon-edit')
                .attr('dy', '-1.05em')
                .attr('x', function (d) {
                    // console.log('fa-edit d');
                    // console.log(d);
                    return calculateNodeIconX(1.525, 2);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf044';
                })
                .on('click', function (d) {
                    handleOnEdit(d);
                });

            //Add icon
            nodeEnter
                .append('text')
                .attr('class', 'fa fa-edit icon-edit')
                .attr('dy', '-1.10em')
                .attr('x', function (d) {
                    // console.log('fa-edit d');
                    // console.log(d);
                    return calculateNodeIconX(1.6, 3);
                })
                .attr('font-size', function (d) {
                    return '12px';
                })
                .text(function (d) {
                    return '\uf067';
                })
                .on('click', function (d) {
                    handleOnAdd(d);
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
                return rectWidth - (rectWidth / 10) * (distance * multiplier);
            }
        }
    }
}
