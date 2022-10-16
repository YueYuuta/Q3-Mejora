import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() text: string = 'boton';
  @Input() disabled: boolean = false;
  @Input() color: string = 'white';
  @Input() bColor: string = '#505050ff';
  @Input() height: string = '2rem';
  @Input() width: string = 'auto';
  @Input() bColorHover: string = 'rgb(41, 40, 40)';
  @Output() btnClick = new EventEmitter();

  constructor(private readonly _el: ElementRef) {}

  ngOnInit(): void {
    this.setCustomProperties();
  }
  private setCustomProperties(): void {
    this._el.nativeElement.style.setProperty('--color', this.color);
    this._el.nativeElement.style.setProperty('--bColor', this.bColor);
    this._el.nativeElement.style.setProperty('--height', this.height);
    this._el.nativeElement.style.setProperty('--width', this.width);
    this._el.nativeElement.style.setProperty('--bColorHover', this.bColorHover);
  }
  onBtnClick() {
    this.btnClick.emit();
  }
}
