import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeMapComponent } from './ng-node-map.component';
import * as validJson from '../../../assets/validJson.json';

describe('NodeMapComponent', () => {
    let component: NodeMapComponent;
    let fixture: ComponentFixture<NodeMapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NodeMapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NodeMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it(`can handle valid JSON'`, () => {
        const fixture = TestBed.createComponent(NodeMapComponent);
        const app = fixture.componentInstance;
        app.dataSource = validJson;
        expect(app.isJson(app.dataSource)).toBeTrue();
    });

    it(`can handle invalid JSON'`, () => {
        const fixture = TestBed.createComponent(NodeMapComponent);
        const app = fixture.componentInstance;

        const invalidJson = '{ incorrectJson: {incorrectVal} }';
        app.dataSource = invalidJson;
        console.log('app.dataSource');
        console.log(app.dataSource);
        expect(function () {
            app.nodeMapInit(app.dataSource);
        }).toThrow();
    });
});
