import { Drug } from './../drug';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drug-form',
  moduleId: module.id,
  templateUrl: './drug-consumable-form.component.html',
  styleUrls: ['./drug-consumable-form.component.css']
})
export class DrugConsumableForm implements OnInit {

  @Input() model: Drug;
  @Output() formSubmitted: EventEmitter<Drug> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.formSubmitted.emit(this.model);
  }

}
