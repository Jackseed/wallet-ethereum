import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './containers/verification/verification.component';
import { WalletComponent } from './containers/wallet/wallet.component';
import { TransactionComponent } from './containers/transaction/transaction.component';
import { UIModule } from '../ui.module';
import { MobileVerificationComponent } from './containers/verification/mobile/mobile-verification/mobile-verification.component';
import { DekstopVerificationComponent } from './containers/verification/dekstop-verification/dekstop-verification.component';

@NgModule({
  imports: [
    CommonModule, UIModule
  ],
  declarations: [MnemonicComponent, VerificationComponent, WalletComponent, TransactionComponent, MobileVerificationComponent, DekstopVerificationComponent]
})
export class WalletModule { }
