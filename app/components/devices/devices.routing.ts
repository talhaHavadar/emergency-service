import { DeviceNewComponent } from './device-new/device-new.component';
import { DeviceCenterComponent } from './device-center.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesComponent } from './devices.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'devices',
    component: DeviceCenterComponent,
    children: [
      {
        path: 'new',
        component: DeviceNewComponent
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
