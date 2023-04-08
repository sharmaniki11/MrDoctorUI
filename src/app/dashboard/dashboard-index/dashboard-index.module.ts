import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardIndexRoutingModule } from './dashboard-index-routing.module';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    DashboardChartComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    DashboardIndexRoutingModule,
    NgChartsModule
  ]
})
export class DashboardIndexModule { }
