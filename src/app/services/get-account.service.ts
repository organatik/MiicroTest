import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GetAccountService {
  accountURL = '../assets/data/dataAccount.json';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<ACCOUNT>(this.accountURL);
  }


}
export interface ACCOUNT {
  ACCOUNT: string;
  LEVERAGE: string;
  CURRENCY: string;
  BALANCE: string;
  CREDIT: string;
  EQUITY: string;
  FREE: string;
  LEVEL: string;
  PROFIT: string;
  ACCOUNT_TYPE: string;
  GATE: string;
}
