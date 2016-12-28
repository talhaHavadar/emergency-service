import { PersonelService } from './../../../services/personel.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Personel } from './../personel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-edit',
  moduleId: module.id,
  templateUrl: './personel-edit.component.html',
  styleUrls: ['./personel-edit.component.css'],
  providers: [PersonelService]
})
export class PersonelEditComponent implements OnInit {
  id: number;
  personel: Personel = new Personel(0," "," "," "," "," "," ");

  constructor(private router: Router, private route: ActivatedRoute, private personelService: PersonelService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.personelService.getPersonel(this.id).then((personel: Personel ) => {
        this.personel = personel;
      })
    });
  }

  editOrder(personel: Personel) {
    this.personelService.updatePersonel(personel).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['personels', this.id]);
      }
    })
  }

}
