import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'profile', component : FirstComponent },
  { path: '', component : DashboardComponent },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'about', component : AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
