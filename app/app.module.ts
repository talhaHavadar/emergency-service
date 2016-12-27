
import { PersonelsCenterComponent } from './components/personels/personals-center.component';
import { PersonelsRoutes } from './components/personels/personels.routing';
import { DevicesRoutes } from './components/devices/devices.routing';
import { AssetsRoutes } from './components/assets/assets.routing';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DevicesComponent } from './components/devices/devices.component';
import { AssetsComponent } from './components/assets/assets.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DiscoversComponent } from './components/discovers/discovers.component';
import { DistributionsComponent } from './components/distributions/distributions.component';
import { DrugConsumablesComponent } from './components/drug-consumables/drug-consumables.component';
import { ConstLocationsComponent } from './components/const-locations/const-locations.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PacketsComponent } from './components/packets/packets.component';
import { PassesComponent } from './components/passes/passes.component';
import { PersonelsComponent } from './components/personels/personels.component';
import { UnauthorizedExitsComponent } from './components/unauthorized-exits/unauthorized-exits.component';
import { TagsComponent } from './components/tags/tags.component';
import { AdminsComponent } from './components/admins/admins.component';
import { PersonelLocationsComponent } from './components/personel-locations/personel-locations.component';
import { PersonelDetailComponent } from './components/personels/personel-detail/personel-detail.component';
import { PersonelNewComponent } from './components/personels/personel-new/personel-new.component';
import { PersonelFormComponent } from './components/personels/personel-form/personel-form.component';
import { DeviceDetailComponent } from './components/devices/device-detail/device-detail.component';
import { DeviceNewComponent } from './components/devices/device-new/device-new.component';
import { DeviceFormComponent } from './components/devices/device-form/device-form.component';
import { DeviceCenterComponent } from './components/devices/device-center.component';
import { AssetFormComponent } from './components/assets/assets-form/assets-form.component';
import { AssetNewComponent } from './components/assets/assets-new/assets-new.component';
import { AssetDetailComponent } from './components/assets/asset-detail/asset-detail.component';
import { DrugConsumableRoutes } from './components/drug-consumables/drug-consumable.routing';
import { AssetCenterComponent } from './components/assets/asset-center.component';
import { DrugConsumablesCenterComponent } from './components/drug-consumables/drug-consumable-center.component';
import { DrugConsumableForm } from './components/drug-consumables/drug-consumable-form/drug-consumable-form.component';
import { DrugConsumableNewComponent } from './components/drug-consumables/drug-consumable-new/drug-consumable-new.component';
import { DrugConsumableDetailComponent } from './components/drug-consumables/drug-consumable-detail/drug-consumable-detail.component';
import { OrderRoutes } from './components/orders/order.routing';
import { OrderCenterComponent } from './components/orders/order-center.component';
import { OrderForm } from './components/orders/order-form/order-form.component';
import { OrderNewComponent } from './components/orders/order-new/order-new.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    AppRoutes,
    PersonelsRoutes,
    DevicesRoutes,
    AssetsRoutes,
    DrugConsumableRoutes,
    OrderRoutes
],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DevicesComponent,
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
    DeviceDetailComponent,
    DeviceNewComponent,
    DeviceFormComponent,
    DeviceCenterComponent,
    AssetDetailComponent,
    AssetFormComponent,
    AssetCenterComponent,
    AssetNewComponent,
    DrugConsumablesCenterComponent,
    DrugConsumableForm,
    DrugConsumableNewComponent,
    DrugConsumableDetailComponent,
    OrderDetailComponent,
    OrderForm,
    OrderNewComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
