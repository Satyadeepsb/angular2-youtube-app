/**
 * Created by SARAL TECH on 2/10/2017.
 */

import {Component, Output, EventEmitter, Input} from '@angular/core';
import {YoutubeService} from "./youtube.service";
import {Video} from "./video";

@Component({
  selector: 'you-tube',
  template: `YOUTUBE

<div *ngIf="video">
  <h2>YOUTUBE PLAYER{{video.videoCode}}</h2>
</div>
        <div class="container">
      <section class="panel">
        <div class="panel-heading">Ng2 Youtube Player Component </div>
        <div class="panel-body">
          <youtube-player 
            [videoId]="video.videoCode" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)"
          >
          </youtube-player>
          {{video.title}}
        </div>
      </section>
      
      <div class="col-md-12">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" (click)="playVideo()">Play</button>
          <button type="button" class="btn btn-default" (click)="pauseVideo()">Pause</button>
        </div>
      </div>
      
      <div class="col-md-12">
        <section class="panel">
          <div class="panel-title">Player State</div>
          <div class="panel-body">
            <pre>{{ ytEvent }}</pre>
          </div>
        </section>
      </div>
    </div>
    `,
  providers : [YoutubeService]
})
export class YoutubePlayerComponent {
  @Input()
  video: Video;

  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;

  constructor() {
  console.log(this.video);
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
