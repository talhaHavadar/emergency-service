import {DeviceService} from '../../services/device.services';
import { Device } from './device';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: JQueryStatic;

@Component({
  selector: 'app-devices',
  moduleId: module.id,
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers:[DeviceService]
})
export class DevicesComponent implements OnInit, AfterViewInit {

  private devices: Device[];

  constructor( private router: Router, private deviceService:DeviceService ) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    var ROUTER = this.router;
    this.deviceService.getDevices().then((devices)=>{
      this.devices = devices

      $(document).ready(function() {
        $('#dataTables').DataTable({
          responsive: true
        });
      });
      $('#dataTables').on('click', 'tr', function() {
        ROUTER.navigate(['/devices/1']);
      });
    });
  }

  navigateAddDevice() {
    this.router.navigate(['/devices/new']);
  }

}
