import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParlonsPeuParlonsComPage } from './parlons-peu-parlons-com.page';

const routes: Routes = [
  {
    path: '',
    component: ParlonsPeuParlonsComPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParlonsPeuParlonsComPage]
})
export class ParlonsPeuParlonsComPageModule {}
