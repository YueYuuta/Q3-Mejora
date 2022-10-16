import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IReadPlayerModel } from '../models/read-player.model';
// const mock = [
//   {
//     attack: 10,
//     defense: 10,
//     firstName: 'leo',
//     id: 1,
//     idAuthor: 1,
//     idPosition: 1,
//     image: 'dasdas',
//     lastName: 'messi',
//     skills: 100,
//   },
//   {
//     attack: 10,
//     defense: 10,
//     firstName: 'leo',
//     id: 1,
//     idAuthor: 1,
//     idPosition: 1,
//     image: 'dasdas',
//     lastName: 'messi',
//     skills: 100,
//   },
// ];

@Injectable({
  providedIn: 'root',
})
export class StatePlayerService {
  private _players = new BehaviorSubject<IReadPlayerModel[]>([]);
  private _selectedPlayer = new BehaviorSubject<IReadPlayerModel | null>(null);

  constructor() {}

  get getPlayers(): Observable<IReadPlayerModel[]> {
    return this._players.asObservable();
  }

  set setPlayers(players: IReadPlayerModel[]) {
    this._players.next(players);
  }

  get getSelectedPlayer(): Observable<IReadPlayerModel | null> {
    return this._selectedPlayer.asObservable();
  }

  set setSelectedPlayer(player: IReadPlayerModel | null) {
    this._selectedPlayer.next(player);
  }
}
