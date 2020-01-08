import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCusComponent } from './edit-cus.component';

describe('EditCusComponent', () => {
  let component: EditCusComponent;
  let fixture: ComponentFixture<EditCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
