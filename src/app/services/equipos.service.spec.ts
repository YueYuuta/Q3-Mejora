import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { IReadPlayerPositionModel } from '../models/read-player-position.model';
import { IReadPlayerModel } from '../models/read-player.model';

import { EquiposService } from './equipos.service';

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

const mockPosition: IReadPlayerPositionModel[] = [
  { description: 'delantero', id: 1 },
];

describe('EquiposService', () => {
  let service: EquiposService;
  let httpTesting: HttpTestingController;
  // let httpSpy: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EquiposService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getAll', (done) => {
    const apiUrl = environment.api_url;
    service.getAll().subscribe((data) => {
      expect(data).toEqual(mock);
      done();
    });
    const req = httpTesting.expectOne(`${apiUrl}/player`);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);

    httpTesting.verify();
  });

  it('should be getAllPosition', (done) => {
    const apiUrl = environment.api_url;
    service.getAllPosition().subscribe((data) => {
      expect(data).toEqual(mockPosition);
      done();
    });
    const req = httpTesting.expectOne(`${apiUrl}/position`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosition);

    httpTesting.verify();
  });
});
