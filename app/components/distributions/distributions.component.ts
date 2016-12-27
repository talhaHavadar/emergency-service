import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $:JQueryStatic;

@Component({
  selector: 'app-distributions',
  moduleId: module.id,
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.css']
})
export class DistributionsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(document).ready(function() {
        $('#dataTables-distributions').DataTable({
            responsive: true
        });
    });
  } 

}