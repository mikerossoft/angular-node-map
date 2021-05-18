import { Component, OnInit, ViewChild } from '@angular/core';
// import { NodeMapComponent } from './node-map/node-map.component';
import { NodeMapModule } from './modules/ng-node-map/ng-node-map.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(NodeMapModule) nodeMap: NodeMapModule;
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

    COL_LEV_1 = '#1976D2';
    COL_LEV_2 = '#00BCD4';
    COL_LEV_3 = '#4CAF50';
    COL_LEV_4 = '#FFC107';
    COL_LEV_5 = '#FF5722';
    COL_LEV_6 = '#ff1744';
    COL_LEV_7 = '#f50057';

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
                                                    nodes: [
                                                        {
                                                            uri: 'id-1-1-1-1-1',
                                                            name: 'Azure Storage',
                                                            description:
                                                                'Stuff',
                                                            plugin: 'Azure Storage',
                                                            type: 'Output',
                                                            bodyColour:
                                                                '#FF5722',
                                                            borderColour:
                                                                '#AAA',
                                                            canEdit: false,
                                                            nodes: [
                                                                {
                                                                    uri: 'id-1-1-1-1-1',
                                                                    name: 'Azure Storage',
                                                                    description:
                                                                        'Stuff',
                                                                    plugin: 'Azure Storage',
                                                                    type: 'Output',
                                                                    bodyColour:
                                                                        '#FF5722',
                                                                    borderColour:
                                                                        '#AAA',
                                                                    canEdit:
                                                                        false,
                                                                    nodes: [
                                                                        {
                                                                            uri: 'id-1-1-1-1-1',
                                                                            name: 'Azure Storage',
                                                                            description:
                                                                                'Stuff',
                                                                            plugin: 'Azure Storage',
                                                                            type: 'Output',
                                                                            bodyColour:
                                                                                '#FF5722',
                                                                            borderColour:
                                                                                '#AAA',
                                                                            canEdit:
                                                                                false,
                                                                            nodes: [
                                                                                {
                                                                                    uri: 'id-1-1-1-1-1',
                                                                                    name: 'Azure Storage',
                                                                                    description:
                                                                                        'Stuff',
                                                                                    plugin: 'Azure Storage',
                                                                                    type: 'Output',
                                                                                    bodyColour:
                                                                                        '#FF5722',
                                                                                    borderColour:
                                                                                        '#AAA',
                                                                                    canEdit:
                                                                                        false,
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
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

    dataBusScadaData: object = {
        root: {
            uri: 'id-1',
            name: 'SCADASCADASCADA',
            description: 'Stuff',
            plugin: 'OPC HDA',
            type: 'Connector',
            bodyColour: this.COL_LEV_1,
            borderColour: '#FFF',
            canEdit: true,
            canDelete: true,
            canAdd: false,
            nodes: [
                {
                    uri: 'id-1-1',
                    name: 'POWER',
                    description: 'Stuff',
                    type: 'Input',
                    bodyColour: this.COL_LEV_2,
                    borderColour: '#EEE',
                    canEdit: true,
                    canAdd: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'id-1-1-1',
                            name: 'AZURE',
                            description: 'Stuff',
                            type: 'SubscriptionSubscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            canAdd: true,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    canAdd: true,
                                    canDelete: true,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1',
                                            name: 'STUFF',
                                            description: 'Stuff',
                                            type: 'Subscription',
                                            bodyColour: this.COL_LEV_5,
                                            borderColour: '#CCC',
                                            canEdit: true,
                                            canAdd: false,
                                            canDelete: true,
                                            nodes: [
                                                {
                                                    uri: 'id-1-1-1',
                                                    name: 'STUFF',
                                                    description: 'Stuff',
                                                    type: 'Subscription',
                                                    bodyColour: this.COL_LEV_6,
                                                    borderColour: '#CCC',
                                                    canEdit: false,
                                                    canAdd: false,
                                                    canDelete: false,
                                                    nodes: [
                                                        {
                                                            uri: 'id-1-1-1',
                                                            name: 'STUFF',
                                                            description:
                                                                'Stuff',
                                                            type: 'Subscription',
                                                            bodyColour:
                                                                this.COL_LEV_7,
                                                            borderColour:
                                                                '#CCC',
                                                            canEdit: false,
                                                            canAdd: false,
                                                            canDelete: false,
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            uri: 'id-1-1-1',
                            name: 'LOCAL',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: true,
                            canAdd: true,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    canAdd: false,
                                    canDelete: false,
                                },
                            ],
                        },
                        {
                            uri: 'id-1-1-1',
                            name: 'AWS',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            canAdd: false,
                            canDelete: true,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    canAdd: false,
                                    canDelete: false,
                                },
                            ],
                        },
                        {
                            uri: 'id-1-1-1',
                            name: 'GCP',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            canAdd: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    canAdd: false,
                                    canDelete: false,
                                },
                            ],
                        },
                        {
                            uri: 'id-1-1-1',
                            name: 'DIGITAL OCEAN',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            canAdd: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    canAdd: false,
                                    canDelete: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    };

    dataBusIoTData: object = {
        root: {
            uri: 'id-1',
            name: 'LORA',
            description: 'Stuff',
            plugin: 'OPC HDA',
            type: 'Connector',
            bodyColour: this.COL_LEV_1,
            borderColour: '#FFF',
            canEdit: true,
            nodes: [
                {
                    uri: 'id-1-1',
                    name: 'W01',
                    description: 'Stuff',
                    type: 'Input',
                    bodyColour: this.COL_LEV_2,
                    borderColour: '#EEE',
                    canEdit: true,
                    nodes: [
                        {
                            uri: 'id-1-1-1',
                            name: 'STUFF',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                },
                            ],
                        },
                        {
                            uri: 'id-1-1-1',
                            name: 'LOCAL',
                            description: 'Stuff',
                            type: 'Subscription',
                            bodyColour: this.COL_LEV_3,
                            borderColour: '#CCC',
                            canEdit: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1',
                                            name: 'STUFF',
                                            description: 'Stuff',
                                            type: 'Subscription',
                                            bodyColour: this.COL_LEV_5,
                                            borderColour: '#CCC',
                                            canEdit: false,
                                        },
                                    ],
                                },
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                },
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                },

                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: '#CCC',
                                    canEdit: false,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1',
                                            name: 'STUFF',
                                            description: 'Stuff',
                                            type: 'Subscription',
                                            bodyColour: this.COL_LEV_5,
                                            borderColour: '#CCC',
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
    };

    constructor() {}

    ngOnInit(): void {
        this.dataSourceJson = this.getDataBusJson();
    }

    private getDataBusJson(): object {
        return this.dataBusScadaData;
    }

    public onBtnClick() {
        console.log('button on click');
        this.dataSourceJson = this.getDataBus2Json();
        // this.nodeMap.drawNodeMap();
    }

    private getDataBus2Json(): object {
        return this.dataBusIoTData;
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
                                                            name: 'Azure Storage',
                                                            description:
                                                                'Stuff',
                                                            plugin: 'Azure Storage',
                                                            type: 'Output',
                                                            bodyColour:
                                                                '#FF5722',
                                                            borderColour:
                                                                '#AAA',
                                                            canEdit: false,
                                                        },
                                                        {
                                                            uri: 'id-1-1-1-1-2',
                                                            name: 'SQL Database',
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
