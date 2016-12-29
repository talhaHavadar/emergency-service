import { Clocation } from './../clocation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clocations-form',
  moduleId: module.id,
  templateUrl: './clocations-form.component.html',
  styleUrls: ['./clocations-form.component.css']
})
export class ClocationsFormComponent implements OnInit {
  
  @Input() model: Clocation;
  @Output() formSubmitted: EventEmitter<Clocation> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.formSubmitted.emit(this.model);
  }

}