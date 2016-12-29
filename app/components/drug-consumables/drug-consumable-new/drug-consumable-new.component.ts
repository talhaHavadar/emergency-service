import { DrugConsumableService } from './../../../services/drug-consumable.services';
import { Router } from '@angular/router';
import { Drug } from './../drug';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-consumable-new',
  moduleId: module.id,
  templateUrl: './drug-consumable-new.component.html',
  styleUrls: ['./drug-consumable-new.component.css'],
  providers: [DrugConsumableService]
})
export class DrugConsumableNewComponent implements OnInit {

  drug: Drug = new Drug(0, "", "", "", 0, "", "");

  constructor(private router: Router, private drugService: DrugConsumableService) { }

  ngOnInit() {
  }

  newDrug(drug: Drug) {
      this.drugService.createDrugConsumable(drug).then((data) => {
        if(data.success) {
          alert("implement with backend");
          this.router.navigate(['drug-consumables']);
        }
      });
    }

}
