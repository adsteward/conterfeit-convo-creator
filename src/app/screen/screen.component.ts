import { Component, OnInit, Input } from '@angular/core';
//import '../../assets/icons';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  @Input() sendee: string;
  @Input() texts: any;
  @Input() time: string;
  @Input() initials: string;
  @Input() signal: number;
  @Input() wifi: number;
  @Input() battery: string;
  @Input() airplane: boolean;
  @Input() remove: boolean;
  // signalPath: string;
  // wifiPath: string;

  constructor() {}

  ngOnInit(): void {
    // this.signalPath = `../assets/signal/cell-bars-${this.signal}.png`;
    // console.log(this.signalPath);
  }

  ngOnUpdate(): void {
    // this.signalPath = `../assets/signal/cell-bars-${this.signal}.png`;
    // console.log(this.signalPath);
  }

  // get sendeeInitials(): string {
  //   return "AS";
  // }

  // get texts(): any{
  //   return [
  //     { from: 'me', text: 'hey'},
  //     { from: 'you', text: 'what'},
  //     { from: 'me', text: 'omg'},
  //     { from: 'me', text: 'how does this look?'},
  //     { from: 'you', text: 'what about this longer line so long almost too long?'},
  //     { from: 'me', text: 'bad'}
  //   ]
  // }
}
