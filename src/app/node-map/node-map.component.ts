import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
export class NodeMapComponent implements OnInit {
    @Input() dataSource: any;
    @Input() public onEdit: (url: string, type: any, error?: Error) => void;
    @Input() public onDelete: (url: string, type: any, error?: Error) => void;
    @Input() public onAdd: (
        parentUrl: string,
        type: any,
        error?: Error
    ) => void;
    @Input() public onSelect: (url: string, type: any, error?: Error) => void;

    constructor() {
        // sayHello();
    }

    ngOnInit(): void {
        // console.log(this.dataSource);
        // console.log(data);
        // drawNodeMap();
        // TreeBoxes.drawNodeMap();
        // drawNodeMap(d3);
        this.drawNodeMap();
    }

    private drawNodeMap(): void {
        const classScope = this;
        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 10, bottom: 30, left: 10 },
            // width = 960 - margin.left - margin.right,
            width = document.body.clientWidth - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3
            .select('body')
            .append('svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom);

        // var asd = d3
        //     .select('body')
        //     .append('span')
        //     .append('text')
        //     .attr('x', 15)
        //     .attr('y', -17)
        //     .attr('fill', 'black')
        //     .attr('class', 'fa')
        //     .attr('font-size', function (d) {
        //         return '20px';
        //     })
        //     .text(function (d) {
        //         return '\uf044';
        //     });

        var g = svg
            .append('g')
            .attr(
                'transform',
                'translate(' + margin.left + ',' + margin.top + ')'
            );

        var i = 0,
            duration = 750,
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

        // Collapse the node and all it's children
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

            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * 180;
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

            nodeEnter
                .append('rect')
                .attr('class', 'node')
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('x', 0)
                .attr('y', (rectHeight / 2) * -1)
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
                    exapndCollapse(d);
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
            function exapndCollapse(d) {
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

            function handleOnSelect(d) {
                const item = d.data.nodes[0];
                try {
                    classScope.onSelect(item.uri, item.type, null);
                } catch (error) {
                    classScope.onSelect(null, null, error);
                }
            }
            function handleOnEdit(d) {
                const item = d.data.nodes[0];
                try {
                    classScope.onEdit(item.uri, item.type, null);
                } catch (error) {
                    classScope.onEdit(null, null, error);
                }
            }
            function handleOnDelete(d) {
                const item = d.data.nodes[0];
                try {
                    classScope.onDelete(item.uri, item.type, null);
                } catch (error) {
                    classScope.onDelete(null, null, error);
                }
            }
            function handleOnAdd(d) {
                const item = d.data.nodes[0];
                try {
                    classScope.onAdd(item.uri, item.type, null);
                } catch (error) {
                    classScope.onAdd(null, null, error);
                }
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
