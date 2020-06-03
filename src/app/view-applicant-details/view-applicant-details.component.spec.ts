import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicantDetailsComponent } from './view-applicant-details.component';

describe('ViewApplicantDetailsComponent', () => {
  let component: ViewApplicantDetailsComponent;
  let fixture: ComponentFixture<ViewApplicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApplicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
