import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
	{ path: 'accueil', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'presentation', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'culture_generale', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'francais', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'interviews', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'medias', loadChildren: './home/home.module#HomePageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
