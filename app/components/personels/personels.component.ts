import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $:JQueryStatic;
@Component({
  selector: 'app-personels',
  moduleId: module.id,
  templateUrl: './personels.component.html',
  styleUrls: ['./personels.component.css']
})
export class PersonelsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var ROUTER = this.router;
    $(document).ready(function() {
        var table = $('#dataTables').DataTable({
            responsive: true
        });
        $('#dataTables').on('click', 'tr', function() {
          ROUTER.navigate(['/personels/1']);
        });
    });
  }

  navigateAddPersonel() {
    this.router.navigate(['/personels/new']);
  }

}
