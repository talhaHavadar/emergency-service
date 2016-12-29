import { Admin } from './../admin';
import { AdminsService } from './../../../services/admins.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins-edit',
  moduleId: module.id,
  templateUrl: './admins-edit.component.html',
  styleUrls: ['./admins-edit.component.css'],
  providers: [AdminsService]
})
export class AdminsEditComponent implements OnInit {

  id: number;
  admin: Admin = new Admin(0, "", "");

  constructor(private router: Router, private route: ActivatedRoute, private adminService: AdminsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.adminService.getAdmin(this.id).then((admin: Admin) => {
        this.admin = admin;
      })
    });
  }

  editAdmin(admin: Admin) {
    this.adminService.updateAdmin(admin).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['admins', this.id]);
      }
    })
  }

}