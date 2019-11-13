import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSommesNousPage } from './qui-sommes-nous.page';

describe('QuiSommesNousPage', () => {
  let component: QuiSommesNousPage;
  let fixture: ComponentFixture<QuiSommesNousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiSommesNousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSommesNousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
