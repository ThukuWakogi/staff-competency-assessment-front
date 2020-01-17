import { AssessmentformComponent } from './dashboard/assessmentform/assessmentform.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
// import { SweetalertComponent } from './dashboard/sweetalert/sweetalert.component';
// import { SettingsComponent } from './dashboard/setting/setting.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';
// import { LockComponent } from './page/lock/lock.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'lock', component: LockComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'assessmentform', component: AssessmentformComponent},
    // {path: 'alert', component: SweetalertComponent},
    // {path: 'settings', component: SettingsComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

