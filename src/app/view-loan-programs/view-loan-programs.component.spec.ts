import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanProgramsComponent } from './view-loan-programs.component';

describe('ViewLoanProgramsComponent', () => {
  let component: ViewLoanProgramsComponent;
  let fixture: ComponentFixture<ViewLoanProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoanProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
