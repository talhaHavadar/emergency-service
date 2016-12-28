import { Device } from './../device';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceService } from './../../../services/device.services';


@Component({
  selector: 'app-device-detail',
  moduleId: module.id,
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
  providers:[DeviceService]
})
export class DeviceDetailComponent implements OnInit {


    private id: number;
    model: Device = new Device(0, "","","");
    private sub: any;

    constructor(private router: Router, private route: ActivatedRoute, private deviceService: DeviceService) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.deviceService.getDevice(this.id).then((device: Device) => {
          this.model = device;
        })
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    edit() {
      this.router.navigate(['/device/edit', this.model.id]);
    }

    delete() {
      this.deviceService.deleteDevice(this.model.id).then((data) => {
        if(data.success) {
          alert("delete order implement with backend");
        }
      });
    }
}
