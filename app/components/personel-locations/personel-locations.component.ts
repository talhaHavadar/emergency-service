import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-personel-locations',
  moduleId: module.id,
  templateUrl: './personel-locations.component.html',
  styleUrls: ['./personel-locations.component.css']
})
export class PersonelLocationsComponent implements OnInit, AfterViewInit {

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