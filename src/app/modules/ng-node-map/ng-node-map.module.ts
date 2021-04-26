import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeMapComponent } from './ng-node-map.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NodeMapComponent],
    exports: [NodeMapComponent],
})
export class NodeMapModule {}
