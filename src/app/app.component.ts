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

    public onToggleCallback = (item?: any): void => {
        console.log(`onToggleCallback - item: ${item} uri:${item.uri}`);
    };
    public onShowLatestDataCallack = (item?: any): void => {
        console.log(`onShowLatestDataCallack - item: ${item} uri:${item.uri}`);
    };

    COL_LEV_1 = '#1976D2';
    COL_LEV_2 = '#00BCD4';
    COL_LEV_3 = '#4CAF50';
    COL_LEV_4 = '#FFC107';
    COL_LEV_5 = '#FF5722';
    COL_LEV_6 = '#ff1744';
    COL_LEV_7 = '#f50057';

    dataBusScadaData: object = {
        root: {
            uri: 'id-1',
            name: 'SCADA Items Connector SCADA Items Connector SCADA Items Connector',
            description: 'Stuff',
            plugin: 'OPC HDA',
            type: 'Connector',
            bodyColour: this.COL_LEV_1,
            borderColour: this.COL_LEV_2,
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
                    borderColour: this.COL_LEV_3,
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
                            borderColour: this.COL_LEV_4,
                            canEdit: false,
                            canAdd: false,
                            canToggle: true,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'id-1-1-1',
                                    name: 'STUFF',
                                    description: 'Stuff',
                                    type: 'Subscription',
                                    bodyColour: this.COL_LEV_4,
                                    borderColour: this.COL_LEV_4,
                                    canEdit: false,
                                    canAdd: false,
                                    canToggle: true,
                                    canDelete: true,
                                    nodes: [
                                        {
                                            uri: 'id-1-1-1',
                                            name: 'STUFF',
                                            description: 'Stuff',
                                            type: 'Subscription',
                                            bodyColour: this.COL_LEV_5,
                                            borderColour: this.COL_LEV_6,
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
                                                    borderColour:
                                                        this.COL_LEV_7,
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
                                                                this.COL_LEV_1,
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
                            borderColour: this.COL_LEV_4,
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
                                    borderColour: this.COL_LEV_5,
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
                            borderColour: this.COL_LEV_4,
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
                                    borderColour: this.COL_LEV_5,
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
                            borderColour: this.COL_LEV_4,
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
                                    borderColour: this.COL_LEV_5,
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
                            borderColour: this.COL_LEV_4,
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
                                    borderColour: this.COL_LEV_5,
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
            borderColour: 'red',
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

    dataWithIssue: Object = {
        root: {
            uri: 'in-random-random',
            name: 'Random',
            plugin: 'Indicium.DataBus.Plugins.DataSources.RandomPlugin',
            type: 'Connector',
            typeIcon: '',
            bodyColour: '#1976D2',
            borderColour: 'red',
            canAdd: false,
            canEdit: false,
            canDelete: false,
            nodes: [
                {
                    uri: 'in-random-random-template',
                    name: 'Template',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    borderColour: 'red',
                    canAdd: false,
                    canToggle: true,
                    canEdit: true,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-template-test',
                            name: 'Test',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            canAdd: false,
                            canToggle: true,
                            canEdit: true,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-template-test-loggingpipelineplugin-0',
                                    name: 'LoggingPipelinePlugin',
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    canAdd: false,
                                    canEdit: false,
                                    canDelete: false,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-random-random-test1',
                    name: 'Test 1',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: 'red',
                    canAdd: false,
                    canEdit: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-test1-testimage',
                            name: 'Test Image',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-test1-testimage-pythonplugin-0',
                                    name: 'PythonPlugin',
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: 'red',
                                    canAdd: false,
                                    canEdit: false,
                                    canDelete: false,
                                    nodes: [
                                        {
                                            uri: 'in-random-random-test1-testimage-loggingpipelineplugin-0',
                                            name: 'LoggingPipelinePlugin',
                                            description: 'Subscription Item',
                                            type: 'Subscription Item',
                                            typeIcon: '',
                                            bodyColour: '#FFC107',
                                            borderColour: 'red',
                                            canAdd: false,
                                            canEdit: false,
                                            canDelete: false,
                                            nodes: [
                                                {
                                                    uri: 'in-random-random-test1-testimage-azurecomputervisionplugin-0',
                                                    name: 'Azure Computer Vision Plugin',
                                                    description:
                                                        'Subscription Item',
                                                    type: 'Subscription Item',
                                                    typeIcon: '',
                                                    bodyColour: '#FFC107',
                                                    borderColour: 'red',
                                                    canAdd: false,
                                                    canEdit: false,
                                                    canDelete: false,
                                                    nodes: [
                                                        {
                                                            uri: 'in-random-random-test1-testimage-localdbplugin-0',
                                                            name: 'LocalDbPlugin',
                                                            description:
                                                                'Subscription Item',
                                                            type: 'Subscription Item',
                                                            typeIcon: '',
                                                            bodyColour:
                                                                '#FFC107',
                                                            borderColour:
                                                                '#FFF',
                                                            canAdd: false,
                                                            canEdit: false,
                                                            canDelete: false,
                                                            nodes: [],
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
                {
                    uri: 'in-random-random-test2',
                    name: 'Test 2',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: 'red',
                    canAdd: false,
                    canEdit: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-test3-test',
                            name: 'Test',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-test2-test-consolepipelineplugin-0',
                                    name: 'ConsolePipelinePlugin',
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: 'red',
                                    canAdd: false,
                                    canEdit: false,
                                    canDelete: false,
                                    nodes: [
                                        {
                                            uri: 'in-random-random-test2-test-tablestorageplugin-0',
                                            name: 'TableStoragePlugin',
                                            description: 'Subscription Item',
                                            type: 'Subscription Item',
                                            typeIcon: '',
                                            bodyColour: '#FFC107',
                                            borderColour: 'red',
                                            canAdd: false,
                                            canEdit: false,
                                            canDelete: false,
                                            nodes: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            uri: 'in-random-random-test3-test2',
                            name: 'TEST2',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [],
                        },
                    ],
                },
                {
                    uri: 'in-random-random-test3',
                    name: 'Test 3',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: 'red',
                    canAdd: false,
                    canEdit: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-test3-test',
                            name: 'Test',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-test3-test-consolepipelineplugin-0',
                                    name: 'ConsolePipelinePlugin',
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: 'red',
                                    canAdd: false,
                                    canEdit: false,
                                    canDelete: false,
                                    nodes: [
                                        {
                                            uri: 'in-random-random-test3-test-tablestorageplugin-0',
                                            name: 'TableStoragePlugin',
                                            description: 'Subscription Item',
                                            type: 'Subscription Item',
                                            typeIcon: '',
                                            bodyColour: '#FFC107',
                                            borderColour: 'red',
                                            canAdd: false,
                                            canEdit: false,
                                            canDelete: false,
                                            nodes: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            uri: 'in-random-random-test3-test2',
                            name: 'TEST2',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [],
                        },
                    ],
                },
                {
                    uri: 'in-random-random-test4',
                    name: 'Test 4',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: 'red',
                    canAdd: false,
                    canEdit: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-test4-logger',
                            name: 'Logger',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [],
                        },
                    ],
                },
                {
                    uri: 'in-random-random-test5',
                    name: 'Test 5',
                    description: 'Input',
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: 'red',
                    canAdd: false,
                    canEdit: false,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-test5-logger',
                            name: 'Logger',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: 'red',
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-test5-logger-loggingpipelineplugin-0',
                                    name: 'LoggingPipelinePlugin',
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: 'red',
                                    canAdd: false,
                                    canEdit: false,
                                    canDelete: false,
                                    nodes: [],
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
        return this.dataWithIssue;
    }

    public onBtnClick() {
        console.log('button on click');
        this.dataSourceJson = this.getDataBus2Json();
    }

    private getDataBus2Json(): object {
        return this.dataBusScadaData;
    }
}
