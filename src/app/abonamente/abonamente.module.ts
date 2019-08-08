import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { CopiiComponent } from './copii/copii.component';
import { StudentComponent } from './student/student.component';
import { HappyHourComponent } from './happy-hour/happy-hour.component';
import { CardioComponent } from './cardio/cardio.component';
import { FullComponent } from './full/full.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatIconModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [CopiiComponent, StudentComponent, HappyHourComponent, CardioComponent, FullComponent],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    [RouterModule],
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,

  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],

})
export class AbonamenteModule { }
