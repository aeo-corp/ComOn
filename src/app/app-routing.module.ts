import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
	{ path: 'accueil', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'présentation', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'culture_générale', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'français', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'interviews', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'médias', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
