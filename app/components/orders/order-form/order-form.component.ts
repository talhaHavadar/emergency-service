import { Order } from './../order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  moduleId: module.id,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderForm implements OnInit {

  model = new Order();

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
