import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnemonicComponent } from './wallet/containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './wallet/containers/verification/verification.component';
import { WalletComponent } from './wallet/containers/wallet/wallet.component';
import { TransactionComponent } from './wallet/containers/transaction/transaction.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UIModule } from './ui.module';


@NgModule({
  declarations: [
    AppComponent,
    MnemonicComponent,
    VerificationComponent,
    WalletComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
