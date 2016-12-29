import { DrugConsumableService } from './../../services/drug-consumable.services';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $: JQueryStatic;

@Component({
  selector: 'app-drug-consumables',
  moduleId: module.id,
  templateUrl: './drug-consumables.component.html',
  styleUrls: ['./drug-consumables.component.css']
})
export class DrugConsumablesComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private drugService: DrugConsumableService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var ROUTER = this.router;
    $(document).ready(function() {
      $('#dataTables').DataTable({
        responsive: true
      });

      $('#dataTables').on('click', 'tr', function() {
        ROUTER.navigate(['/drug_consumables/1']);
      });
    });
  }


  navigateAddDrugConsumable() {
    this.router.navigate(['/drug_consumable/new']);
  }

}
