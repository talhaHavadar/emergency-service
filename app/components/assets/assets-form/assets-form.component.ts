import { Asset } from './../asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-form',
  moduleId: module.id,
  templateUrl: './assets-form.component.html',
  styleUrls: ['./assets-form.component.css']
})
export class AssetFormComponent implements OnInit {

  model = new Asset();
  //model = new Asset(1, "deneme", "solunum cihazı", "125sdsdfd522" );

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
