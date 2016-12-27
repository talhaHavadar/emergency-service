import { Asset } from './../asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-detail',
  moduleId: module.id,
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

  model = new Asset();

  constructor() { }

  ngOnInit() {
  }

}
