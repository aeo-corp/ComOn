import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AVousDeJouerPage } from './a-vous-de-jouer.page';

const routes: Routes = [
  {
    path: '',
    component: AVousDeJouerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AVousDeJouerPage]
})
export class AVousDeJouerPageModule {}
