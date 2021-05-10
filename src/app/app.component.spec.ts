import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-node-map'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        let source = app.dataSourceJson;
        source = { name: 'John', age: 30, car: null };
        const isJSON = isJson(source);
        expect(isJSON).toBeTrue();
    });

    function isJson(str) {
        if (typeof str === 'object') {
            return true;
        }
        return false;
    }
});
