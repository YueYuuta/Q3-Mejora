import { TestBed } from '@angular/core/testing';
import { IReadPlayerModel } from '../models/read-player.model';

import { StatePlayerService } from './state-player.service';

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

describe('StatePlayerService', () => {
  let service: StatePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be setPlayers', (done) => {
    service.setPlayers = mock;
    service.getPlayers.subscribe((data) => {
      expect(data).toEqual(mock);
      done();
    });
  });

  it('should be setPlayer', (done) => {
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
    service.setPlayer = mockPlayer;
    service.getPlayers.subscribe((data) => {
      expect(data).toEqual([mockPlayer]);
      done();
    });
  });

  it('should be setSelectedPlayer', (done) => {
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
    service.setSelectedPlayer = mockPlayer;
    service.getSelectedPlayer.subscribe((data) => {
      expect(data).toEqual(mockPlayer);
      done();
    });
  });
});
