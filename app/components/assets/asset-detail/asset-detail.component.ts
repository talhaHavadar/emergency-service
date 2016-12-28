import { AssetService } from './../../../services/assets.services';
import { Asset } from './../asset';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-asset-detail',
  moduleId: module.id,
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
  providers: [AssetService]
})
export class AssetDetailComponent implements OnInit {

  private id: number;
  model: Asset = new Asset();
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private assetService: AssetService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.assetService.getAsset(this.id).then((asset: Asset) => {
        console.log("returned asset", asset);
        this.model = asset;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/assets/edit', this.model.id]);
  }

  delete() {
    this.assetService.deleteAsset(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/assets']);
      }
    });
  }

}
