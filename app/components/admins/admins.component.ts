import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-admins',
  moduleId: module.id,
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit, AfterViewInit {

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