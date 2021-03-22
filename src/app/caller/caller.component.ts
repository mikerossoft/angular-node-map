import { Component, OnInit, ViewChild } from '@angular/core';
import { NodeMapComponent } from '../node-map/node-map.component';

@Component({
    selector: 'app-caller',
    templateUrl: './caller.component.html',
    styleUrls: ['./caller.component.scss'],
})
export class CallerComponent implements OnInit {
    @ViewChild(NodeMapComponent) nodeMap: NodeMapComponent;

    dataSourceJson = {};
    public onDeleteCallback = (item?: any): void => {
        console.log(`onDelete - item: ${item} uri:${item.uri}`);
    };
    public onEditCallback = (item?: any): void => {
        console.log(`onEdit - item: ${item} uri:${item.uri}`);
    };
    public onAddCallback = (item?: any): void => {
        console.log(`onAdd - item: ${item} uri:${item.uri}`);
    };
    public onSelectCallback = (item?: any): void => {
        console.log(`onSelect - item: ${item} uri:${item.uri}`);
    };

    dataBusData: object = {
        root: {
            name: 'DataBus',
            nodes: [
                {
                    uri: 'id-1',
                    name: 'SCADA',
                    description: 'Stuff',
                    plugin: 'OPC HDA',
                    type: 'Connector',
                    bodyColour: '#1976D2',
                    borderColour: '#FFF',
                    canEdit: false,
                    nodes: [
                        {
                            uri: 'id-1-1',
                            name: 'Tank Level',
                            description: 'Stuff',
                            type: 'Input',
                            bodyColour: '#00BCD4',
                            borderColour: '#EEE',
                            canEdit: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'Archive',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: '#4CAF50',
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1-1',
                                            name: 'Transform',
                                            description: 'Stuff',
                                            plugin: 'Iron Python',
                                            type: 'Output',
                                            bodyColour: '#FFC107',
                                            borderColour: '#BBB',
                                            canEdit: false,
                                            nodes: [
                                                {
                                                    uri: 'id-1-1-1-1-1',
                                                    name: 'Azure Storage',
                                                    description: 'Stuff',
                                                    plugin: 'Azure Storage',
                                                    type: 'Output',
                                                    bodyColour: '#FF5722',
                                                    borderColour: '#AAA',
                                                    canEdit: false,
                                                },
                                                {
                                                    uri: 'id-1-1-1-1-2',
                                                    name: 'SQL Database',
                                                    plugin: 'MS SQL',
                                                    description: 'Stuff',
                                                    type: 'Output',
                                                    bodyColour: '#FF5722',
                                                    borderColour: '#AAA',
                                                    canEdit: false,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    };

    constructor() {}

    ngOnInit(): void {
        this.dataSourceJson = this.getDataBusJson();
    }

    private getDataBusJson(): object {
        return this.dataBusData;
    }

    public onBtnClick() {
        console.log('button on click');
        this.dataSourceJson = this.getDataBus2Json();
        // this.nodeMap.drawNodeMap();
    }

    private getDataBus2Json(): object {
        return this.dataBusData2;
    }

    dataBusData2: object = {
        root: {
            name: 'DataBus',
            nodes: [
                {
                    uri: 'id-1',
                    name: 'SCADA',
                    description: 'Stuff',
                    plugin: 'OPC HDA',
                    type: 'Connector',
                    bodyColour: '#1976D2',
                    borderColour: '#FFF',
                    canEdit: false,
                    nodes: [
                        {
                            uri: 'id-1a',
                            name: 'SCADA B',
                            description: 'Stuff',
                            type: 'Input',
                            bodyColour: '#1010F2',
                            borderColour: '#EEE',
                            canEdit: false,
                            nodes: [
                                {
                                    uri: 'id-1-1',
                                    name: 'Tank Level',
                                    description: 'Stuff',
                                    type: 'Input',
                                    bodyColour: '#00BCD4',
                                    borderColour: '#EEE',
                                    canEdit: false,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1',
                                            name: 'Archive',
                                            description: 'Stuff',
                                            type: 'Subscription',
                                            bodyColour: '#4CAF50',
                                            borderColour: '#CCC',
                                            canEdit: false,
                                            nodes: [
                                                {
                                                    uri: 'id-1-1-1-1',
                                                    name: 'Transform',
                                                    description: 'Stuff',
                                                    plugin: 'Iron Python',
                                                    type: 'Output',
                                                    bodyColour: '#FFC107',
                                                    borderColour: '#BBB',
                                                    canEdit: false,
                                                    nodes: [
                                                        {
                                                            uri: 'id-1-1-1-1-1',
                                                            name:
                                                                'Azure Storage',
                                                            description:
                                                                'Stuff',
                                                            plugin:
                                                                'Azure Storage',
                                                            type: 'Output',
                                                            bodyColour:
                                                                '#FF5722',
                                                            borderColour:
                                                                '#AAA',
                                                            canEdit: false,
                                                        },
                                                        {
                                                            uri: 'id-1-1-1-1-2',
                                                            name:
                                                                'SQL Database',
                                                            plugin: 'MS SQL',
                                                            description:
                                                                'Stuff',
                                                            type: 'Output',
                                                            bodyColour:
                                                                '#FF5722',
                                                            borderColour:
                                                                '#AAA',
                                                            canEdit: false,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    };
}
