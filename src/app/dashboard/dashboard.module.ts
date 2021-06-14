import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';

import { DashboardComponent } from './dashboard.component';
import { NGZorroModule } from './ngzorro.module';


@NgModule({
  declarations: [
    SampleComponent,
    Sample2Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NGZorroModule
  ]
})
export class DashboardModule { }
