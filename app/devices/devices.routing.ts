import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesComponent } from './devices.component';
import { DevicesNewComponent } from './devices-new/devices-new.component';
import { DevicesCenterComponent } from './devices-center.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'devices',
    component: DevicesCenterComponent,
    children: [
      {
        path: 'new',
        component: DevicesNewComponent
      },
      {
        path:':id',
        component: DeviceDetailComponent
      },
      {
        path:'',
        component: DevicesComponent
      }
    ]
  },
];

export const DevicesRoutes = RouterModule.forChild(routes);
