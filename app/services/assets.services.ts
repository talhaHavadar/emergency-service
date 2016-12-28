import { Asset } from './../components/assets/asset';
import { ASSETS } from './dummies/assets';
import { ASSET } from './dummies/asset';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AssetService {
  constructor() { }

  createAsset(asset: Asset) {
    return Promise.resolve({
      success: true
    });
  }

  getAssets(): Promise<Asset[]> {
    return Promise.resolve(ASSETS);
  }

  getAsset(assetId: number): Promise<Asset> {
    return Promise.resolve(ASSET);
  }

  updateAsset(updateAsset: Asset) {
    return Promise.resolve({
      success: true
    })
  }

  deleteAsset(assetId: number) {
    return Promise.resolve({
      success: true
    });
  }

}
