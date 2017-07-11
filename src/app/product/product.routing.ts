
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from './product.component';


const routes: Route[] = [
  {
    path: ':id',
    component: ProductComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
