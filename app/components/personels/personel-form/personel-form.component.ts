import { Personel } from './../personel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personel-form',
  moduleId: module.id,
  templateUrl: './personel-form.component.html',
  styleUrls: ['./personel-form.component.css']
})
export class PersonelFormComponent implements OnInit {

  @Input() model: Personel;
  @Output() formSubmitted: EventEmitter<Personel> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.formSubmitted.emit(this.model);
  }

}
