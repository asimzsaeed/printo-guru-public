import { NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { CommonModule } from '@angular/common';
import { routing } from './start.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    StartComponent
  ],
  bootstrap: [
    StartComponent
  ]
})
export class StartModule {}
