import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './login/log/log.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AbonamenteComponent } from './abonamente/abonamente/abonamente.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatListModule} from '@angular/material/list';
import { FormularComponent } from './formular/formular/formular.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule } from '@angular/material';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component'
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material/';
import { FullComponent } from './abonamente/full/full.component';
import { CopiiComponent } from './abonamente/copii/copii.component';
import { CardioComponent } from './abonamente/cardio/cardio.component';
import { HappyHourComponent } from './abonamente/happy-hour/happy-hour.component';
import { StudentComponent } from './abonamente/student/student.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    AbonamenteComponent,
    FormularComponent,
    PageNotFoundComponent,
    FullComponent,
    CopiiComponent,
    CardioComponent,
    HappyHourComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatToolbarModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [LogComponent],

  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class AppModule { }
