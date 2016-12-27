import { AssetsComponent } from './assets.component';
import { AssetCenterComponent } from './asset-center.component';
import { AssetFormComponent } from './assets-form/assets-form.component';
import { AssetNewComponent } from './assets-new/assets-new.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import{ Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'assets',
    component:AssetsComponent,
    children:[
      {
        path: 'new',
        component: AssetNewComponent
      },
      {
        path:':id',
        component: AssetDetailComponent
      },
      {
        path:'',
        component: AssetsComponent
      }
    ]

  }
]
export const AssetsRoutes = RouterModule.forChild(routes);
