import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { StatePlayerService } from '../../services/state-player.service';
import { EquiposService } from '../../services/equipos.service';
import { CustomButtonComponent } from '../molecules/custom-button/custom-button.component';
import { CustomInputComponent } from '../molecules/custom-input/custom-input.component';
import { CustomSelectComponent } from '../molecules/custom-select/custom-select.component';
import { SliderComponent } from '../slider/slider.component';

import { FormComponent } from './form.component';
import { IReadPlayerModel } from '../../models/read-player.model';
import { CustomLabelComponent } from '../atoms/custom-label/custom-label.component';
const mockPlayer: IReadPlayerModel = {
  attack: 10,
  defense: 10,
  firstName: 'leo',
  id: 1,
  idAuthor: 1,
  idPosition: 1,
  image: 'dasdas',
  lastName: 'messi',
  skills: 100,
};

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let fakeServiceMock: any;
  let equipoService: EquiposService;
  let statePlayer: StatePlayerService;
  let modalService: ModalService;

  beforeEach(async () => {
    fakeServiceMock = {
      getAll: jest.fn(),
      getAllPosition: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        CustomButtonComponent,
        CustomSelectComponent,
        CustomInputComponent,
        SliderComponent,
        CustomLabelComponent,
      ],
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [],
      providers: [{ provide: EquiposService, useValue: fakeServiceMock }],
    }).compileComponents();
    equipoService = TestBed.inject(EquiposService);
    statePlayer = TestBed.inject(StatePlayerService);
    modalService = TestBed.inject(ModalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be save', () => {
    const spy = jest.spyOn(statePlayer, 'setPlayer', 'set');
    const spySet = jest.spyOn(modalService, 'close');
    component.save();
    expect(spySet).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should be init for if true', () => {
    statePlayer.setSelectedPlayer = mockPlayer;
    fixture.detectChanges();
    expect(component.playerForm.get('lastName')?.value).toEqual(
      mockPlayer.lastName
    );
  });

  it('should be isInvalid', () => {
    // statePlayer.setSelectedPlayer = mockPlayer;
    const input = component.playerForm.get('lastName') as FormControl;
    input.markAsTouched();

    expect(component.esInvalido(input)).toEqual(true);
  });
  it('should be isValid', () => {
    // statePlayer.setSelectedPlayer = mockPlayer;
    const input = component.playerForm.get('lastName') as FormControl;
    input.setValue('messi');
    input.markAsTouched();

    expect(component.esValido(input)).toEqual(true);
  });

  it('the field should be required touched', () => {
    const input = component.playerForm.get('lastName') as FormControl;
    input.markAllAsTouched();
    expect(component.esRequerido(input)).toEqual(true);
  });

  it('the field should be required dirty', () => {
    const input = component.playerForm.get('lastName') as FormControl;
    input.markAsDirty();
    expect(component.esRequerido(input)).toEqual(true);
  });
});
