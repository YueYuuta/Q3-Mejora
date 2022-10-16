import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IReadPlayerModel } from '../../models/read-player.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() player!: IReadPlayerModel;
  @Output() clickEdit = new EventEmitter<IReadPlayerModel>();
  @Output() clickDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  onClickButtonEdit(player: IReadPlayerModel) {
    this.clickEdit.emit(player);
  }
  onClickButtonDelete(id: number) {
    this.clickDelete.emit(id);
  }
}
