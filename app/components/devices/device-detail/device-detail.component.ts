import { Device } from './../device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-detail',
  moduleId: module.id,
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  model = new Device(1, "Deneme", "Solunum", "aasdasdww55");

  constructor() { }

  ngOnInit() {
  }

}
