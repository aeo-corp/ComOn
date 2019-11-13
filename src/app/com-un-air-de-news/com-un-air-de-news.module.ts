import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComUnAirDeNewsPage } from './com-un-air-de-news.page';

const routes: Routes = [
  {
    path: '',
    component: ComUnAirDeNewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComUnAirDeNewsPage]
})
export class ComUnAirDeNewsPageModule {}
