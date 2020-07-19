import { Component, OnInit, Input } from '@angular/core';
//import '../../assets/icons';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  @Input() sendee: string;
  @Input() texts: any[];
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

  ngOnInit(): void {}

  removeText(index: number) {
    this.texts.splice(index, 1);
  }
}
