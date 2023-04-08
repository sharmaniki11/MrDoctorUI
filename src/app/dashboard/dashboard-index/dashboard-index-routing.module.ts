import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';

const routes: Routes = [
  {
    path:'',
    component : DashboardChartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardIndexRoutingModule { }
