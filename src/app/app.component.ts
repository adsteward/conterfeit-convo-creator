import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fimessage';
  sendee : string = '';
  time: string = '';
  newTextBox = false;
  texts: any = [
  ]
  text: string;
  initials: string = '';
  
  

  sendText(from: string) {
    this.texts.push( {from: from, text: this.text});
    this.text = undefined;
  }


}
