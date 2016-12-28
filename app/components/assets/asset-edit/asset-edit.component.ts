import { AssetService } from './../../../services/assets.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Asset } from './../asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-edit',
  moduleId: module.id,
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css'],
  providers: [AssetService]
})
export class AssetEditComponent implements OnInit {
  id: number;
  asset: Asset = new Asset(0,"","","");

  constructor(private router: Router, private route: ActivatedRoute, private assetService: AssetService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.assetService.getAsset(this.id).then((asset: Asset) => {
        this.asset = asset;
      })
    });
  }

  editOrder(order: Order) {
    this.orderService.updateOrder(order).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['orders', this.id]);
      }
    })
  }

}
