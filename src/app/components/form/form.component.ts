import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IReadPlayerModel } from '../../models/read-player.model';
import { EquiposService } from '../../services/equipos.service';
import { ModalService } from '../../services/modal.service';
import { StatePlayerService } from '../../services/state-player.service';
import { IReadPlayerPositionModel } from '../../models/read-player-position.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  playerForm!: FormGroup;
  positions$: Observable<IReadPlayerPositionModel[]> = of([]);
  constructor(
    private readonly fb: FormBuilder,
    private readonly _statePlayerService: StatePlayerService,
    private readonly _playerServices: EquiposService,
    private readonly _modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.formSave();
    this.init();
  }
  getPosition(): void {}

  save() {
    const playerForm = this.playerForm.value;
    const savePlayer: IReadPlayerModel = {
      id: 10,
      attack: playerForm.attack,
      defense: playerForm.defense,
      firstName: playerForm.firstName,
      idAuthor: playerForm.idAuthor,
      idPosition: playerForm.idPosition,
      image: playerForm.image,
      lastName: playerForm.lastName,
      skills: playerForm.skills,
    };
    console.log(savePlayer);
    this._statePlayerService.setPlayer = savePlayer;
    this._modalService.close();
  }

  private init(): void {
    this.positions$ = this._playerServices.getAllPosition();
    this._statePlayerService.getSelectedPlayer.subscribe((player) => {
      if (player) {
        this.playerForm.patchValue(player);
      } else {
        this.playerForm.reset();
      }
    });
  }

  private formSave(): void {
    this.playerForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      image: [null, [Validators.required]],
      attack: [0, [Validators.required]],
      defense: [0, [Validators.required]],
      skills: [0, [Validators.required]],
      idPosition: ['', [Validators.required]],
    });
  }
  getControl(control: string): FormControl {
    return this.playerForm.get(control) as FormControl;
  }

  esInvalido(input: FormControl): boolean {
    return (input.touched || input.dirty) && input.invalid;
  }
  esValido(input: FormControl): boolean {
    return (input.touched || input.dirty) && input.valid;
  }
  esRequerido(input: FormControl): boolean {
    let bool: boolean = false;
    if (input.touched || input.dirty) {
      bool = input.hasError('required');
    }
    return bool;
  }
}
