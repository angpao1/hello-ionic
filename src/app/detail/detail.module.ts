import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';
import { FormComponent } from '../components/form/form.component'
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // FormComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailPage, HomePage, FormComponent]
})
export class DetailPageModule { }
