import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlonsPeuParlonsComPage } from './parlons-peu-parlons-com.page';

describe('ParlonsPeuParlonsComPage', () => {
  let component: ParlonsPeuParlonsComPage;
  let fixture: ComponentFixture<ParlonsPeuParlonsComPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParlonsPeuParlonsComPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlonsPeuParlonsComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
