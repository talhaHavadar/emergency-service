import { ActivatedRoute, Params, Router } from '@angular/router';
import { Personel } from './../personel';
import { PersonelService } from './../../../services/personel.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-detail',
  moduleId: module.id,
  templateUrl: './personel-detail.component.html',
  styleUrls: ['./personel-detail.component.css'],
  providers: [PersonelService]
})
export class PersonelDetailComponent implements OnInit {

  private id: number;
  model = new Personel(1, " ", " ", " ", " ", " ", " ");
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private personelService: PersonelService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.personelService.getPersonel(this.id).then((personel: Personel) => {
        this.model = personel;
      })
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/personels/edit', this.model.id]);
  }

  delete() {
    this.personelService.deletePersonel(this.model.id).then((data) => {
      if (data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/personels']);
      }
    });
  }

}
