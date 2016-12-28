import { Router } from '@angular/router';
import { DeviceService } from './../../../services/device.services';
import { Device } from './../device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-new',
  moduleId: module.id,
  templateUrl: './device-new.component.html',
  styleUrls: ['./device-new.component.css'],
  providers:[DeviceService]
})
export class DeviceNewComponent implements OnInit {

  device:Device = new Device(0," "," "," ");

  constructor(private router: Router, private deviceService: DeviceService) { }

  ngOnInit() {
  }

  newDevice(device: Device) {
    this.deviceService.createDevice(device).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['devices']);
      }
    });
  }

}
