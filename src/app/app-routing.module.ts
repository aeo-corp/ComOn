import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
	{ path: 'accueil', loadChildren: './home/home.module#HomePageModule'},
	{ path: 'qui_sommes_nous', loadChildren: './qui-sommes-nous/qui-sommes-nous.module#QuiSommesNousPageModule'},
	{ path: 'parlons_peu_parlons_com', loadChildren: './parlons-peu-parlons-com/parlons-peu-parlons-com.module#ParlonsPeuParlonsComPageModule'},
	{ path: 'com_un_air_de_news', loadChildren: './com-un-air-de-news/com-un-air-de-news.module#ComUnAirDeNewsPageModule'},
	{ path: 'a_vous_de_jouer', loadChildren: './a-vous-de-jouer/a-vous-de-jouer.module#AVousDeJouerPageModule'},
	{ path: 'la_com_dans_tous_ses_endroits', loadChildren: './la-com-dans-tous-ses-endroits/la-com-dans-tous-ses-endroits.module#LaComDansTousSesEndroitsPageModule'},
	{ path: 'un_pour_tous_tous_pour_com', loadChildren: './un-pour-tous-tous-pour-com/un-pour-tous-tous-pour-com.module#UnPourTousTousPourComPageModule'},
	{ path: 'le_saviez_vous', loadChildren: './le-saviez-vous/le-saviez-vous.module#LeSaviezVousPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
