import { Component, OnInit } from '@angular/core';
import { PersonelService } from './../../../services/personel.services';
import { Personel } from './../personel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personel-new',
  moduleId: module.id,
  templateUrl: './personel-new.component.html',
  styleUrls: ['./personel-new.component.css'],
  providers:[PersonelService]
})
export class PersonelNewComponent implements OnInit {

  personel: Personel = new Personel(0,"","","","","","");

  constructor(private router: Router, private personelService: PersonelService) { }

  ngOnInit() {
  }

    newPersonel(personel: Personel) {
      this.personelService.createPersonel(personel).then((data) => {
        if(data.success) {
          alert("implement with backend");
          this.router.navigate(['personels']);
        }
      });
    }

}
