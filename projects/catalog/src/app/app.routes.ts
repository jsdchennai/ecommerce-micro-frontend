import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./product-list/product-list.component').then(
        (m) => m.ProductListComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
];
