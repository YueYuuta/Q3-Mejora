import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLabelComponent } from './custom-label.component';

describe('CustomLabelComponent', () => {
  let component: CustomLabelComponent;
  let fixture: ComponentFixture<CustomLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLabelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
