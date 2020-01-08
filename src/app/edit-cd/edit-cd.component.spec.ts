import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCdComponent } from './edit-cd.component';

describe('EditCdComponent', () => {
  let component: EditCdComponent;
  let fixture: ComponentFixture<EditCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
