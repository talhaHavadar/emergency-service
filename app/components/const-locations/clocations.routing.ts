import { ConstLocationsComponent } from './const-locations.component';
import { ClocationsDetailComponent } from './clocations-detail/clocations-detail.component';
import { ClocationsEditComponent } from './clocations-edit/clocations-edit.component';
import { ClocationsNewComponent } from './clocations-new/clocations-new.component';
import { ConstLocationsCenterComponent } from './const-locations-center.component';

import{ Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'const-locations',
    component: ConstLocationsCenterComponent,
    children:[
      {
        path: 'new',
        component: ClocationsNewComponent
      },
      {
        path:'edit/:id',
        component: ClocationsEditComponent
      },
      {
        path:':id',
        component: ClocationsDetailComponent
      },
      {
        path:'',
        component: ConstLocationsComponent
      }
    ]

  }
]
export const ClocationsRoutes = RouterModule.forChild(routes);
