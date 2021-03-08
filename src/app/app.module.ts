import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeMapComponent } from './node-map/node-map.component';
import { CallerComponent } from './caller/caller.component';

@NgModule({
    declarations: [AppComponent, NodeMapComponent, CallerComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
