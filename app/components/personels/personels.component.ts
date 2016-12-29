import { PersonelService } from './../../services/personel.services';
import { Personel } from './personel';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $:JQueryStatic;

@Component({
  selector: 'app-personels',
  moduleId: module.id,
  templateUrl: './personels.component.html',
  styleUrls: ['./personels.component.css'],
  providers:[PersonelService]
})
export class PersonelsComponent implements OnInit, AfterViewInit {

  private personels: Personel[];


  constructor(private router: Router, private personelService:PersonelService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var ROUTER = this.router;
    this.personelService.getPersonels().then((personels)=>{
      this.personels = personels

      $(document).ready(function() {
          var table = $('#dataTables').DataTable({
              responsive: true
          });
          $('#dataTables').on('click', 'tr', function() {
            ROUTER.navigate(['/personels/1']);
          });
      });
    });
  }

  navigateAddPersonel() {
    this.router.navigate(['/personels/new']);
  }

}
