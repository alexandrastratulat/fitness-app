import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { AbonamenteComponent } from './abonamente/abonamente/abonamente.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { FormularComponent } from './formular/formular/formular.component';

const routes: Routes = [
  { path: 'login', component: LogComponent },
  { path: 'abonamente', component: AbonamenteComponent },
  { path: 'formular', component: FormularComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
