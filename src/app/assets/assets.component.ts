import { Component, OnInit } from '@angular/core';
import { GetAssetsService} from '../services/get-assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.sass']
})
export class AssetsComponent implements OnInit {
  assets;
  constructor( private getAssets: GetAssetsService) {
    this.getAssets.getData().subscribe( data => {
      this.assets = data;
      this.assets = Array.of(this.assets);
      console.log(this.assets);
    });

  }

  ngOnInit() {

  }

}
