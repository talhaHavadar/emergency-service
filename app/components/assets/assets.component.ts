import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AssetService } from '../../services/assets.services';
import { Asset } from './asset';


declare var $: JQueryStatic;

@Component({
  selector: 'app-assets',
  moduleId: module.id,
  templateUrl: 'assets.component.html',
  styleUrls: ['assets.component.css'],
  providers: [AssetService]
})
export class AssetsComponent implements OnInit, AfterViewInit {

  private assets: Asset[];

  constructor(private router: Router, private assetService: AssetService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    var ROUTER = this.router;
    this.assetService.getAssets().then((assets) => {

      this.assets = assets
        // Html kısmında orders ngfor ile dönülerek yazılıyor.
      $(document).ready(function () {
        $('#dataTables-assets').DataTable({
          responsive: true
        });

        $('#dataTables-assets').on('click', 'tr', function () {
          ROUTER.navigate(['/assets/1']);
        });
      });
    });
  }


  navigateAddAsset() {
    this.router.navigate(['/assets/new']);
  }

}
