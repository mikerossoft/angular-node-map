# AngularNodeMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

#Importing module
Under your project .module.ts file, do the follwoing:
import { NodeMapModule } from 'ng-node-map';

Add NodeMapModule in the imports array
Your NgModule should look like below:
@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, NodeMapModule],
providers: [],
bootstrap: [AppComponent],
})

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
