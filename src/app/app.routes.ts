import { AssessmentformComponent } from './dashboard/assessmentform/assessmentform.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
// import { SweetalertComponent } from './dashboard/sweetalert/sweetalert.component';
// import { SettingsComponent } from './dashboard/setting/setting.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
<<<<<<< HEAD
import { TeamsComponent } from './dashboard/teams/teams.component';
=======
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';
>>>>>>> 00721683d6671f5ffcc558d0b94f8f7af67f28d5
// import { LockComponent } from './page/lock/lock.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'lock', component: LockComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'notification', component: NotificationComponent},
<<<<<<< HEAD
    {path: 'teams', component: TeamsComponent}
=======
    {path: 'assessmentform', component: AssessmentformComponent},
>>>>>>> 00721683d6671f5ffcc558d0b94f8f7af67f28d5
    // {path: 'alert', component: SweetalertComponent},
    // {path: 'settings', component: SettingsComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

