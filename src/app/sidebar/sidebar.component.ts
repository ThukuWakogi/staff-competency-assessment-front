import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../services/settings.services';
import { ROUTES } from './sidebar-routes.config';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { AssessmentsService } from '../services/assessments/assessments.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  public pendingAssessmentActiveColor: string
  public pendingAssessmentInactiveColor: string
  public isAssessmentPending = true
  currentUser: any;

  constructor(
    public settingsService: SettingsService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private assessmentsService: AssessmentsService,
  ) {
    this.menuItems = ROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    this.pendingAssessmentActiveColor = 'rgb(207, 46, 50)'
    this.pendingAssessmentInactiveColor = 'rgb(255, 243, 158)'
  }

  ngOnInit() {
    this.color = this.settingsService.getSidebarFilter();
    this.settingsService.sidebarFilterUpdate.subscribe((filter: string) => {
      this.color = filter;
      if (filter === '#fff') {
        this.activeFontColor = 'rgba(0,0,0,.6)';
      } else {
        this.activeFontColor = 'rgba(255,255,255,.8)';
      }
    });
    this.settingsService.sidebarColorUpdate.subscribe((color: string) => {
      if (color === '#fff') {
        this.normalFontColor = 'rgba(0,0,0,.6)';
        this.dividerBgColor = 'rgba(0,0,0,.1)';
      } else {
        this.normalFontColor = 'rgba(255,255,255,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
      }
    });
    this
      .assessmentsService
      .PendingAssessmentStatus
      .subscribe(assessStatus => {
        if (assessStatus) {
          console.log(assessStatus.is_assessment_done)
          this.isAssessmentPending = assessStatus.is_assessment_done
        }
      })
  }

  ngOnDestroy() {
    this.settingsService.sidebarFilterUpdate.unsubscribe();
    this.settingsService.sidebarColorUpdate.unsubscribe();
  }

  ngAfterViewInit() {}

  showPendingAssessment() {return this.isAssessmentPending}
}
