import { Component, OnInit } from '@angular/core';
import { VerificationComponent } from '../verification.component';

export interface Mnemonic {
  id: number;
  name: string;
  input_id: number;
}

@Component({
  selector: 'app-dekstop-verification',
  templateUrl: './dekstop-verification.component.html',
  styleUrls: ['./dekstop-verification.component.css']
})
export class DekstopVerificationComponent extends VerificationComponent implements OnInit {

  mnemonics: Mnemonic[] = [
    {id: 4, name: 'Mnemonic n°4', input_id: 1},
    {id: 9, name: 'Mnemonic n°9', input_id: 2},
    {id: 12, name: 'Mnemonic n°12', input_id: 3}
  ];

constructor() {
}

  ngOnInit() {
  }

}