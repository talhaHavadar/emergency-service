import { PersonelLocationsComponent } from './components/personel-locations/personel-locations.component';
import { UnauthorizedExitsComponent } from './components/unauthorized-exits/unauthorized-exits.component';
import { TagsComponent } from './components/tags/tags.component';
import { PersonelsComponent } from './components/personels/personels.component';
import { PassesComponent } from './components/passes/passes.component';
import { PacketsComponent } from './components/packets/packets.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ConstLocationsComponent } from './components/const-locations/const-locations.component';
import { DrugConsumablesComponent } from './components/drug-consumables/drug-consumables.component';
import { DistributionsComponent } from './components/distributions/distributions.component';
import { DiscoversComponent } from './components/discovers/discovers.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AssetsComponent } from './components/assets/assets.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
    path: 'packets',
    component: PacketsComponent
  },
  {
    path: 'passes',
    component: PassesComponent
  },
  {
    path: 'unauthorized-exits',
    component: UnauthorizedExitsComponent
  },
  {
    path: 'personel-locations',
    component: PersonelLocationsComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
