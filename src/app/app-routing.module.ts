import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';


const routes: Routes = [
  { path: '', component: StaffhomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
