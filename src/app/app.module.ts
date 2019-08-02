import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

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
import { MatButtonModule } from '@angular/material';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    AbonamenteComponent,
    FormularComponent,
    PageNotFoundComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
