import { Admin } from './../admin';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-form',
  moduleId: module.id,
  templateUrl: './admins-form.component.html',
  styleUrls: ['./admins-form.component.css']
})
export class AdminsFormComponent implements OnInit {

  @Input() model: Admin;
  @Output() formSubmitted: EventEmitter<Admin> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.formSubmitted.emit(this.model);
  }

}
