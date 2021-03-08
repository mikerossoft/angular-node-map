import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-caller',
    templateUrl: './caller.component.html',
    styleUrls: ['./caller.component.scss'],
})
export class CallerComponent implements OnInit {
    dataSourceJson = {};

    treeData: object = {
        name: 'NODE NAME 1',
        subname: 'CODE N1',
        fill: 'orange',
        children: [
            {
                name: 'NODE NAME 2.1',
                subname: 'CODE N1',
                fill: 'blue',
            },
            { name: 'NODE NAME 2.2', subname: 'CODE N1', fill: 'blue' },
            {
                name: 'NODE NAME 2.3',
                subname: 'CODE N1',
                fill: 'blue',
                children: [
                    {
                        name: 'NODE NAME 3.3',
                        fill: 'blue',
                        subname: 'CODE N1',
                        children: [
                            {
                                name: 'NODE NAME 4.1',
                                subname: 'CODE N1',
                                fill: '#d281d2',
                            },
                        ],
                    },
                    {
                        name: 'NODE NAME 3.4',
                        fill: 'blue',
                        subname: 'CODE N1',
                        children: [
                            {
                                name: 'NODE NAME 4.2',
                                subname: 'CODE N1',
                                fill: '#d281d2',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    constructor() {}

    ngOnInit(): void {
        this.dataSourceJson = this.getJson();
    }

    private getJson(): object {
        return this.treeData;
    }
}
