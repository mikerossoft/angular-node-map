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

    public onToggleCallback = (d3DataObj?: any, enabled?: boolean): void => {
        console.log(
            `onToggleCallback - item: ${d3DataObj} enabled: ${enabled}}`
        );
        console.log(d3DataObj.descendants());
    };

    public onShowLatestDataCallack = (item?: any): void => {
        console.log(`onShowLatestDataCallack - item: ${item} uri:${item.uri}`);
    };

    COL_LEV_1 = '#1ab394';
    COL_LEV_2 = '#1c84c6';
    COL_LEV_3 = '#f8ac59';
    COL_LEV_4 = '#ED5565';
    COL_LEV_5 = '#FF5722';
    COL_LEV_6 = '#ff1744';
    COL_LEV_7 = '#f50057';
    COL_LEV_1_PRIMARY = '#d4edda';
    COL_LEV_1_SECONDARY = '#155724';
    COL_LEV_1_BORDER = '#c3e6cb';
    COL_LEV_1_BORDER_SELECT = '#155724';
    COL_LEV_2_PRIMARY = '#d1ecf1';
    COL_LEV_2_SECONDARY = '#0c5460';
    COL_LEV_2_BORDER = '#bee5eb';
    COL_LEV_2_BORDER_SELECT = '#0c5460';
    COL_LEV_3_PRIMARY = '#fff3cd';
    COL_LEV_3_SECONDARY = '#856404';
    COL_LEV_3_BORDER = '#ffeeba';
    COL_LEV_3_BORDER_SELECT = '#856404';
    COL_LEV_4_PRIMARY = '#d1ecf1';
    COL_LEV_4_SECONDARY = '#0c5460';
    COL_LEV_4_BORDER = '#bee5eb';
    COL_LEV_4_BORDER_SELECT = '#0c5460';
    ERROR_COLOR = '#f8d7da';
    ERROR_BORDER = '#721c24';

    dataWithIssue: Object = {
        root: {
            uri: 'in-random-random',
            name: 'Random',
            plugin: 'Indicium.DataBus.Plugins.DataSources.RandomPlugin',
            type: 'Connector',
            typeIcon: '',
            bodyColour: '#d4edda',
            textColor: '#155724',
            iconColor: '#155724',
            borderColour: '#c3e6cb',
            borderSelectColor: '#155724',
            enabled: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
            canToggle: false,
            canShowLatest: false,
            nodes: [
                {
                    uri: 'in-random-random-log',
                    name: 'Log',
                    description: 'Input',
                    source: {
                        version: 0,
                        uri: 'in-random-random-log',
                        dataSourceUri: 'in-random-random',
                        name: 'Log',
                        description: 'LogDESC',
                        lastEventTime: '2021-06-29T12:00:22.6886689+10:00',
                        lastDataTime: '2021-06-29T12:00:21.0747596+10:00',
                        hasError: false,
                        errorCount: 0,
                        hasSubError: true,
                        enabled: true,
                        isTemplate: false,
                        mode: 'Manual',
                        autoSizePeriod: false,
                        autoRunOnWrite: false,
                        config: [],
                        metaData: [],
                        variables: [],
                        subscriptions: [
                            {
                                isTemplate: false,
                                uri: 'in-random-random-log-log',
                                sourceUri: 'in-random-random-log',
                                name: 'Log',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                infoMessage: 'Pipeline Processed',
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-29T15:22:16.8254457+10:00',
                                hasSubError: true,
                                items: [
                                    {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-log-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254582+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.825463+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                    {
                                        name: 'ConsolePipelinePlugin',
                                        uri: 'in-random-random-log-log-consolepipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254716+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254729+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'A',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                    {
                                        name: 'PythonPlugin',
                                        uri: 'in-random-random-log-log-pythonplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.IronPython.PythonPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254737+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254764+10:00',
                                        hasError: true,
                                        errorMessage: '',
                                        errorCount: 1,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'ExecuteScript',
                                                value: 'import api,statefromjnobou System import DateTime,String,Mathfrom System.IO import *from System.Diagnostics import Processfrom Indicium.DataBus.Common.Data import *class Plugin:        def __init__(self):        self.heartbeat = 0    # This function is execute when the plugin is excuted    # @instance - this is the JobInstance object containing details about what is being processed    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed    # return the event object with any changes you have made to it    def execute(self, instance, event):        # put your logic her        self.heartbeat += 1        return event',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'ReadScript',
                                                value: 'import api,state,logger\r\n\r\nfrom System import DateTime,String,Math\r\nfrom System.IO import *\r\nfrom System.Diagnostics import Process\r\nfrom Indicium.DataBus.Common.Data import *\r\n\r\n\r\nclass Plugin:\r\n    # keep track of how many times the plugin has been invoked\r\n    heartbeat = 0\r\n\r\n    def __init__(self):\r\n        #logger.Info("PythonPlugin Initialised")\r\n        self.heartbeat = 0;\r\n        pass\r\n\r\n    # This function is execute when the plugin is excuted\r\n    # @instance - this is the JobInstance object containing details about what is being processed\r\n    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed\r\n    # return the event object with any changes you have made to it\r\n    def read(self, instance):\r\n        # put your logic here\r\n        self.heartbeat += 1\r\n        return PointEvent(DateTime.Now, self.heartbeat)\r\n',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                    },
                                    {
                                        name: 'AXPlusBPlugin',
                                        uri: 'in-random-random-log-log-axplusbplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254771+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'A',
                                                value: '321',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                value: '44',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                ],
                            },
                            {
                                isTemplate: false,
                                uri: 'in-random-random-log-clone',
                                sourceUri: 'in-random-random-log',
                                name: 'clone',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                infoMessage: 'Pipeline Processed',
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-29T15:22:16.8254802+10:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-clone-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254812+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254819+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                    },
                                    {
                                        name: 'AXPlusBPlugin',
                                        uri: 'in-random-random-log-clone-axplusbplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254826+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254833+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'A',
                                                value: '5',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                value: '0',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    {
                                        name: 'ConsolePipelinePlugin',
                                        uri: 'in-random-random-log-clone-consolepipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254839+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254849+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                    },
                                ],
                            },
                        ],
                    },
                    type: 'Input',
                    typeIcon: '',
                    bodyColour: '#d1ecf1',
                    textColor: '#0c5460',
                    iconColor: '#0c5460',
                    borderColour: '#bee5eb',
                    borderSelectColor: '#0c5460',
                    errorColor: '#f8d7da',
                    errorBorder: '#491217',
                    enabled: true,
                    hasError: false,
                    canAdd: false,
                    canEdit: true,
                    canDelete: false,
                    canToggle: true,
                    canShowLatest: false,
                    nodes: [
                        {
                            uri: 'in-random-random-log-log',
                            name: 'Log',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-random-random-log-log',
                                sourceUri: 'in-random-random-log',
                                name: 'Log',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                infoMessage: 'Pipeline Processed',
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-29T15:22:16.8254457+10:00',
                                hasSubError: true,
                                items: [
                                    {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-log-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254582+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.825463+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                    {
                                        name: 'ConsolePipelinePlugin',
                                        uri: 'in-random-random-log-log-consolepipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254716+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254729+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'A',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                    {
                                        name: 'PythonPlugin',
                                        uri: 'in-random-random-log-log-pythonplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.IronPython.PythonPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254737+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254764+10:00',
                                        hasError: true,
                                        errorMessage: '',
                                        errorCount: 1,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'ExecuteScript',
                                                value: 'import api,statefromjnobou System import DateTime,String,Mathfrom System.IO import *from System.Diagnostics import Processfrom Indicium.DataBus.Common.Data import *class Plugin:        def __init__(self):        self.heartbeat = 0    # This function is execute when the plugin is excuted    # @instance - this is the JobInstance object containing details about what is being processed    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed    # return the event object with any changes you have made to it    def execute(self, instance, event):        # put your logic her        self.heartbeat += 1        return event',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'ReadScript',
                                                value: 'import api,state,logger\r\n\r\nfrom System import DateTime,String,Math\r\nfrom System.IO import *\r\nfrom System.Diagnostics import Process\r\nfrom Indicium.DataBus.Common.Data import *\r\n\r\n\r\nclass Plugin:\r\n    # keep track of how many times the plugin has been invoked\r\n    heartbeat = 0\r\n\r\n    def __init__(self):\r\n        #logger.Info("PythonPlugin Initialised")\r\n        self.heartbeat = 0;\r\n        pass\r\n\r\n    # This function is execute when the plugin is excuted\r\n    # @instance - this is the JobInstance object containing details about what is being processed\r\n    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed\r\n    # return the event object with any changes you have made to it\r\n    def read(self, instance):\r\n        # put your logic here\r\n        self.heartbeat += 1\r\n        return PointEvent(DateTime.Now, self.heartbeat)\r\n',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                    },
                                    {
                                        name: 'AXPlusBPlugin',
                                        uri: 'in-random-random-log-log-axplusbplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254771+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        config: [
                                            {
                                                key: 'A',
                                                value: '321',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                value: '44',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#fff3cd',
                            textColor: '#856404',
                            iconColor: '#856404',
                            borderColour: '#ffeeba',
                            borderSelectColor: '#856404',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-log-log-loggingpipelineplugin-0',
                                    name: 'LoggingPipelinePlugin',
                                    source: {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-log-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254582+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.825463+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                        isValid: true,
                                        errorMessage: '',
                                    },
                                    description: 'Output Item',
                                    type: 'Output Item',
                                    typeIcon: '',
                                    bodyColour: '#d1ecf1',
                                    textColor: '#0c5460',
                                    iconColor: '#0c5460',
                                    borderColour: '#bee5eb',
                                    borderSelectColor: '#0c5460',
                                    errorColor: '#f8d7da',
                                    errorBorder: '#491217',
                                    enabled: true,
                                    hasError: false,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [
                                        {
                                            uri: 'in-random-random-log-log-consolepipelineplugin-0',
                                            name: 'ConsolePipelinePlugin',
                                            source: {
                                                name: 'ConsolePipelinePlugin',
                                                uri: 'in-random-random-log-log-consolepipelineplugin-0',
                                                pluginType:
                                                    'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                                createTime:
                                                    '2021-06-29T15:22:16.8254716+10:00',
                                                lastEventTime:
                                                    '2021-06-29T15:22:16.8254729+10:00',
                                                hasError: false,
                                                errorCount: 0,
                                                infoMessage: 'Execute Called',
                                                config: [
                                                    {
                                                        key: 'A',
                                                        encrypted: false,
                                                    },
                                                    {
                                                        key: 'B',
                                                        encrypted: false,
                                                    },
                                                ],
                                                variables: [],
                                                isValid: true,
                                                errorMessage: '',
                                            },
                                            description: 'Output Item',
                                            type: 'Output Item',
                                            typeIcon: '',
                                            bodyColour: '#d1ecf1',
                                            textColor: '#0c5460',
                                            iconColor: '#0c5460',
                                            borderColour: '#bee5eb',
                                            borderSelectColor: '#0c5460',
                                            errorColor: '#f8d7da',
                                            errorBorder: '#491217',
                                            enabled: true,
                                            hasError: false,
                                            canAdd: false,
                                            canEdit: true,
                                            canDelete: false,
                                            canToggle: false,
                                            canShowLatest: true,
                                            nodes: [
                                                {
                                                    uri: 'in-random-random-log-log-pythonplugin-0',
                                                    name: 'PythonPlugin',
                                                    source: {
                                                        name: 'PythonPlugin',
                                                        uri: 'in-random-random-log-log-pythonplugin-0',
                                                        pluginType:
                                                            'Indicium.DataBus.IronPython.PythonPlugin',
                                                        createTime:
                                                            '2021-06-29T15:22:16.8254737+10:00',
                                                        lastEventTime:
                                                            '2021-06-29T15:22:16.8254764+10:00',
                                                        hasError: true,
                                                        errorMessage: '',
                                                        errorCount: 1,
                                                        infoMessage:
                                                            'Execute Called',
                                                        config: [
                                                            {
                                                                key: 'ExecuteScript',
                                                                value: 'import api,statefromjnobou System import DateTime,String,Mathfrom System.IO import *from System.Diagnostics import Processfrom Indicium.DataBus.Common.Data import *class Plugin:        def __init__(self):        self.heartbeat = 0    # This function is execute when the plugin is excuted    # @instance - this is the JobInstance object containing details about what is being processed    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed    # return the event object with any changes you have made to it    def execute(self, instance, event):        # put your logic her        self.heartbeat += 1        return event',
                                                                encrypted:
                                                                    false,
                                                            },
                                                            {
                                                                key: 'ReadScript',
                                                                value: 'import api,state,logger\r\n\r\nfrom System import DateTime,String,Math\r\nfrom System.IO import *\r\nfrom System.Diagnostics import Process\r\nfrom Indicium.DataBus.Common.Data import *\r\n\r\n\r\nclass Plugin:\r\n    # keep track of how many times the plugin has been invoked\r\n    heartbeat = 0\r\n\r\n    def __init__(self):\r\n        #logger.Info("PythonPlugin Initialised")\r\n        self.heartbeat = 0;\r\n        pass\r\n\r\n    # This function is execute when the plugin is excuted\r\n    # @instance - this is the JobInstance object containing details about what is being processed\r\n    # @event -    this is the BaseEvent (PointEvent/SeriesEvent) object containing the data to be processed\r\n    # return the event object with any changes you have made to it\r\n    def read(self, instance):\r\n        # put your logic here\r\n        self.heartbeat += 1\r\n        return PointEvent(DateTime.Now, self.heartbeat)\r\n',
                                                                encrypted:
                                                                    false,
                                                            },
                                                        ],
                                                        variables: [],
                                                        isValid: true,
                                                    },
                                                    description: 'Output Item',
                                                    type: 'Output Item',
                                                    typeIcon: '',
                                                    bodyColour: '#d1ecf1',
                                                    textColor: '#0c5460',
                                                    iconColor: '#0c5460',
                                                    borderColour: '#bee5eb',
                                                    borderSelectColor:
                                                        '#0c5460',
                                                    errorColor: '#f8d7da',
                                                    errorBorder: '#491217',
                                                    enabled: true,
                                                    hasError: true,
                                                    canAdd: false,
                                                    canEdit: true,
                                                    canDelete: false,
                                                    canToggle: false,
                                                    canShowLatest: true,
                                                    nodes: [
                                                        {
                                                            uri: 'in-random-random-log-log-axplusbplugin-0',
                                                            name: 'AXPlusBPlugin',
                                                            source: {
                                                                name: 'AXPlusBPlugin',
                                                                uri: 'in-random-random-log-log-axplusbplugin-0',
                                                                pluginType:
                                                                    'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                                                createTime:
                                                                    '2021-06-29T15:22:16.8254771+10:00',
                                                                hasError: false,
                                                                errorCount: 0,
                                                                config: [
                                                                    {
                                                                        key: 'A',
                                                                        value: '321',
                                                                        encrypted:
                                                                            false,
                                                                    },
                                                                    {
                                                                        key: 'B',
                                                                        value: '44',
                                                                        encrypted:
                                                                            false,
                                                                    },
                                                                ],
                                                                variables: [],
                                                                isValid: true,
                                                                errorMessage:
                                                                    '',
                                                            },
                                                            description:
                                                                'Output Item',
                                                            type: 'Output Item',
                                                            typeIcon: '',
                                                            bodyColour:
                                                                '#d1ecf1',
                                                            textColor:
                                                                '#0c5460',
                                                            iconColor:
                                                                '#0c5460',
                                                            borderColour:
                                                                '#bee5eb',
                                                            borderSelectColor:
                                                                '#0c5460',
                                                            errorColor:
                                                                '#f8d7da',
                                                            errorBorder:
                                                                '#491217',
                                                            enabled: true,
                                                            hasError: false,
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
                            ],
                        },
                        {
                            uri: 'in-random-random-log-clone',
                            name: 'clone',
                            description: 'Subscription',
                            source: {
                                isTemplate: false,
                                uri: 'in-random-random-log-clone',
                                sourceUri: 'in-random-random-log',
                                name: 'clone',
                                enabled: true,
                                enforcePersistence: false,
                                timeout: '00:01:00',
                                timeoutSeconds: 60,
                                hasError: false,
                                infoMessage: 'Pipeline Processed',
                                errorCount: 0,
                                lastEventTime:
                                    '2021-06-29T15:22:16.8254802+10:00',
                                hasSubError: false,
                                items: [
                                    {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-clone-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254812+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254819+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                    },
                                    {
                                        name: 'AXPlusBPlugin',
                                        uri: 'in-random-random-log-clone-axplusbplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254826+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254833+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [
                                            {
                                                key: 'A',
                                                value: '5',
                                                encrypted: false,
                                            },
                                            {
                                                key: 'B',
                                                value: '0',
                                                encrypted: false,
                                            },
                                        ],
                                        variables: [],
                                    },
                                    {
                                        name: 'ConsolePipelinePlugin',
                                        uri: 'in-random-random-log-clone-consolepipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254839+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254849+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                    },
                                ],
                            },
                            type: 'Subscription',
                            typeIcon: '',
                            bodyColour: '#fff3cd',
                            textColor: '#856404',
                            iconColor: '#856404',
                            borderColour: '#ffeeba',
                            borderSelectColor: '#856404',
                            enabled: true,
                            canAdd: false,
                            canEdit: false,
                            canDelete: false,
                            canToggle: true,
                            canShowLatest: false,
                            nodes: [
                                {
                                    uri: 'in-random-random-log-clone-loggingpipelineplugin-0',
                                    name: 'LoggingPipelinePlugin',
                                    source: {
                                        name: 'LoggingPipelinePlugin',
                                        uri: 'in-random-random-log-clone-loggingpipelineplugin-0',
                                        pluginType:
                                            'Indicium.DataBus.Plugins.Pipelines.LoggingPipelinePlugin',
                                        createTime:
                                            '2021-06-29T15:22:16.8254812+10:00',
                                        lastEventTime:
                                            '2021-06-29T15:22:16.8254819+10:00',
                                        hasError: false,
                                        errorCount: 0,
                                        infoMessage: 'Execute Called',
                                        config: [],
                                        variables: [],
                                    },
                                    description: 'Output Item',
                                    type: 'Output Item',
                                    typeIcon: '',
                                    bodyColour: '#d1ecf1',
                                    textColor: '#0c5460',
                                    iconColor: '#0c5460',
                                    borderColour: '#bee5eb',
                                    borderSelectColor: '#0c5460',
                                    errorColor: '#f8d7da',
                                    errorBorder: '#491217',
                                    enabled: true,
                                    hasError: false,
                                    canAdd: false,
                                    canEdit: true,
                                    canDelete: false,
                                    canToggle: false,
                                    canShowLatest: true,
                                    nodes: [
                                        {
                                            uri: 'in-random-random-log-clone-axplusbplugin-0',
                                            name: 'AXPlusBPlugin',
                                            source: {
                                                name: 'AXPlusBPlugin',
                                                uri: 'in-random-random-log-clone-axplusbplugin-0',
                                                pluginType:
                                                    'Indicium.DataBus.Plugins.Pipelines.AXPlusBPlugin',
                                                createTime:
                                                    '2021-06-29T15:22:16.8254826+10:00',
                                                lastEventTime:
                                                    '2021-06-29T15:22:16.8254833+10:00',
                                                hasError: false,
                                                errorCount: 0,
                                                infoMessage: 'Execute Called',
                                                config: [
                                                    {
                                                        key: 'A',
                                                        value: '5',
                                                        encrypted: false,
                                                    },
                                                    {
                                                        key: 'B',
                                                        value: '0',
                                                        encrypted: false,
                                                    },
                                                ],
                                                variables: [],
                                            },
                                            description: 'Output Item',
                                            type: 'Output Item',
                                            typeIcon: '',
                                            bodyColour: '#d1ecf1',
                                            textColor: '#0c5460',
                                            iconColor: '#0c5460',
                                            borderColour: '#bee5eb',
                                            borderSelectColor: '#0c5460',
                                            errorColor: '#f8d7da',
                                            errorBorder: '#491217',
                                            enabled: true,
                                            hasError: false,
                                            canAdd: false,
                                            canEdit: true,
                                            canDelete: false,
                                            canToggle: false,
                                            canShowLatest: true,
                                            nodes: [
                                                {
                                                    uri: 'in-random-random-log-clone-consolepipelineplugin-0',
                                                    name: 'ConsolePipelinePlugin',
                                                    source: {
                                                        name: 'ConsolePipelinePlugin',
                                                        uri: 'in-random-random-log-clone-consolepipelineplugin-0',
                                                        pluginType:
                                                            'Indicium.DataBus.Plugins.Pipelines.ConsolePipelinePlugin',
                                                        createTime:
                                                            '2021-06-29T15:22:16.8254839+10:00',
                                                        lastEventTime:
                                                            '2021-06-29T15:22:16.8254849+10:00',
                                                        hasError: false,
                                                        errorCount: 0,
                                                        infoMessage:
                                                            'Execute Called',
                                                        config: [],
                                                        variables: [],
                                                    },
                                                    description: 'Output Item',
                                                    type: 'Output Item',
                                                    typeIcon: '',
                                                    bodyColour: '#d1ecf1',
                                                    textColor: '#0c5460',
                                                    iconColor: '#0c5460',
                                                    borderColour: '#bee5eb',
                                                    borderSelectColor:
                                                        '#0c5460',
                                                    errorColor: '#f8d7da',
                                                    errorBorder: '#491217',
                                                    enabled: true,
                                                    hasError: false,
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
                                    description: 'Output Item',
                                    type: 'Output Item',
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
        return this.largeJson;
    }
}
