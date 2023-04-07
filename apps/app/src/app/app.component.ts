import { Component } from '@angular/core';

@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  criterion = (param: number) => param % 2 === 0;
}
