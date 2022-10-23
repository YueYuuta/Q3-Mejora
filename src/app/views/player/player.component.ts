import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { IReadPlayerModel } from '../../models/read-player.model';
import { StatePlayerService } from '../../services/state-player.service';
import { of, Subject, takeUntil, switchMap, Observable } from 'rxjs';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  inputSearch: string = '';
  private stop$ = new Subject<void>();
  title = 'Agregar';
  players!: Observable<IReadPlayerModel[]>;
  // playersSearch: IReadPlayerModel[] = [];
  open() {
    this.modalService.open();
  }

  constructor(
    private readonly _playerService: EquiposService,
    private readonly modalService: ModalService,
    private readonly _statePlayerService: StatePlayerService
  ) {}
  ngOnDestroy(): void {
    this.stop();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    const callTheAllPlayers = (players: IReadPlayerModel[]) => {
      if (players.length === 0) {
        return this._playerService.getAll();
      } else {
        return of(players);
      }
    };

    this.players = this._statePlayerService.getPlayers.pipe(
      takeUntil(this.stop$),
      switchMap(callTheAllPlayers)
    );
  }

  // searchKey(value: string) {
  //   if (value.length > 0) {
  //     this.playersSearch = this.players.filter(
  //       (player: IReadPlayerModel) =>
  //         player.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
  //         player.lastName.toLowerCase().indexOf(value.toLowerCase()) > -1
  //     );
  //   } else {
  //     this.playersSearch = this.players;
  //   }
  // }

  delete(player: number) {
    console.log('eliminar', player);
  }
  create() {
    this._statePlayerService.setSelectedPlayer = null;
    this.title = 'Agregar';
    this.open();
  }
  edit(player: IReadPlayerModel) {
    this._statePlayerService.setSelectedPlayer = player;
    this.open();
  }

  private stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
