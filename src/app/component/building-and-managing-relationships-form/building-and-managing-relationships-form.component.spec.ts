import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAndManagingRelationshipsFormComponent } from './building-and-managing-relationships-form.component';

describe('BuildingAndManagingRelationshipsFormComponent', () => {
  let component: BuildingAndManagingRelationshipsFormComponent;
  let fixture: ComponentFixture<BuildingAndManagingRelationshipsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingAndManagingRelationshipsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAndManagingRelationshipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
