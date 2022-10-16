import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
// import { concatMap, forkJoin } from 'rxjs';
import { EquiposService } from 'src/app/services/equipos.service';
import { StatePlayerService } from 'src/app/services/state-player.service';
import { IReadPlayerPositionModel } from '../../models/read-player-position.model';
// import { StatePlayerService } from '../../services/state-player.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // positions: IReadPlayerPositionModel[] = [];
  playerForm!: FormGroup;
  positions$: Observable<IReadPlayerPositionModel[]> = of([]);
  constructor(
    private readonly fb: FormBuilder,
    private readonly _statePlayerService: StatePlayerService,
    private readonly _playerServices: EquiposService
  ) {}

  ngOnInit(): void {
    this.formSave();
    this.init();
  }
  getPosition(): void {}

  save() {
    console.log('form', this.playerForm.value);
  }
  private init(): void {
    this.positions$ = this._playerServices.getAllPosition();
    this._statePlayerService.getSelectedPlayer.subscribe((player) => {
      if (player) {
        this.playerForm.patchValue(player);
      } else {
        this.playerForm.reset();
        // this.getControl('attack').setValue(0);
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
