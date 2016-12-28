import { DeviceService } from './../../../services/device.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Device } from './../device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-edit',
  moduleId: module.id,
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css'],
  providers: [DeviceService]
})
export class DeviceEditComponent implements OnInit {
  id: number;
  device: Device = new Device(0," "," "," ");

  constructor(private router: Router, private route: ActivatedRoute, private deviceService: DeviceService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.deviceService.getDevice(this.id).then((device: Device) => {
        this.device = device;
      })
    });
  }

  editDevice(device: Device) {
    this.deviceService.updateDevice(device).then((data) => {
      if(data.success) {
        alert("implement with backend");
        this.router.navigate(['devices', this.id]);
      }
    })
  }
}
