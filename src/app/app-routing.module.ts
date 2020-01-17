import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';
import { TeamsComponent } from './dashboard/teams/teams.component'

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
// import { LockComponent } from './page/lock/lock.component';
import {NgModule}  from '@angular/core';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'staffhome', component: StaffhomeComponent },
  // {path: 'lock', component: LockComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'teams', component: TeamsComponent}
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

