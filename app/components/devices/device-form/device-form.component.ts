import { Device } from './../device';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-form',
  moduleId: module.id,
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  @Input() model: Device;
  @Output() formSubmitted: EventEmitter<Device> = new EventEmitter();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.formSubmitted.emit(this.model);
  }
}
