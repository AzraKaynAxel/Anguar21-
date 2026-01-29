/**
 import { Routes } from '@angular/router';
 export const routes: Routes = [];
 */

import { Routes } from '@angular/router';
import {Home} from './site/home/home';
import {About} from './site/about/about';
import {Films} from './site/films/films';
import {Errors} from './site/errors/errors';


/**
 * Configuration des Routes
 * Le Mapping interne de notre application Angular
 * Dans un tableau JSON de type Routes
 *
 */
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'films', component: Films },
  { path: '404', component: Errors },
  { path: '**', redirectTo: '/404'}
];

