import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-assets',
  moduleId: module.id,
  templateUrl: 'assets.component.html',
  styleUrls: ['assets.component.css']
})
export class AssetsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables-assets').DataTable({
            responsive: true
        });
    });
  }

}