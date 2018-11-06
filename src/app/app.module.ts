import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnemonicComponent } from './wallet/containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './wallet/containers/verification/verification.component';
import { WalletComponent } from './wallet/containers/wallet/wallet.component';
import { TransactionComponent } from './wallet/containers/transaction/transaction.component';
import { DekstopVerificationComponent } from './wallet/containers/verification/dekstop-verification/dekstop-verification.component';
import { MobileVerificationComponent } from './wallet/containers/verification/mobile-verification/mobile-verification.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UIModule } from './ui.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material';
import { CustomMatPaginatorIntl } from './customPaginatorClass';

@NgModule({
  declarations: [
    AppComponent,
    MnemonicComponent,
    VerificationComponent,
    WalletComponent,
    TransactionComponent,
    DekstopVerificationComponent,
    MobileVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    FlexLayoutModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
