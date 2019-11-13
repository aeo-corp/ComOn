import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaComDansTousSesEndroitsPage } from './la-com-dans-tous-ses-endroits.page';

describe('LaComDansTousSesEndroitsPage', () => {
  let component: LaComDansTousSesEndroitsPage;
  let fixture: ComponentFixture<LaComDansTousSesEndroitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaComDansTousSesEndroitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaComDansTousSesEndroitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
