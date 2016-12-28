import { DrugConsumablesComponent } from './drug-consumables.component';
import { DrugConsumablesCenterComponent } from './drug-consumable-center.component';
import { DrugConsumableForm } from './drug-consumable-form/drug-consumable-form.component';
import { DrugConsumableNewComponent } from './drug-consumable-new/drug-consumable-new.component';
import { DrugConsumableDetailComponent } from './drug-consumable-detail/drug-consumable-detail.component';
import{ Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'drug-consumables',
    component: DrugConsumablesCenterComponent,
    children:[
      {
        path: 'new',
        component: DrugConsumableNewComponent
      },
      {
        path:':id',
        component: DrugConsumableDetailComponent
      },
      {
        path:'',
        component: DrugConsumablesComponent
      }
    ]

  }
]
export const DrugConsumableRoutes = RouterModule.forChild(routes);
