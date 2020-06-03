import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanProgramsComponent } from './add-loan-programs.component';

describe('AddLoanProgramsComponent', () => {
  let component: AddLoanProgramsComponent;
  let fixture: ComponentFixture<AddLoanProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoanProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
