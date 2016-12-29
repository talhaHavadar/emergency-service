import { DrugConsumableService } from './../../services/drug-consumable.services';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Drug } from "./drug";
declare var $: JQueryStatic;

@Component({
  selector: 'app-drug-consumables',
  moduleId: module.id,
  templateUrl: './drug-consumables.component.html',
  styleUrls: ['./drug-consumables.component.css'],
  providers: [DrugConsumableService]
})
export class DrugConsumablesComponent implements OnInit, AfterViewInit {

  private drugs: Drug[];

  constructor(private router: Router, private drugService: DrugConsumableService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var ROUTER = this.router;

    this.drugService.getDrugConsumables().then((drugs) => {

      this.drugs = drugs;
        // Html kısmında orders ngfor ile dönülerek yazılıyor.
      $(document).ready(function () {
        $('#dataTables').DataTable({
          responsive: true
        });

        $('#dataTables').on('click', 'tr', function () {
          ROUTER.navigate(['/drug-consumables/1']);
        });
      });
    });
  }


  navigateAddDrugConsumable() {
    this.router.navigate(['/drug-consumables/new']);
  }

}
