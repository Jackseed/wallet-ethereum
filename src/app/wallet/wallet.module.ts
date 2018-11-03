import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './containers/verification/verification.component';
import { WalletComponent } from './containers/wallet/wallet.component';
import { TransactionComponent } from './containers/transaction/transaction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MnemonicComponent, VerificationComponent, WalletComponent, TransactionComponent]
})
export class WalletModule { }
