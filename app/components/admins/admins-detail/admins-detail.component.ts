import { AdminsService } from './../../../services/admins.service';
import { Admin } from './../admin';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins-detail',
  moduleId: module.id,
  templateUrl: './admins-detail.component.html',
  styleUrls: ['./admins-detail.component.css'],
  providers: [AdminsService]
})
export class AdminsDetailComponent implements OnInit {
  id: number;
  model: Admin = new Admin(0, "", "");
  private sub:any;

  constructor(private route: ActivatedRoute, private adminService: AdminsService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.adminService.getAdmin(this.id).then((drug: Admin) => {
        this.model = drug;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/admins/edit', this.model.id]);
  }

  delete() {
    this.adminService.deleteAdmin(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/admins']);
      }
    });
  }

}