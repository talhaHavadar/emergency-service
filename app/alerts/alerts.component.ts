import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-alerts',
  moduleId: module.id,
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables-alerts').DataTable({
            responsive: true
        });
    });
  }

}