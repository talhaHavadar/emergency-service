import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-discovers',
  moduleId: module.id,
  templateUrl: './discovers.component.html',
  styleUrls: ['./discovers.component.css']
})
export class DiscoversComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables-discovers').DataTable({
            responsive: true
        });
    });
  }

}