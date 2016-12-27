import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: JQueryStatic;

@Component({
  selector: 'app-orders',
  moduleId: module.id,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var ROUTER = this.router;
    $(document).ready(function() {
      $('#dataTables').DataTable({
        responsive: true
      });
      $('#dataTables').on('click', 'tr', function() {
        ROUTER.navigate(['/orders/1']);
      });
    });
  }

  navigateAddOrder() {
    this.router.navigate(['/orders/new']);
  }

}
