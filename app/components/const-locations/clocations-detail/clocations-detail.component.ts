import { ClocationsService } from './../../../services/clocations.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Clocation } from './../clocation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocations-detail',
  moduleId: module.id,
  templateUrl: './clocations-detail.component.html',
  styleUrls: ['./clocations-detail.component.css'],
  providers: [ClocationsService]
})
export class ClocationsDetailComponent implements OnInit {
  
  id: number;
  model: Clocation = new Clocation(0, "", "", "", 0);
  private sub:any;

  constructor(private route: ActivatedRoute, private clocService: ClocationsService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.clocService.getClocation(this.id).then((drug: Clocation) => {
        this.model = drug;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/const-locations/edit', this.model.id]);
  }

  delete() {
    this.clocService.deleteClocation(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/const-locations']);
      }
    });
  }

}