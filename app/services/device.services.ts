import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonelService{
  constructor(private http: Http) {
    console.log("Personel Service Initilaze");
  }
  httpService:string;
  
}
