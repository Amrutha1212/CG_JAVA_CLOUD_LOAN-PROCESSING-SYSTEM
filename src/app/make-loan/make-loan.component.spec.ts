import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeLoanComponent } from './make-loan.component';

describe('MakeLoanComponent', () => {
  let component: MakeLoanComponent;
  let fixture: ComponentFixture<MakeLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
