import { Tags } from './../components/tags/tags';
import { TAG } from './dummies/device';
import { TAGS } from './dummies/devices';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {
  constructor() {
  }

    createTag(tag: Tags) {
      return Promise.resolve({
        success: true
      });
    }

    getTags(): Promise<Tags[]> {
      return Promise.resolve(TAGS);
    }

    getTag(tagId: number): Promise<Tags> {
      return Promise.resolve(TAG);
    }

    deleteTag(tagId: number) {
      return Promise.resolve({
        success: true
      });
    }

    updateTag(updateTag: Tags) {
      return Promise.resolve({
        success: true
      })
    }
}
