import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeMapModule } from './modules/ng-node-map/ng-node-map.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NodeMapModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
