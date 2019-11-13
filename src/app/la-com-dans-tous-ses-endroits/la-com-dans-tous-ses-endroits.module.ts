import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaComDansTousSesEndroitsPage } from './la-com-dans-tous-ses-endroits.page';

const routes: Routes = [
  {
    path: '',
    component: LaComDansTousSesEndroitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaComDansTousSesEndroitsPage]
})
export class LaComDansTousSesEndroitsPageModule {}
