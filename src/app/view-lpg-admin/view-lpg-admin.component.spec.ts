import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLpgAdminComponent } from './view-lpg-admin.component';

describe('ViewLpgAdminComponent', () => {
  let component: ViewLpgAdminComponent;
  let fixture: ComponentFixture<ViewLpgAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLpgAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLpgAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
