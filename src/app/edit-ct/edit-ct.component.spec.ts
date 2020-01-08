import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCtComponent } from './edit-ct.component';

describe('EditCtComponent', () => {
  let component: EditCtComponent;
  let fixture: ComponentFixture<EditCtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
