import { Personel } from './../personel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-detail',
  moduleId: module.id,
  templateUrl: './personel-detail.component.html',
  styleUrls: ['./personel-detail.component.css']
})
export class PersonelDetailComponent implements OnInit {
  
  model = new Personel(1, "Talha", "Havadar", "Falan", "filanca", "Durum", "121sad1dspp12");

  constructor() { }

  ngOnInit() {
  }

}