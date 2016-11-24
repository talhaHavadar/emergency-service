import { PersonelNewComponent } from './personel-new/personel-new.component';
import { PersonelsCenterComponent } from './personals-center.component';
import { PersonelDetailComponent } from './personel-detail/personel-detail.component';
import { PersonelsComponent } from './personels.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'personels',
    component: PersonelsCenterComponent,
    children: [
      {
        path: 'new',
        component: PersonelNewComponent
      },
      {
        path:':id',
        component: PersonelDetailComponent
      },
      {
        path:'',
        component: PersonelsComponent
      }
    ]
  },
];

export const PersonelsRoutes = RouterModule.forChild(routes);
