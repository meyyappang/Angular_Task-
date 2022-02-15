import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemodelModel } from './employeemodel.model';

describe('EmployeemodelModel', () => {
  let component: EmployeemodelModel;
  let fixture: ComponentFixture<EmployeemodelModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemodelModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemodelModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
