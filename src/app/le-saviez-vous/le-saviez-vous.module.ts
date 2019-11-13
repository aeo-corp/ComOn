import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeSaviezVousPage } from './le-saviez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: LeSaviezVousPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeSaviezVousPage]
})
export class LeSaviezVousPageModule {}
