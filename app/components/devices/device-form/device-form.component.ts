import { Device } from './../device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-form',
  moduleId: module.id,
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  model = new Device(1, "deneme", "solunum cihazı", "125sdsdfd522" );

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
