import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedashboradComponent } from './employeedashborad.component';

describe('EmployeedashboradComponent', () => {
  let component: EmployeedashboradComponent;
  let fixture: ComponentFixture<EmployeedashboradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedashboradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
