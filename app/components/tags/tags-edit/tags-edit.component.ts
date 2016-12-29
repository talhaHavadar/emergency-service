import { TagService } from './../../../services/tags.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tags } from './../tags';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-edit',
  moduleId: module.id,
  templateUrl: './tags-edit.component.html',
  styleUrls: ['./tags-edit.component.css'],
  providers: [TagService]
})
export class TagEditComponent implements OnInit {
  id: number;
  tags: Tags = new Tags(0, "","");

  constructor(private router: Router, private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.tagService.getTag(this.id).then((tags: Tags) => {
        this.tags = Tags;
      })
    });
  }

  editOrder(tags: Tags) {
    this.tagService.updateTag(tags).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['tags', this.id]);
      }
    })
  }

}
