import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { AbonamenteComponent } from './abonamente/abonamente/abonamente.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { FormularComponent } from './formular/formular/formular.component';
import { CardioComponent } from './abonamente/cardio/cardio.component';
import { CopiiComponent } from './abonamente/copii/copii.component';
import { FullComponent } from './abonamente/full/full.component';
import { HappyHourComponent } from './abonamente/happy-hour/happy-hour.component';
import { StudentComponent } from './abonamente/student/student.component';

const routes: Routes = [
  { path: 'login', component: LogComponent },
  { path: 'abonamente', component: AbonamenteComponent },
  { path: 'formular', component: FormularComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'cardio', component: CardioComponent},
  { path: 'copii', component: CopiiComponent},
  { path: 'full', component: FullComponent},
  { path: 'happy-hour', component: HappyHourComponent},
  { path: 'student', component: StudentComponent},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
