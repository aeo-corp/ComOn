import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPourTousTousPourComPage } from './un-pour-tous-tous-pour-com.page';

describe('UnPourTousTousPourComPage', () => {
  let component: UnPourTousTousPourComPage;
  let fixture: ComponentFixture<UnPourTousTousPourComPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnPourTousTousPourComPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPourTousTousPourComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
