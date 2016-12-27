import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $:JQueryStatic;

@Component({
  selector: 'app-const-locations',
  moduleId: module.id,
  templateUrl: './const-locations.component.html',
  styleUrls: ['./const-locations.component.css']
})
export class ConstLocationsComponent implements OnInit, AfterViewInit {

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