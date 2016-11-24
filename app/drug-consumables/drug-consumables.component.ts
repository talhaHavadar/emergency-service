import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
  selector: 'app-drug-consumables',
  moduleId: module.id,
  templateUrl: './drug-consumables.component.html',
  styleUrls: ['./drug-consumables.component.css']
})
export class DrugConsumablesComponent implements OnInit, AfterViewInit {

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