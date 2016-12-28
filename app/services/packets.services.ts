import { Packet } from './../components/packets/packet';
import { PACKETS } from './dummies/packets';
import { PACKET} from './dummies/packet';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PacketService {
  constructor() {
  }

  createPacket(packet: Packet) {
    return Promise.resolve({
      success: true
    });
  }
  getPackets(): Promise<Packet[]> {
    return Promise.resolve(PACKETS);
  }

  getPacket(packetId: number) {
    return Promise.resolve(PACKET);
  }

  updatePacket(packet: Packet) {
    return Promise.resolve({
      success: true
    })
  }
  
  deletePacket(id: number) {
    return Promise.resolve({
      success: true
    })
  }

}
