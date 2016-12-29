import { Router } from '@angular/router';
import { TagService } from './../../../services/tags.services';
import { Tags } from './../tags';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-new',
  moduleId: module.id,
  templateUrl: './tags-new.component.html',
  styleUrls: ['./tags-new.component.css'],
  providers:[TagService]
})
export class TagNewComponent implements OnInit {

  tags:Tags = new Tags(0," "," ");

  constructor(private router: Router, private tagService: TagService) { }

  ngOnInit() {
  }

  newTag(tags: Tags) {
    this.tagService.createTag(tags).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['tags']);
      }
    });
  }

}
