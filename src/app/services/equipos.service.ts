import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IReadPlayerModel } from '../models/read-player.model';
import { Observable } from 'rxjs';
import { IReadPlayerPositionModel } from '../models/read-player-position.model';
const api_url = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  idAuthor = 1; //7
  constructor(private readonly _http: HttpClient) {}

  crearheaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const author = this.idAuthor;
    headers = headers.append('author', author.toString());
    return headers;
  }

  getAll(): Observable<IReadPlayerModel[]> {
    const headers: HttpHeaders = this.crearheaders();
    return this._http.get<IReadPlayerModel[]>(`${api_url}/player`, {
      headers,
    });
  }
  getAllPosition(): Observable<IReadPlayerPositionModel[]> {
    return this._http.get<IReadPlayerPositionModel[]>(`${api_url}/position`);
  }
}
