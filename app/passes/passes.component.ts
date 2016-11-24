import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-passes',
  moduleId: module.id,
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
        $('#dataTables').DataTable({
            responsive: true
        });
    });
  }

}