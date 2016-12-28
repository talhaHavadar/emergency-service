import { Device } from './../components/devices/device';
import { DEVICE } from './dummies/device';
import { DEVICES } from './dummies/devices';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService {
  constructor() {
  }

  createDevice(device: Device) {
    return Promise.resolve({
      success: true
    });
  }

  getDevices(): Promise<Device[]> {
    return Promise.resolve(DEVICES);
  }

  getDevice(deviceId: number): Promise<Device> {
    return Promise.resolve(DEVICE);
  }

  deleteDevice(deviceId: number) {
    return Promise.resolve({
      success: true
    });
  }

  updateDevice(updateDevice: Device) {
    return Promise.resolve({
      success: true
    })
  }

  /*getDeviceswithSerialNo(serialNo: string) {
    return Promise.resolve()
  }*/

  /*getDeviceswithDeviceType(deviceType: string) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }*/



}
