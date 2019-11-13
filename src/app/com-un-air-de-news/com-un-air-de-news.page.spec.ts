import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComUnAirDeNewsPage } from './com-un-air-de-news.page';

describe('ComUnAirDeNewsPage', () => {
  let component: ComUnAirDeNewsPage;
  let fixture: ComponentFixture<ComUnAirDeNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComUnAirDeNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComUnAirDeNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
