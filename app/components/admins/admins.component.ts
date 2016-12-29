import { AdminsService } from './../../services/admins.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Admin } from "./admin";

declare var $:JQueryStatic;

@Component({
  selector: 'app-admins',
  moduleId: module.id,
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
  providers: [AdminsService]
})
export class AdminsComponent implements OnInit, AfterViewInit {

  private admins: Admin[];

  constructor(private router:Router, private adminService: AdminsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var ROUTER = this.router;

    this.adminService.getAdmins().then((admins) => {

      this.admins = admins;
        // Html kısmında orders ngfor ile dönülerek yazılıyor.
      $(document).ready(function () {
        $('#dataTables').DataTable({
          responsive: true
        });

        $('#dataTables').on('click', 'tr', function () {
          ROUTER.navigate(['/admins/1']);
        });
      });
    });
  }


  navigateAddAdmin() {
    this.router.navigate(['/admins/new']);
  }

}