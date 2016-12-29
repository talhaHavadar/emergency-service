import { AdminsComponent } from './admins.component';
import { AdminsDetailComponent } from './admins-detail/admins-detail.component';
import { AdminsEditComponent } from './admins-edit/admins-edit.component';
import { AdminsNewComponent } from './admins-new/admins-new.component';
import { AdminsCenterComponent } from './admins-center.component';

import{ Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'admins',
    component: AdminsCenterComponent,
    children:[
      {
        path: 'new',
        component: AdminsNewComponent
      },
      {
        path:'edit/:id',
        component: AdminsEditComponent
      },
      {
        path:':id',
        component: AdminsDetailComponent
      },
      {
        path:'',
        component: AdminsComponent
      }
    ]

  }
]
export const AdminsRoutes = RouterModule.forChild(routes);
