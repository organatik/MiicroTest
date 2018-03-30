import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import {GetAssetsService} from './services/get-assets.service';
import { AccountComponent } from './account/account.component';
import {GetAccountService} from './services/get-account.service';
import { SelectAccountPipe } from './pipes/select-account.pipe';
import { SelectAccountTypePipe } from './pipes/select-account-type.pipe';
import { SelectGatePipe } from './pipes/select-gate.pipe';
import {NgPipesModule} from 'ngx-pipes';





@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AccountComponent,
    SelectAccountPipe,
    SelectAccountTypePipe,
    SelectGatePipe,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NgPipesModule
  ],
  providers: [
    GetAssetsService,
    GetAccountService
  ],
  bootstrap: [AppComponent],
  exports: [
    SelectAccountPipe,
    SelectAccountTypePipe,
  ]
})
export class AppModule { }
