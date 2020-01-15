import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './components/navbar/navbar.component'
import { StaffhomeComponent } from './pages/staffhome/staffhome.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StaffhomeComponent,
    AssessmentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
