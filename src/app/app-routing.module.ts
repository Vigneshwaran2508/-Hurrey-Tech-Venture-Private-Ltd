import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
