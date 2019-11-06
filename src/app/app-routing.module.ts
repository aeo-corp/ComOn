import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
	{ path: 'accueil', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'qui_sommes_nous', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'parlons_peu_parlons_com', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'com_un_air_de_news', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'a_vous_de_jouer', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'la_com_dans_tous_ses_endroits', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'un_pour_tous_tous_pour_com', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'le_saviez_vous', loadChildren: './home/home.module#HomePageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
