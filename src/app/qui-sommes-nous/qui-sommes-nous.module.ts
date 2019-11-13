import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuiSommesNousPage } from './qui-sommes-nous.page';

const routes: Routes = [
  {
    path: '',
    component: QuiSommesNousPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuiSommesNousPage]
})
export class QuiSommesNousPageModule {}
