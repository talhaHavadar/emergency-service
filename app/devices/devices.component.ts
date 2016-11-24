import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $:JQueryStatic;

@Component({
  selector: 'app-devices',
  moduleId: module.id,
  templateUrl: 'devices.component.html',
  styleUrls: ['devices.component.css']
})
export class DevicesComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    var ROUTER = this.router;
    $(document).ready(function() {
        $('#dataTables-devices').DataTable({
            responsive: true
        });
        $('#dataTables-devices').on('click', 'tr', function() {
          ROUTER.navigate(['/devices/1']);
        });
    });
      
  }

  navigateAddDevice() {
    this.router.navigate(['/devices/new']);
  }

}