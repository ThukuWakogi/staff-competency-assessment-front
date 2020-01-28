import { AssessmentformComponent } from './dashboard/assessmentform/assessmentform.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { HRComponent } from './component/hr/hr.component';
import { AssessmentPeriodComponent } from './dashboard/assessment-period/assessment-period.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'assessmentform', component: AssessmentformComponent},
    {path: 'HR', component: HRComponent},
    {path: 'assessment-period', component: AssessmentPeriodComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

