import { OrderService } from './../../services/order.service';
import { Order } from './order';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: JQueryStatic;

@Component({
  selector: 'app-orders',
  moduleId: module.id,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit, AfterViewInit {

  private orders: Order[];

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    var ROUTER = this.router;
    this.orderService.getOrders().then((orders) => {

      this.orders = orders
      // Html kısmında orders ngfor ile dönülerek yazılıyor.
      $(document).ready(function () {

        $('#dataTables').DataTable({
          responsive: true
        });
        $('#dataTables').on('click', 'tr', function () {
          ROUTER.navigate(['/orders/1']);
        });
      });
    });
  }

  navigateAddOrder() {
    this.router.navigate(['/orders/new']);
  }

}
