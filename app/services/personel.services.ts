import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonelService {
  constructor(private http: Http) {
    console.log("Personel Service Initilaze");
  }
  httpService: string;

  getPersonel(id: number) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  getPersonels() {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  deletePersonel(id: number) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }
  updatePersonel(personel: any) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

  createPersonel(personel: any) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

  // deletePersonel(1).then((data) => {
  //
  // }, (data) => {
  //
  // })

}
