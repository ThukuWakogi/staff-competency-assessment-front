import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalThinkingFormComponent } from './critical-thinking-form.component';

describe('CriticalThinkingFormComponent', () => {
  let component: CriticalThinkingFormComponent;
  let fixture: ComponentFixture<CriticalThinkingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalThinkingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalThinkingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
