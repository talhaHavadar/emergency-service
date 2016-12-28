import { Router } from '@angular/router';
import { AssetService } from './../../../services/assets.services';
import { Asset } from './../asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-new',
  moduleId: module.id,
  templateUrl: './assets-new.component.html',
  styleUrls: ['./assets-new.component.css'],
  providers:[AssetService]
})
export class AssetNewComponent implements OnInit {

    asset: Asset = new Asset(0,"","","");

    constructor(private router: Router, private assetService: AssetService) { }

    ngOnInit() {
    }

    newOrder(asset: Asset) {
      this.assetService.createAsset(asset).then((data) => {
        if(data.success) {
          alert("implement with backend");
          this.router.navigate(['assets']);
        }
      });
    }

}
