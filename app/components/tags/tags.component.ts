import { TagService } from './../../services/tags.services';
import { Tags } from './tags';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $:JQueryStatic;

@Component({
  selector: 'app-tags',
  moduleId: module.id,
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [TagService]
})
export class TagsComponent implements OnInit, AfterViewInit {

    private tags: Tags[];

    constructor( private router: Router, private tagsService: TagService ) { }

    ngOnInit() {

    }
    ngAfterViewInit() {
      var ROUTER = this.router;
      this.tagsService.getTags().then((tags)=>{
        this.tags = tags

        $(document).ready(function() {
          $('#dataTables').DataTable({
            responsive: true
          });
        });
        $('#dataTables').on('click', 'tr', function() {
          ROUTER.navigate(['/tags/1']);
        });
      });
    }

    navigateAddTag() {
      this.router.navigate(['/tags/new']);
    }


}
