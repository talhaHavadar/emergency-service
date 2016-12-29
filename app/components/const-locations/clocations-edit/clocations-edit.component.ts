import { ClocationsService } from './../../../services/clocations.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Clocation } from './../clocation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocations-edit',
  moduleId: module.id,
  templateUrl: './clocations-edit.component.html',
  styleUrls: ['./clocations-edit.component.css'],
  providers: [ClocationsService]
})
export class ClocationsEditComponent implements OnInit {

  id: number;
  cloc: Clocation = new Clocation(0, "", "", "", 0);

  constructor(private router: Router, private route: ActivatedRoute, private clocService: ClocationsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.clocService.getClocation(this.id).then((cloc: Clocation) => {
        this.cloc = cloc;
      })
    });
  }

  editCloc(cloc: Clocation) {
    this.clocService.updateClocation(cloc).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['const-locations', this.id]);
      }
    })
  }

}