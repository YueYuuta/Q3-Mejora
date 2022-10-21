import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-error-message',
  templateUrl: './custom-error-message.component.html',
  styleUrls: ['./custom-error-message.component.scss'],
})
export class CustomErrorMessageComponent implements OnInit {
  @Input() message: string = 'message default';

  constructor() {}

  ngOnInit(): void {}
}
