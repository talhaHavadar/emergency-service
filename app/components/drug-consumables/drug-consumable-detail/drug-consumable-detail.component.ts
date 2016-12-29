import { Router, ActivatedRoute, Params } from '@angular/router';
import { DrugConsumableService } from './../../../services/drug-consumable.services';
import { Drug } from './../drug';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-consumable-detail',
  moduleId: module.id,
  templateUrl: './drug-consumable-detail.component.html',
  styleUrls: ['./drug-consumable-detail.component.css'],
  providers: [DrugConsumableService]
})
export class DrugConsumableDetailComponent implements OnInit {

  private id: number;
  private sub: any;

  model = new Drug(0, "", "", "", 0, "", "");

  constructor(private drugService: DrugConsumableService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.drugService.getDrugConsumable(this.id).then((drug: Drug) => {
        this.model = drug;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/drug-consumables/edit', this.model.id]);
  }

  delete() {
    this.drugService.deleteDrug(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/drug-consumables']);
      }
    });
  }

}
