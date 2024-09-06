import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('../app/components/login/login.component')
        .then(mod => mod.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../app/components/dashboard/dashboard.component')
      .then(mod => mod.DashboardComponent
    ),
    //canActivate: [AuthGuard]
  },
  {
    path: 'new-demand',
    loadComponent: () => import('./components/demand/create-demand/create-demand.component')
      .then(mod => mod.CreateDemandComponent
    ),
    //canActivate: [AuthGuard]
  }

];
