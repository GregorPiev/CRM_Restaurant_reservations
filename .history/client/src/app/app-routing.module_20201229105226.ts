import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from './shared/classes/auth.guard';

import { OverviewPageComponent } from './overview-page/overview-page.component';


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent }
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'overview', component: OverviewPageComponent },
      { path: 'analytics', component: OverviewPageComponent },
      { path: 'history', component: OverviewPageComponent },
      { path: 'order', component: OverviewPageComponent },
      { path: 'categories', component: OverviewPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
