import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularComponent } from './formular/formular.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [FormularComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,

  ]
})
export class FormularModule { }
