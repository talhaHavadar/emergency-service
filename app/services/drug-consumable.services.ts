import { Drug } from './../components/drug-consumables/drug';
import { DRUGS } from './dummies/drugs';
import { DRUG } from './dummies/drug';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DrugConsumableService {
  constructor() {
  }

  createDrugConsumable(drug: Drug) {
    return Promise.resolve({
      success: true
    });
  }

  getDrugConsumables(): Promise<Drug[]> {
    return Promise.resolve(DRUGS);
  }

  getDrugConsumable(drugId: number): Promise<Drug> {
    return Promise.resolve(DRUG);
  }

  updateDrug(updateDrug: Drug) {
    return Promise.resolve({
      success:true
    })
  }

  deleteDrug(drugId: number) {
    return Promise.resolve({
      success:true
    });
  }


}
