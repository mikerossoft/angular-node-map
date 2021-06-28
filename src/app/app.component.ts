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

    public onToggleCallback = (item?: any, enabled?: boolean): void => {
        console.log(`onToggleCallback - item: ${item} enabled: ${enabled}}`);
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

    dataBusScadaDataIssue: object = {
        root: {
            uri: 'id-1',
            name: 'SCADASCADASCADA',
            description: 'Stuff',
            plugin: 'OPC HDA',
            type: 'Connector',
            typeIcon: '\uf2cd',
            bodyColour: this.COL_LEV_1,
            borderColour: '#FFF',
            canEdit: true,
            canDelete: true,
            enabled: true,
            canAdd: true,
            canToggle: true,
            canShowLatest: false,
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
                    canToggle: false,
                    canShowLatest: true,
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

    dataWithIssue: Object = {
        root: {
            uri: 'in-random-random',
            name: 'Random',
            plugin: 'Indicium.DataBus.Plugins.DataSources.RandomPlugin',
            type: 'Connector',
            typeIcon: '',
            bodyColour: '#1976D2',
            borderColour: 'red',
            textColor: '#4CAF50',
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
                    enabled: true,
                    canAdd: false,
                    canToggle: true,
                    canShowLatest: false,
                    canEdit: true,
                    canDelete: false,
                    nodes: [
                        {
                            uri: 'in-random-random-template-test',
                            name: 'Test',
                            description: 'Subscription',
                            type: 'Subscription',
                            typeIcon: '',
                            enabled: false,
                            canAdd: false,
                            canToggle: true,
                            canShowLatest: true,
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
                    enabled: false,
                    canToggle: true,
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

    largeJson: Object = {
        root: {
            uri: 'in-restapi-restapi',
            name: 'XOVIS - Rest API',
            plugin: 'Indicium.DataBus.Core.RestApiPlugin',
            type: 'Connector',
            typeIcon: '',
            bodyColour: '#1976D2',
            borderColour: '#FFF',
            enabled: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
            canToggle: false,
            canShowLatest: false,
            nodes: [
                {
                    uri: 'in-restapi-restapi-unitaspc2s101',
                    name: 'UniTas_PC2S_101',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s101',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_101',
                        description: 'Main Entrance',
                        lastEventTime: '2021-05-25T04:41:33.0374358+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'none',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.69',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L01',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'building-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L01101',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s101-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s101',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T04:41:32.6714294+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s101-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7965887+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:41:32.675175+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s101-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s101-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s101',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T04:41:32.6714294+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s101-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7965887+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:41:32.675175+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s101-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s101-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7965887+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:41:32.675175+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s102',
                    name: 'UniTas_PC2S_102',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s102',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_102',
                        description: 'Room 102',
                        lastEventTime: '2021-05-25T06:15:05.3201151+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.70',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L01',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L01102',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '15',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s102-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s102',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:15:04.1990831+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s102-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966065+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:15:04.2028757+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s102-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s102-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s102',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:15:04.1990831+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s102-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966065+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:15:04.2028757+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s102-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s102-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966065+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:15:04.2028757+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s131',
                    name: 'UniTas_PC2S_131',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s131',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_131',
                        description: 'Security Entrance',
                        lastEventTime: '2021-05-25T04:55:07.8878496+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.68',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L01',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'building-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L01131',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s131-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s131',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T04:55:05.7245362+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s131-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966134+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:55:05.7247874+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s131-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s131-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s131',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T04:55:05.7245362+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s131-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966134+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:55:05.7247874+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s131-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s131-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966134+10:00',
                                        lastEventTime:
                                            '2021-05-25T04:55:05.7247874+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s211',
                    name: 'UniTas_PC2S_211',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s211',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_211',
                        description: 'Room 211',
                        lastEventTime: '2021-05-25T06:20:45.3317995+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.73',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02211',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '5',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s211-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s211',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1260181+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s211-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796618+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1273816+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s211-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s211-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s211',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1260181+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s211-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796618+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1273816+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s211-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s211-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796618+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1273816+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s217',
                    name: 'UniTas_PC2S_217',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s217',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_217',
                        description: 'Level 2 Exit',
                        lastEventTime: '2021-05-25T05:20:38.3769728+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.78',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'building-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02217',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s217-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s217',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:22:23.8790698+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s217-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966228+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:22:23.8790709+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s217-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s217-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s217',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:22:23.8790698+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s217-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966228+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:22:23.8790709+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s217-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s217-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966228+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:22:23.8790709+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s221',
                    name: 'UniTas_PC2S_221',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s221',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_221',
                        description: 'Room 221',
                        lastEventTime: '2021-05-25T06:20:45.1674705+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.74',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02221',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '5',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s221-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s221',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1301277+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s221-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966303+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.131606+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s221-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s221-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s221',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1301277+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s221-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966303+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.131606+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s221-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s221-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966303+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.131606+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s232',
                    name: 'UniTas_PC2S_232',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s232',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_232',
                        description: 'Room 232',
                        lastEventTime: '2021-05-25T07:00:41.153332+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.67',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02232',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '20',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s232-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s232',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T07:00:37.1510214+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966368+10:00',
                                        lastEventTime:
                                            '2021-05-25T07:00:37.1550394+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s232-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s232-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s232',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T07:00:37.1510214+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966368+10:00',
                                        lastEventTime:
                                            '2021-05-25T07:00:37.1550394+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s232-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966368+10:00',
                                        lastEventTime:
                                            '2021-05-25T07:00:37.1550394+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s232a',
                    name: 'UniTas_PC2S_232A',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s232a',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_232A',
                        description: 'Room 232A',
                        lastEventTime: '2021-05-25T06:20:36.2778383+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.72',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02232A',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '20',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s232a-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s232a',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1637093+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232a-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796642+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.164675+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s232a-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s232a-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s232a',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1637093+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232a-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796642+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.164675+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s232a-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s232a-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796642+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.164675+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s234',
                    name: 'UniTas_PC2S_234',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s234',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_234',
                        description: 'Room 234',
                        lastEventTime: '2021-05-25T06:20:45.4430627+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.71',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02234',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '20',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s234-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s234',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1552918+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s234-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966477+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1595858+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s234-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s234-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s234',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1552918+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s234-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966477+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1595858+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s234-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s234-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966477+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1595858+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s260',
                    name: 'UniTas_PC2S_260',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s260',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_260',
                        description: 'Level 2 Exit',
                        lastEventTime: '2021-05-25T05:25:04.2520658+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.99',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L02',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'building-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L02260',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s260-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s260',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:26:39.3047277+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s260-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796659+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:26:39.3047288+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s260-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s260-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s260',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:26:39.3047277+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s260-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796659+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:26:39.3047288+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s260-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s260-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.796659+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:26:39.3047288+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s301',
                    name: 'UniTas_PC2S_301',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s301',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_301',
                        description: 'Room 360',
                        lastEventTime: '2021-05-25T06:20:45.4456085+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.82',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L03',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L03301',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '20',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s301-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s301',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1484305+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s301-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966639+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1489051+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s301-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s301-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s301',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1484305+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s301-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966639+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1489051+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s301-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s301-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966639+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1489051+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s359',
                    name: 'UniTas_PC2S_359',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s359',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_359',
                        description: 'Level 3 Exit',
                        lastEventTime: '2021-05-25T05:20:38.3769728+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.76',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L03',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'building-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L03359',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s359-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s359',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:20:38.2974854+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s359-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966683+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:20:38.2983036+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s359-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s359-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s359',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T05:20:38.2974854+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s359-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966683+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:20:38.2983036+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s359-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s359-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966683+10:00',
                                        lastEventTime:
                                            '2021-05-25T05:20:38.2983036+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s360',
                    name: 'UniTas_PC2S_360',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s360',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_360',
                        description: 'Room 360',
                        lastEventTime: '2021-05-25T06:20:45.4285387+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.75',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L03',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L03360',
                                encrypted: false,
                            },
                            {
                                key: 'macOccupancy',
                                value: '5',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s360-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s360',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.172806+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s360-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966729+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.173424+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s360-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s360-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s360',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.172806+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s360-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966729+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.173424+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s360-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s360-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966729+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.173424+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unitaspc2s362',
                    name: 'UniTas_PC2S_362',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unitaspc2s362',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UniTas_PC2S_362',
                        description: 'Room 360',
                        lastEventTime: '2021-05-25T06:20:45.4027899+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.77',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L03',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L03362',
                                encrypted: false,
                            },
                            {
                                key: 'maxOccupancy',
                                value: '5',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s362-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s362',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1559382+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s362-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966774+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1588726+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unitaspc2s362-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unitaspc2s362-test',
                                sourceUri: 'in-restapi-restapi-unitaspc2s362',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-05-25T06:20:36.1559382+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s362-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966774+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1588726+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unitaspc2s362-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unitaspc2s362-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966774+10:00',
                                        lastEventTime:
                                            '2021-05-25T06:20:36.1588726+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    uri: 'in-restapi-restapi-unittasmystateg02',
                    name: 'UnitTas_MyState_G02',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-restapi-restapi-unittasmystateg02',
                        dataSourceUri: 'in-restapi-restapi',
                        name: 'UnitTas_MyState_G02',
                        description: 'Meeting Room',
                        lastEventTime: '2021-06-15T04:45:23.3297239+00:00',
                        hasError: true,
                        errorMessage: 'Input Item has stale events.',
                        errorCount: 1,
                        hasSubError: false,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Subscription',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [
                            {
                                key: 'example',
                                value: '{\r\n  "sensor-time" : {\r\n    "timezone" : "Australia/Hobart",\r\n    "time" : "2021-05-25T12:30:08+10:00"\r\n  },\r\n  "status" : {\r\n    "code" : "OK"\r\n  },\r\n  "content" : {\r\n    "element" : [ {\r\n      "element-id" : 0,\r\n      "element-name" : "Entrance",\r\n      "sensor-type" : "SINGLE_SENSOR",\r\n      "data-type" : "LINE",\r\n      "from" : "2021-05-25T12:25:00+10:00",\r\n      "to" : "2021-05-25T12:30:00+10:00",\r\n      "resolution" : "FIVE_MINUTES",\r\n      "measurement" : [ {\r\n        "from" : "2021-05-25T12:25:00+10:00",\r\n        "to" : "2021-05-25T12:30:00+10:00",\r\n        "value" : [ {\r\n          "value" : 1,\r\n          "label" : "fw"\r\n        }, {\r\n          "value" : 2,\r\n          "label" : "bw"\r\n        } ]\r\n      } ]\r\n    } ]\r\n  },\r\n  "sensor-info" : {\r\n    "serial-number" : "80:1F:12:D5:3E:9D",\r\n    "ip-address" : "10.253.248.69",\r\n    "name" : "UniTas_PC2S_101",\r\n    "group" : "University of Tasmania",\r\n    "device-type" : "PC2S"\r\n  }\r\n}\r\n',
                                encrypted: false,
                            },
                            {
                                key: 'secure',
                                value: 'apikey',
                                encrypted: false,
                            },
                            {
                                key: 'key',
                                value: 'EC74CE2B-C4B5-44B5-82B5-AE1C4728A859',
                                encrypted: false,
                            },
                            {
                                key: 'header',
                                value: 'authorization',
                                encrypted: false,
                            },
                        ],
                        metaData: [
                            {
                                key: 'ip',
                                value: '10.253.248.8',
                                encrypted: false,
                            },
                            {
                                key: 'buildingCode',
                                value: 'SB.BE20',
                                encrypted: false,
                            },
                            {
                                key: 'floor',
                                value: 'L01',
                                encrypted: false,
                            },
                            {
                                key: 'siteCode',
                                value: 'SB',
                                encrypted: false,
                            },
                            {
                                key: 'type',
                                value: 'room-count',
                                encrypted: false,
                            },
                            {
                                key: 'units',
                                value: 'people',
                                encrypted: false,
                            },
                            {
                                key: 'locationCode',
                                value: 'SB.BE20L01101',
                                encrypted: false,
                            },
                        ],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unittasmystateg02-test',
                                sourceUri:
                                    'in-restapi-restapi-unittasmystateg02',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-15T04:46:38.6116775+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unittasmystateg02-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966822+10:00',
                                        lastEventTime:
                                            '2021-06-15T04:46:38.6116829+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#00BCD4',
                    borderColour: '#FFF',
                    enabled: true,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-restapi-restapi-unittasmystateg02-test',
                            name: 'Test',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-restapi-restapi-unittasmystateg02-test',
                                sourceUri:
                                    'in-restapi-restapi-unittasmystateg02',
                                name: 'Test',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-15T04:46:38.6116775+00:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unittasmystateg02-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966822+10:00',
                                        lastEventTime:
                                            '2021-06-15T04:46:38.6116829+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#4CAF50',
                            borderColour: '#FFF',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-restapi-restapi-unittasmystateg02-test-tablestorageplugin-0',
                                    name: 'TableStoragePlugin',
                                    source: {
                                        name: 'TableStoragePlugin',
                                        uri: 'in-restapi-restapi-unittasmystateg02-test-tablestorageplugin-0',
                                        endPointUri:
                                            'in-azuretablestorage-storagetables',
                                        pluginType:
                                            'Indicium.DataBus.Azure.StoragePlugin.TableStoragePlugin',
                                        createTime:
                                            '2021-06-27T22:15:03.7966822+10:00',
                                        lastEventTime:
                                            '2021-06-15T04:46:38.6116829+00:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'uri',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'connectionString',
                                                value: 'DefaultEndpointsProtocol=[http|https];AccountName=myAccountName;AccountKey=myAccountKey',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'displayName',
                                                value: 'Line Count Data',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'tableName',
                                                value: 'SBBE20',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'idSelect',
                                                value: 'InputItem',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'customUri',
                                                value: '',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    description: 'Subscription Item',
                                    type: 'Subscription Item',
                                    typeIcon: '',
                                    bodyColour: '#FFC107',
                                    borderColour: '#FFF',
                                    enabled: true,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
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
