import { Tags } from './../tags';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags-form',
  moduleId: module.id,
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.css']
})
export class TagsFormComponent implements OnInit {

  @Input() model: Tags;
  @Output() formSubmitted: EventEmitter<Tags> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.formSubmitted.emit(this.model);
  }

}
