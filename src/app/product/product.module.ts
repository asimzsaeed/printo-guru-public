import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { routing } from './product.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  declarations: [
    ProductComponent
  ],
  bootstrap: [
    ProductComponent
  ]
})
export class ProductModule {}
