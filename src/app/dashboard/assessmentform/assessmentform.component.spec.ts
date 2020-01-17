import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentformComponent } from './assessmentform.component';

describe('AssessmentformComponent', () => {
  let component: AssessmentformComponent;
  let fixture: ComponentFixture<AssessmentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
