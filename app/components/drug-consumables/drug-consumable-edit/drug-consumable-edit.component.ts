import { Router, ActivatedRoute, Params } from '@angular/router';
import { Drug } from './../drug';
import { DrugConsumableService } from './../../../services/drug-consumable.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-consumable-edit',
  moduleId: module.id,
  templateUrl: './drug-consumable-edit.component.html',
  styleUrls: ['./drug-consumable-edit.component.css'],
  providers: [DrugConsumableService]
})
export class DrugConsumableEditComponent implements OnInit {

  id:number;
  drug: Drug = new Drug(0, "", "", "", 0, "", "");


  constructor(private router: Router, private route: ActivatedRoute, private drugService: DrugConsumableService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.drugService.getDrugConsumable(this.id).then((drug: Drug) => {
        this.drug = drug;
      })
    });
  }

  editDrug(drug: Drug) {
    this.drugService.updateDrug(drug).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['drug-consumables', this.id]);
      }
    })
  }

}