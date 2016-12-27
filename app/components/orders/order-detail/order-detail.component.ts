import { Order } from './../order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  moduleId: module.id,
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  model = new Order();

  constructor() { }

  ngOnInit() {
  }

}
