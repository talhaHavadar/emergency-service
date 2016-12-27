import { Drug } from './../drug';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-consumable-detail',
  moduleId: module.id,
  templateUrl: './drug-consumable-detail.component.html',
  styleUrls: ['./drug-consumable-detail.component.css']
})
export class DrugConsumableDetailComponent implements OnInit {
/*
  public id: number,
  public type: string,
  public name: string,
  public description: string,
  public tag:number, //değişebilir tagDto
  public ExpirationDate: Date
  public barcode:string,
*/
  model = new Drug();

  constructor() { }

  ngOnInit() {
  }

}
