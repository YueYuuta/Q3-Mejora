import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquiposService } from '../../services/equipos.service';
import { PlayerComponent } from './player.component';
import { StatePlayerService } from '../../services/state-player.service';
import { IReadPlayerModel } from '../../models/read-player.model';
import { ModalService } from '../../services/modal.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const mock: IReadPlayerModel[] = [
  {
    attack: 10,
    defense: 10,
    firstName: 'leo',
    id: 1,
    idAuthor: 1,
    idPosition: 1,
    image: 'dasdas',
    lastName: 'messi',
    skills: 100,
  },
  {
    attack: 10,
    defense: 10,
    firstName: 'leo',
    id: 1,
    idAuthor: 1,
    idPosition: 1,
    image: 'dasdas',
    lastName: 'messi 1',
    skills: 100,
  },
];

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let fakeServiceMock: any;
  let playerService: EquiposService;
  let statePlayerService: StatePlayerService;
  let modalService: ModalService;

  beforeEach(async () => {
    fakeServiceMock = {
      getAll: jest.fn(),
      getAllPosition: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      providers: [
        { provide: EquiposService, useValue: fakeServiceMock },
        StatePlayerService,
        ModalService,
      ],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    playerService = TestBed.inject(EquiposService);
    statePlayerService = TestBed.inject(StatePlayerService);
    modalService = TestBed.inject(ModalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change the players state', () => {
    statePlayerService.setPlayers = mock;
    component.getAll();
    expect(component.players).toEqual(mock);
  });

  it('should test the functionality of create', () => {
    const spy = jest.spyOn(component, 'open');
    const spySet = jest.spyOn(statePlayerService, 'setSelectedPlayer', 'set');
    component.create();
    expect(spySet).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
    expect(component.title).toBe('Agregar');
  });

  it('should test the functionality of searchKey if true', () => {
    statePlayerService.setPlayers = mock;
    component.getAll();
    component.searchKey('messi 1');
    expect(component.playersSearch).toEqual([
      {
        attack: 10,
        defense: 10,
        firstName: 'leo',
        id: 1,
        idAuthor: 1,
        idPosition: 1,
        image: 'dasdas',
        lastName: 'messi 1',
        skills: 100,
      },
    ]);
  });

  it('should test the functionality of searchKey if false', () => {
    // const spy = jest.spyOn(Array.prototype, 'filter').mockReturnValue([]);
    statePlayerService.setPlayers = mock;
    component.getAll();
    component.searchKey('');
    expect(component.playersSearch).toEqual(mock);
  });

  it('should test the functionality of edit', () => {
    const mockPlayer = {
      attack: 10,
      defense: 10,
      firstName: 'leo',
      id: 1,
      idAuthor: 1,
      idPosition: 1,
      image: 'dasdas',
      lastName: 'messi 1',
      skills: 100,
    };
    const spy = jest.spyOn(component, 'open');
    const spySet = jest.spyOn(statePlayerService, 'setSelectedPlayer', 'set');
    component.edit(mockPlayer);
    expect(spySet).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });
});
