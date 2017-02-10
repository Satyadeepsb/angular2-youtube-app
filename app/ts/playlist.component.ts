/**
 * Created by SARAL TECH on 2/10/2017.
 */

import { Component, OnInit } from '@angular/core';
import {Service} from "./service";
import {Video} from "./video";
import {YoutubeService} from "./youtube.service";

@Component({
    selector: 'playlist',
    templateUrl: 'playlist.component.html',
    providers : [Service, YoutubeService],

})
export class PlaylistComponent {
  showVideo: boolean = false;
  url : string = 'https://www.youtube.com/embed/fXHyqSIIF9Q';
  videos : any[];
  v  : Video;
  selectedVId : string;


  constructor(private service : Service,private youtube : YoutubeService){
    this.videos = this.service.demoVideos;
    this.v = new Video(undefined,"","","");
  }


  onSelect(vid:Video){
    this.showVideo = true;
    this.v = vid;
    console.log("---");
    console.log(this.v);

  }

  toggleVideo(){
    console.log(this.showVideo);
    (this.showVideo == true) ? this.showVideo = false : this.showVideo = true;
  }

  addVideo(){
    this.service.demoVideos.push(this.v);
  }


}
