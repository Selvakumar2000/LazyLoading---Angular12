import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    WelcomepageComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
