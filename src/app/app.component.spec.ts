// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// import * as validJson from '../assets/validJson.json';

// describe('AppComponent', () => {
//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             imports: [RouterTestingModule],
//             declarations: [AppComponent],
//         }).compileComponents();
//     });

//     it('should create the app', () => {
//         const fixture = TestBed.createComponent(AppComponent);
//         const app = fixture.componentInstance;
//         expect(app).toBeTruthy();
//     });

//     it(`can handle valid JSON'`, () => {
//         const fixture = TestBed.createComponent(AppComponent);
//         const app = fixture.componentInstance;

//         const isJSON = isJson(validJson);
//         expect(isJSON).toBeTrue();
//     });

//     it(`can handle invalid JSON'`, () => {
//         const fixture = TestBed.createComponent(AppComponent);
//         const app = fixture.componentInstance;

//         const invalidJson = '{ incorrectJson: {incorrectVal} }';

//         const isJSON = isJson(invalidJson);
//         expect(isJSON).toBeTrue();
//     });

//     function isJson(str) {
//         if (typeof str === 'object') {
//             return true;
//         }
//         return false;
//     }
// });
