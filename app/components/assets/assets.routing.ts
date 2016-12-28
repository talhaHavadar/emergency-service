import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetCenterComponent } from './asset-center.component';
import { AssetNewComponent } from './assets-new/assets-new.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetsComponent } from './assets.component';
import{ Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'assets',
    component:AssetCenterComponent,
    children:[
      {
        path: 'new',
        component: AssetNewComponent
      },{
        path:'edit/:id',
        component:AssetEditComponent
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
