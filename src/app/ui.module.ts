import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, CommonModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  declarations: []
})
export class UIModule { }
