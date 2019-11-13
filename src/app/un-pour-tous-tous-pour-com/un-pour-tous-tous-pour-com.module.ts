import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnPourTousTousPourComPage } from './un-pour-tous-tous-pour-com.page';

const routes: Routes = [
  {
    path: '',
    component: UnPourTousTousPourComPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnPourTousTousPourComPage]
})
export class UnPourTousTousPourComPageModule {}
