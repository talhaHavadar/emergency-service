import { PersonelLocationsComponent } from './personel-locations/personel-locations.component';
import { AdminsComponent } from './admins/admins.component';
import { UnauthorizedExitsComponent } from './unauthorized-exits/unauthorized-exits.component';
import { TagsComponent } from './tags/tags.component';
import { PersonelsComponent } from './personels/personels.component';
import { PassesComponent } from './passes/passes.component';
import { PacketsComponent } from './packets/packets.component';
import { OrdersComponent } from './orders/orders.component';
import { ConstLocationsComponent } from './const-locations/const-locations.component';
import { DrugConsumablesComponent } from './drug-consumables/drug-consumables.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { DiscoversComponent } from './discovers/discovers.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AssetsComponent } from './assets/assets.component';
import { DevicesComponent } from './devices/devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'assets',
    component: AssetsComponent
  }, 
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'discovers',
    component: DiscoversComponent
  },
  {
    path: 'distributions',
    component: DistributionsComponent
  }, 
  {
    path: 'drug-consumables',
    component: DrugConsumablesComponent
  },
  {
    path: 'const-locations',
    component: ConstLocationsComponent
  }, 
  {
    path: 'orders',
    component: OrdersComponent
  }, 
  {
    path: 'packets',
    component: PacketsComponent
  },
  {
    path: 'passes',
    component: PassesComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'unauthorized-exits',
    component: UnauthorizedExitsComponent
  },
  {
    path: 'admins',
    component: AdminsComponent
  },
  {
    path: 'personel-locations',
    component: PersonelLocationsComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
