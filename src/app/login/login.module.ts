import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule,
  MatToolbarModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatCardModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule
  ]
})
export class LoginModule { }
