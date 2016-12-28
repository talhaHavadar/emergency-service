import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DistributionService {
  constructor(private http: Http) {
    console.log("Personel Service Initilaze");
  }
  httpService: string;

  getDistribution(id: number) {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  getDistributions() {
    return this.http.get(this.httpService)
      .map(res => res.json());
  }

  createDistribution(distribution: any) {
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      });
    });
  }

}
