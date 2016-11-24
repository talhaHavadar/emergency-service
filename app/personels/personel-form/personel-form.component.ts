import { Personel } from './../personel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-form',
  moduleId: module.id,
  templateUrl: './personel-form.component.html',
  styleUrls: ['./personel-form.component.css']
})
export class PersonelFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Personel(1, "Talha", "Havadar", "Falan", "filanca", "Durum", "121sad1dspp12");
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  
  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}