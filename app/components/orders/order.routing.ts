import { OrdersComponent } from './orders.component';
import { OrderCenterComponent } from './order-center.component';
import { OrderForm } from './order-form/order-form.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'orders',
  component: OrderCenterComponent,
  children: [{
    path: 'new',
    component: OrderNewComponent
  }, {
    path: ':id',
    component: OrderDetailComponent
  }, {
    path: '',
    component: OrdersComponent
  }]

}]
export const OrderRoutes = RouterModule.forChild(routes);
