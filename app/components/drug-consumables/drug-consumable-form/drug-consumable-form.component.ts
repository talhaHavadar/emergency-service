import { Drug } from './../drug';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-consumable-form',
  moduleId: module.id,
  templateUrl: './drug-consumable-form.component.html',
  styleUrls: ['./drug-consumable-form.component.css']
})
export class DrugConsumableForm implements OnInit {

  model = new Drug();

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
