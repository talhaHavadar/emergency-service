import { Clocation } from './clocation';
import { Router } from '@angular/router';
import { ClocationsService } from './../../services/clocations.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $:JQueryStatic;

@Component({
  selector: 'app-const-locations',
  moduleId: module.id,
  templateUrl: './const-locations.component.html',
  styleUrls: ['./const-locations.component.css'],
  providers: [ClocationsService]
})
export class ConstLocationsComponent implements OnInit, AfterViewInit {

  clocs: Clocation[];

  constructor(private router: Router, private clocService: ClocationsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var ROUTER = this.router;

    this.clocService.getClocations().then((clocs) => {

      this.clocs = clocs;
        // Html kısmında orders ngfor ile dönülerek yazılıyor.
      $(document).ready(function () {
        $('#dataTables').DataTable({
          responsive: true
        });

        $('#dataTables').on('click', 'tr', function () {
          ROUTER.navigate(['/const-locations/1']);
        });
      });
    });
  }


  navigateAddAdmin() {
    this.router.navigate(['/const-locations/new']);
  }

}