import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import * as data from '../../assets/dataExample.json';
// import { treeBoxes } from '../../../tree_boxes_modules/tree-boxes.js';
import * as d3 from 'd3';
declare function treeBoxes(urlService: string, jsonData: any): void;
declare function sayHello(): void;

const treeData = {
    tree: {
        nodeName: 'NODE NAME 1',
        name: 'NODE NAME 1',
        type: 'type3',
        code: 'N1',
        label: 'Node name 1',
        version: 'v1.0',
        link: {
            name: 'Link NODE NAME 1',
            nodeName: 'NODE NAME 1',
            direction: 'ASYN',
        },
        children: [
            {
                nodeName: 'NODE NAME 2.1',
                name: 'NODE NAME 2.1',
                type: 'type1',
                code: 'N2.1',
                label: 'Node name 2.1',
                version: 'v1.0',
                link: {
                    name: 'Link node 1 to 2.1',
                    nodeName: 'NODE NAME 2.1',
                    direction: 'SYNC',
                },
                children: [
                    {
                        nodeName: 'NODE NAME 3.1',
                        name: 'NODE NAME 3.1',
                        type: 'type2',
                        code: 'N3.1',
                        label: 'Node name 3.1',
                        version: 'v1.0',
                        link: {
                            name: 'Link node 2.1 to 3.1',
                            nodeName: 'NODE NAME 3.1',
                            direction: 'SYNC',
                        },
                        children: [],
                    },
                    {
                        nodeName: 'NODE NAME 3.2',
                        name: 'NODE NAME 3.2',
                        type: 'type2',
                        code: 'N3.2',
                        label: 'Node name 3.2',
                        version: 'v1.0',
                        link: {
                            name: 'Link node 2.1 to 3.2',
                            nodeName: 'NODE NAME 3.1',
                            direction: 'SYNC',
                        },
                        children: [],
                    },
                ],
            },
            {
                nodeName: 'NODE NAME 2.2',
                name: 'NODE NAME 2.2',
                type: 'type1',
                code: 'N2.2',
                label: 'Node name 2.2',
                version: 'v1.0',
                link: {
                    name: 'Link node 1 to 2.2',
                    nodeName: 'NODE NAME 2.2',
                    direction: 'ASYN',
                },
                children: [],
            },
            {
                nodeName: 'NODE NAME 2.3',
                name: 'NODE NAME 2.3',
                type: 'type1',
                code: 'N2.3',
                label: 'Node name 2.3',
                version: 'v1.0',
                link: {
                    name: 'Link node 1 to 2.3',
                    nodeName: 'NODE NAME 2.3',
                    direction: 'ASYN',
                },
                children: [
                    {
                        nodeName: 'NODE NAME 3.3',
                        name: 'NODE NAME 3.3',
                        type: 'type1',
                        code: 'N3.3',
                        label: 'Node name 3.3',
                        version: 'v1.0',
                        link: {
                            name: 'Link node 2.3 to 3.3',
                            nodeName: 'NODE NAME 3.3',
                            direction: 'ASYN',
                        },
                        children: [
                            {
                                nodeName: 'NODE NAME 4.1',
                                name: 'NODE NAME 4.1',
                                type: 'type4',
                                code: 'N4.1',
                                label: 'Node name 4.1',
                                version: 'v1.0',
                                link: {
                                    name: 'Link node 3.3 to 4.1',
                                    nodeName: 'NODE NAME 4.1',
                                    direction: 'SYNC',
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        nodeName: 'NODE NAME 3.4',
                        name: 'NODE NAME 3.4',
                        type: 'type1',
                        code: 'N3.4',
                        label: 'Node name 3.4',
                        version: 'v1.0',
                        link: {
                            name: 'Link node 2.3 to 3.4',
                            nodeName: 'NODE NAME 3.4',
                            direction: 'ASYN',
                        },
                        children: [
                            {
                                nodeName: 'NODE NAME 4.2',
                                name: 'NODE NAME 4.2',
                                type: 'type4',
                                code: 'N4.2',
                                label: 'Node name 4.2',
                                version: 'v1.0',
                                link: {
                                    name: 'Link node 3.4 to 4.2',
                                    nodeName: 'NODE NAME 4.1',
                                    direction: 'ASYN',
                                },
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

@Component({
    selector: 'app-node-map',
    templateUrl: './node-map.component.html',
    styleUrls: ['./node-map.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NodeMapComponent implements OnInit {
    constructor() {
        sayHello();
        d3.json('../../assets/dataExample.json', function (error, json) {
            console.log('inside d3json');
            console.log(json);

            treeBoxes('', json.tree);
        });
    }

    ngOnInit(): void {
        // console.log(data);
    }
}
