import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeSaviezVousPage } from './le-saviez-vous.page';

describe('LeSaviezVousPage', () => {
  let component: LeSaviezVousPage;
  let fixture: ComponentFixture<LeSaviezVousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeSaviezVousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeSaviezVousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
