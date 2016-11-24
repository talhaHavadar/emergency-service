import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-orders',
  moduleId: module.id,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables').DataTable({
            responsive: true
        });
    });
  }

}