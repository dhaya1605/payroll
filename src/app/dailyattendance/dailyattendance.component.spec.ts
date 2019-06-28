import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyattendanceComponent } from './dailyattendance.component';

describe('DailyattendanceComponent', () => {
  let component: DailyattendanceComponent;
  let fixture: ComponentFixture<DailyattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
