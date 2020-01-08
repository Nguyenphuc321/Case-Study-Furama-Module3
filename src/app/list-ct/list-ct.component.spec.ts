import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCtComponent } from './list-ct.component';

describe('ListCtComponent', () => {
  let component: ListCtComponent;
  let fixture: ComponentFixture<ListCtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
