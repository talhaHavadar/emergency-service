import { Router } from '@angular/router';
import { OrderService } from './../../../services/order.service';
import { Order } from './../order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-new',
  moduleId: module.id,
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css'],
  providers: [OrderService]
})
export class OrderNewComponent implements OnInit {

  order: Order = new Order(0, { name: "" }, { name: "" }, 0, "");

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
  }

  newOrder(order: Order) {
    this.orderService.createOrder(order).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['orders']);
      }
    });
  }

}
