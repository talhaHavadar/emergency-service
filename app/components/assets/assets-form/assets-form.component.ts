import { Asset } from './../asset';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asset-form',
  moduleId: module.id,
  templateUrl: './assets-form.component.html',
  styleUrls: ['./assets-form.component.css']
})
export class AssetFormComponent implements OnInit {

    @Input() model: Asset;
    @Output() formSubmitted: EventEmitter<Asset> = new EventEmitter();
    submitted = false;

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
      this.submitted = true;
      this.formSubmitted.emit(this.model);
    }
}
