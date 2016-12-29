import { Personel } from './../components/personels/personel';
import { PERSONELS } from  './dummies/personels';
import { PERSONEL } from './dummies/personel';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonelService {
  constructor() { }

  createPersonel(personel: Personel) {
    return Promise.resolve({
      success: true
    });
  }

  getPersonels():Promise<Personel[]> {
    return Promise.resolve(PERSONELS);
  }

  getPersonel(personelId: number):Promise<Personel> {
    return Promise.resolve(PERSONEL);
  }

  updatePersonel(updatePersonel: Personel) {
    return Promise.resolve({
      success: true
    })
  }

  deletePersonel(id: number) {
    return Promise.resolve({
      success: true
    })
  }

}

  // deletePersonel(1).then((data) => {
  //
  // }, (data) => {
  //
  // })

}
