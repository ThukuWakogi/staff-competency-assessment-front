import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'staffhome', component: StaffhomeComponent },
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent}
  ]}
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//     RouterModule
//   ],
//   declarations: []
// })
export const routing = RouterModule.forRoot(routes);

