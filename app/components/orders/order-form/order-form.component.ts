import { Order } from './../order';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-form',
  moduleId: module.id,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderForm implements OnInit {

  @Input() model: Order;
  @Output() formSubmitted: EventEmitter<Order> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.formSubmitted.emit(this.model);
  }

}
