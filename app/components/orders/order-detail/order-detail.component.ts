import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService } from './../../../services/order.service';
import { Order } from './../order';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  moduleId: module.id,
  templateUrl: './order-detail.component.html',
  providers: [OrderService]
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  private id: number;
  model: Order = new Order(0, { name: "" }, { name: "" }, 0, "");
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.orderService.getOrder(this.id).then((order: Order) => {
        this.model = order;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/orders/edit', this.model.id]);
  }

  delete() {
    this.orderService.deleteOrder(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
      }
    });
  }

}
