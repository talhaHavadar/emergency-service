import { DevicesRoutes } from './devices/devices.routing';
import { DevicesCenterComponent } from './devices/devices-center.component';
import { PersonelsCenterComponent } from './personels/personals-center.component';
import { PersonelsRoutes } from './personels/personels.routing';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DevicesComponent } from './devices/devices.component';
import { AssetsComponent } from './assets/assets.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DiscoversComponent } from './discovers/discovers.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { DrugConsumablesComponent } from './drug-consumables/drug-consumables.component';
import { ConstLocationsComponent } from './const-locations/const-locations.component';
import { OrdersComponent } from './orders/orders.component';
import { PacketsComponent } from './packets/packets.component';
import { PassesComponent } from './passes/passes.component';
import { PersonelsComponent } from './personels/personels.component';
import { TagsComponent } from './tags/tags.component';
import { UnauthorizedExitsComponent } from './unauthorized-exits/unauthorized-exits.component';
import { AdminsComponent } from './admins/admins.component';
import { PersonelLocationsComponent } from './personel-locations/personel-locations.component';
import { PersonelDetailComponent } from './personels/personel-detail/personel-detail.component';
import { PersonelNewComponent } from './personels/personel-new/personel-new.component';
import { PersonelFormComponent } from './personels/personel-form/personel-form.component';
import { DevicesNewComponent } from './devices/devices-new/devices-new.component';
import { DeviceFormComponent } from './devices/device-form/device-form.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    AppRoutes,
    PersonelsRoutes,
    DevicesRoutes
],
  declarations: [ AppComponent,
    DashboardComponent,
    NavbarComponent,
    DevicesComponent,
    DevicesCenterComponent,
    AssetsComponent,
    AlertsComponent,
    DiscoversComponent,
    DistributionsComponent,
    DrugConsumablesComponent,
    ConstLocationsComponent,
    OrdersComponent,
    PacketsComponent,
    PassesComponent,
    PersonelsComponent,
    PersonelsCenterComponent,
    TagsComponent,
    UnauthorizedExitsComponent,
    AdminsComponent,
    PersonelLocationsComponent,
    PersonelDetailComponent,
    PersonelNewComponent,
    PersonelFormComponent,
    DevicesNewComponent,
    DeviceFormComponent,
    DeviceDetailComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
