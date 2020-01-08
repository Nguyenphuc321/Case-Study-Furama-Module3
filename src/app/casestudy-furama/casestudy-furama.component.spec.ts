import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyFuramaComponent } from './casestudy-furama.component';

describe('CasestudyFuramaComponent', () => {
  let component: CasestudyFuramaComponent;
  let fixture: ComponentFixture<CasestudyFuramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyFuramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyFuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
