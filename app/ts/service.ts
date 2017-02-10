/**
 * Created by SARAL TECH on 2/10/2017.
 */

import { Injectable } from '@angular/core';
import {Video} from "./video";

@Injectable()
export class Service {

  demoVideos: Array<Video>;
  constructor() {

    this.demoVideos = [];

    this.demoVideos = [
      new Video(1, 'Angular 2 for Beginners ', 'fXHyqSIIF9Q','Tutorial 7 Nested Components'),
      new Video(2, 'MEAN Stack for Beginners ', 'X0hsThHeQKw','MEAN Basics')
    ]

  }

}
