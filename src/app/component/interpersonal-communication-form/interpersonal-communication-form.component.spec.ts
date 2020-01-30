import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpersonalCommunicationFormComponent } from './interpersonal-communication-form.component';

describe('InterpersonalCommunicationFormComponent', () => {
  let component: InterpersonalCommunicationFormComponent;
  let fixture: ComponentFixture<InterpersonalCommunicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpersonalCommunicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpersonalCommunicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
