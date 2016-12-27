import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-unauthorized-exits',
  moduleId: module.id,
  templateUrl: './unauthorized-exits.component.html',
  styleUrls: ['./unauthorized-exits.component.css']
})
export class UnauthorizedExitsComponent implements OnInit, AfterViewInit {

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