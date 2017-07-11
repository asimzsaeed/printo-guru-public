import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StartComponent } from './start.component';

const routes: Route[] = [
  {
    path: '',
    component: StartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
