import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetAssetsService {
  assetsURL = '../assets/data/dataAssets.json';
  constructor(private http: HttpClient) { }

  getData() {
     return this.http.get<ASSETS>(this.assetsURL);
  }

}
export interface ACCOUNT {
  USD: string;
}

export interface SAFE {
  USD: string;
  EUR: string;
  RUB: string;
}

export interface FRIEND {
  USD: number;
}

export interface MONEYBOX {
  USD: number;
}

export interface PARTNER {
  USD: number;
}

export interface TOTAL {
  USD: number;
  EUR: number;
  RUB: number;
}

export interface ASSETS {
  ACCOUNT: ACCOUNT;
  SAFE: SAFE;
  FRIEND: FRIEND;
  MONEY_BOX: MONEYBOX;
  PARTNER: PARTNER;
  TOTAL: TOTAL;
}

