import { TagEditComponent } from './tags-edit/tags-edit.component';
import { TagNewComponent } from './tags-new/tags-new.component';
import { TagsCenterComponent } from './tags-center.component';
import { TagsDetailComponent } from './tags-detail/tags-detail.component';
import { TagsComponent } from './tags.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tags',
    component: TagsCenterComponent,
    children: [
      {
        path: 'new',
        component: TagNewComponent
      },{
        path: 'edit/:id',
        component: TagEditComponent
      },{
        path:':id',
        component: TagsDetailComponent
      },
      {
        path:'',
        component: TagsComponent
      }
    ]
  },
];

export const TagsRoutes = RouterModule.forChild(routes);
