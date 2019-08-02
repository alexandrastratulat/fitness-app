import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularComponent } from './formular/formular.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [FormularComponent],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class FormularModule { }
