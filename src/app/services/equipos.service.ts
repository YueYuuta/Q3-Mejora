import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IReadPlayerModel } from '../models/read-player.model';
import { Observable, tap } from 'rxjs';
import { IReadPlayerPositionModel } from '../models/read-player-position.model';
import { StatePlayerService } from './state-player.service';
const api_url = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  idAuthor = 1; //7
  constructor(
    private readonly _http: HttpClient,
    private readonly _statePlayerService: StatePlayerService
  ) {}

  crearheaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const author = this.idAuthor;
    headers = headers.append('author', author.toString());
    return headers;
  }

  getAll(): Observable<IReadPlayerModel[]> {
    const headers: HttpHeaders = this.crearheaders();
    return this._http
      .get<IReadPlayerModel[]>(`${api_url}/player`, {
        headers,
      })
      .pipe(
        tap((playersBakc) => {
          this._statePlayerService.setPlayers = playersBakc;
        })
      );
  }
  getAllPosition(): Observable<IReadPlayerPositionModel[]> {
    return this._http.get<IReadPlayerPositionModel[]>(`${api_url}/position`);
  }
}
