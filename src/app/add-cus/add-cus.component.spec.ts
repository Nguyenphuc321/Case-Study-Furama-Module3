import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCusComponent } from './add-cus.component';

describe('AddCusComponent', () => {
  let component: AddCusComponent;
  let fixture: ComponentFixture<AddCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
