import { Router } from '@angular/router';
import { ClocationsService } from './../../../services/clocations.service';
import { Clocation } from './../clocation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocations-new',
  moduleId: module.id,
  templateUrl: './clocations-new.component.html',
  styleUrls: ['./clocations-new.component.css'],
  providers: [ClocationsService]
})
export class ClocationsNewComponent implements OnInit {

  cloc: Clocation = new Clocation(0, "", "", "", 0);

  constructor(private clocService: ClocationsService, private router: Router) { }

  ngOnInit() {
  }

  newCloc(cloc: Clocation) {
      this.clocService.createClocation(cloc).then((data) => {
        if(data.success) {
          alert("implement with backend");
          this.router.navigate(['const-locations']);
        }
      });
    }
}