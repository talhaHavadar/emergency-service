import { ActivatedRoute, Params, Router } from '@angular/router';
import { TagService } from '../../../services/tags.services';
import { Tags } from './../tags';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tag-detail',
  moduleId: module.id,
  templateUrl: './tags-detail.component.html',
  providers: [ TagService]
})
export class TagsDetailComponent implements OnInit, OnDestroy {
  private id: number;
  model: Tags = new Tags(0, "","");
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.tagService.getTag(this.id).then((tags: Tags) => {
        this.model = tags;
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit() {
    this.router.navigate(['/tags/edit', this.model.id]);
  }

  delete() {
    this.tagService.deleteTag(this.model.id).then((data) => {
      if(data.success) {
        alert("delete order implement with backend");
        this.router.navigate(['/tags']);
      }
    });
  }

}
