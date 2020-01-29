import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './dashboard/home/home.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { RootComponent } from './dashboard/root/root.component';
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
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatSlideToggleModule,
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
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HRComponent } from './component/hr/hr.component';
import { AssessmentPeriodFormDialogComponent } from './component/assessment-period-form-dialog/assessment-period-form-dialog.component';
import { AssessmentPeriodComponent } from './dashboard/assessment-period/assessment-period.component';


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
    MsgIconBtnComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    StaffhomeComponent,
    AssessmentCardComponent,
    AssessmentformComponent,
    OrganizationformComponent,
    InnovationFormComponent,
    InterpersonalCommunicationFormComponent,
    CriticalThinkingFormComponent,
    BuildingAndManagingRelationshipsFormComponent,
    HRComponent,
    AssessmentPeriodFormDialogComponent,
    AssessmentPeriodComponent
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
    DateInputsModule,
    NgbModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent],
  entryComponents: [AssessmentPeriodFormDialogComponent]
})
export class AppModule { }
