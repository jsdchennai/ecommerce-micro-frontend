import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'catalog',
    loadComponent: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent);
    },
  },
];
