import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'', component:WelcomepageComponent
  },
  {
    path:'main', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
