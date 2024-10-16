import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { UserCardComponent } from './user-card/user-card.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent,
    AddButtonComponent,
    UserCardComponent,
    EditButtonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
