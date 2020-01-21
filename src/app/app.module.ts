import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './dashboard/home/home.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
// import { SweetalertComponent } from './dashboard/sweetalert/sweetalert.component';
import { RootComponent } from './dashboard/root/root.component';
// import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsService } from './services/settings.services';

import { HttpClientModule } from '@angular/common/http';
import { StaffhomeComponent } from './pages/staffhome/staffhome.component';
import { AssessmentCardComponent } from './component/assessment-card/assessment-card.component'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { LoginComponent } from './page/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TeamsComponent } from './dashboard/teams/teams.component';
import { routing } from './app.routes';
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatRadioModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { AssessmentformComponent } from './dashboard/assessmentform/assessmentform.component';
import { OrganizationformComponent } from './component/organizationform/organizationform/organizationform.component';
import { InnovationFormComponent } from './component/innovation-form/innovation-form/innovation-form.component';
import {
  InterpersonalCommunicationFormComponent
} from './component/interpersonal-communication-form/interpersonal-communication-form.component';
import { CriticalThinkingFormComponent } from './component/critical-thinking-form/critical-thinking-form.component';
import {
  BuildingAndManagingRelationshipsFormComponent
} from './component/building-and-managing-relationships-form/building-and-managing-relationships-form.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SchedulerComponent } from 'src/app/dashboard/scheduler/scheduler.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HRComponent } from './component/hr/hr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    // SweetalertComponent,
    RootComponent,
    // LockComponent,
    HeaderComponent,
    FooterComponent,
    // SettingsComponent,
    StaffhomeComponent,
    TeamsComponent,
    AssessmentCardComponent,
    AssessmentformComponent,
    OrganizationformComponent,
    InnovationFormComponent,
    InterpersonalCommunicationFormComponent,
    CriticalThinkingFormComponent,
    BuildingAndManagingRelationshipsFormComponent,
    SchedulerComponent,
    HRComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SchedulerModule,
    DateInputsModule,
    NgbModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
