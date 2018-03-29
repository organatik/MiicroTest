import { Component, OnInit } from '@angular/core';
import {GetAccountService} from '../services/get-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {
  accounts;
  SCORE: any;
  ACCOUNT_TYPE: any;
  GATE: any;
  onlyGate = [];
  uniqueGate = [];
  showedDrop = false;
  selectedItem;
  constructor(private getAccount: GetAccountService) {
    this.getAccount.getData().subscribe(data => {
      this.accounts = data;
      console.log(this.accounts[0]);
      for (let i = 0; i < this.accounts.length; i++ ) {
        this.onlyGate.push(this.accounts[i].GATE);
        console.log(this.onlyGate);
      }
      this.uniqueGate = Array.from(new Set(this.onlyGate));
    });

  }

  ngOnInit() {

  }


  selectItem(index) {
    this.selectedItem = index;
    this.showedDrop = !this.showedDrop;

    console.log(this.selectedItem);
  }

  deleteScore(index) {
    console.log(index);
    this.accounts.splice(index, 1);
    this.showedDrop = !this.showedDrop;
  }

  getIndex(item) {
    return this.accounts.indexOf(item);
  }





}
