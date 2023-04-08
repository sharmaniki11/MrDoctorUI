import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '../layout/shell';

const routes: Routes = [
  {
    path: 'home',
    children: [
      Shell.childRoutes([
        {
          path: '',
          loadChildren: () => 
            import('./dashboard-index/dashboard-index.module').then((m) => m.DashboardIndexModule)
        }
        
      ])
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
