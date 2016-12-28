import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService {
  constructor(private http: Http) {
    console.log("Personel Service Initilaze");
  }
  httpService: string;

  getDevice(id: number) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  getDevices() {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  getDeviceswithSerialNo(serialNo: string) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  getDeviceswithDeviceType(deviceType: string) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  deleteDevice(id: number) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

  updateDevice(device: any) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

  createDevice(device: any) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

}
