import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiiComponent } from './copii.component';

describe('CopiiComponent', () => {
  let component: CopiiComponent;
  let fixture: ComponentFixture<CopiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
