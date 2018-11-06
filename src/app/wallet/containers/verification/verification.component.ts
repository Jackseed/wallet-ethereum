import { Component, OnInit } from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

export interface Mnemonic {
  id: number;
  name: string;
  input_id: number;
}

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  mnemonics: Mnemonic[] = [
    {id: 4, name: 'Mnemonic n°4', input_id: 1},
    {id: 9, name: 'Mnemonic n°9', input_id: 2},
    {id: 12, name: 'Mnemonic n°12', input_id: 3}
  ];

  watcher: Subscription;
  activeMediaQuery = '';
  isMobile = false;

  constructor(public media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === 'xs') {
        this.isMobile = true;
      }
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
  this.watcher.unsubscribe();
  }

  ngOnInit() {
  }

}
