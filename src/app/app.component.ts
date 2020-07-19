import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fimessage';
  sendee: string = '';
  time: string = '11:11';
  newTextBox = false;
  texts: any = [];
  text: string;
  initials: string = '';
  signal = 4;
  wifi = 3;
  battery = 'full';
  airplane = false;
  remove = false;

  sendText(from: string) {
    if (this.text !== undefined) {
      this.texts.push({ from: from, text: this.text });
    }
    this.text = undefined;
  }
}
