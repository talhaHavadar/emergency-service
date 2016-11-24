import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-devices',
  moduleId: module.id,
  templateUrl: 'devices.component.html',
  styleUrls: ['devices.component.css']
})
export class DevicesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables-devices').DataTable({
            responsive: true
        });
    });
      
  }

}