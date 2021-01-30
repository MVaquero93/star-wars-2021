import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: RegisterComponent},
];

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
