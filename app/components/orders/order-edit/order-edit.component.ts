import { OrderService } from './../../../services/order.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from './../order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-edit',
  moduleId: module.id,
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
  providers: [OrderService]
})
export class OrderEditComponent implements OnInit {
  id: number;
  order: Order = new Order(0, { name: "" }, { name: "" }, 0, "");

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.orderService.getOrder(this.id).then((order: Order) => {
        this.order = order;
      })
    });
  }

  editOrder(order: Order) {
    this.orderService.updateOrder(order).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['orders', this.id]);
      }
    })
  }

}