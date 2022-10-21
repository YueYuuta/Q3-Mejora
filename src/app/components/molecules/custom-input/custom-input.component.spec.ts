import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomLabelComponent } from '../../atoms/custom-label/custom-label.component';

import { CustomInputComponent } from './custom-input.component';

@Component({
  selector: 'app-host',
  template: `<app-custom-input
    [formControl]="testControl"
    [label]="label"
    [isValid]="isvalid"
    [isInvalid]="isinvalid"
  ></app-custom-input>`,
})
class HostComponent {
  @ViewChild(CustomInputComponent)
  public customInputComponent!: CustomInputComponent;
  public label: string = 'Por defecto';
  public isvalid: boolean = false;
  public isinvalid: boolean = false;
  testControl: FormControl = new FormControl('');
}

describe('CustomInputComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputComponent, HostComponent, CustomLabelComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    hostComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    hostComponent.customInputComponent.onTouch();
    hostComponent.customInputComponent.onChange();
    const fn = () => {};

    hostComponent.customInputComponent.registerOnChange(fn);

    expect(hostComponent.customInputComponent.onChange).toBe(fn);
  });

  it('Label must change the component label', () => {
    hostComponent.label = 'Cambio';
    fixture.detectChanges();
    expect(hostComponent.customInputComponent.label).toBe('Cambio');
  });
  it('change the field value if input changes', () => {
    hostComponent.customInputComponent.writeValue('hol');
    hostComponent.customInputComponent.registerOnTouched(() => {});
    hostComponent.customInputComponent.registerOnChange(() => {});
    expect(hostComponent.customInputComponent.value).toBe('hol');
    hostComponent.customInputComponent.onChange = jest.fn(() => {});
    expect(hostComponent.customInputComponent.onChange).toBeDefined();
  });
  it('registerOnTouched its defined', () => {
    expect(hostComponent.customInputComponent.registerOnTouched).toBeDefined();
  });
});
