import { Device } from './../device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-detail',
  moduleId: module.id,
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  
  model = new Device(1, "Type", "Lovely Device", "1234653456432144")
  
  constructor() { }  

  ngOnInit() {
  }

}