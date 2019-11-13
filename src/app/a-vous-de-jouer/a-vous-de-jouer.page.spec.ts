import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVousDeJouerPage } from './a-vous-de-jouer.page';

describe('AVousDeJouerPage', () => {
  let component: AVousDeJouerPage;
  let fixture: ComponentFixture<AVousDeJouerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVousDeJouerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVousDeJouerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
