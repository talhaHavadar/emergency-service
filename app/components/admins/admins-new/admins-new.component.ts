import { Router } from '@angular/router';
import { AdminsService } from './../../../services/admins.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins-new',
  moduleId: module.id,
  templateUrl: './admins-new.component.html',
  styleUrls: ['./admins-new.component.css'],
  providers: [AdminsService]
})
export class AdminsNewComponent implements OnInit {

  admin: Admin = new Admin(0, "", "");

  constructor(private adminService: AdminsService, private router: Router) { }

  ngOnInit() {
  }

  newAdmin(admin: Admin) {
      this.adminService.createAdmin(admin).then((data) => {
        if(data.success) {
          alert("implement with backend");
          this.router.navigate(['admins']);
        }
      });
    }

}