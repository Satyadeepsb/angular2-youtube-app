import {Component,Input} from 'angular2/core';
import {Video} from './video';
import {AppComponent} from  './app.component';
import {OnInit} from "angular2/src/core/linker/interfaces";

@Component({
        selector: 'playlist',
        templateUrl: 'app/ts/playlist.component.html',
        inputs : ['videos']

})

export class PlaylistComponent implements OnInit{

    showVideo: boolean = false;
    url : string = 'https://www.youtube.com/embed/fXHyqSIIF9Q';
    v : AppComponent;
    ngOnInit() {
        console.log(); // object here
    }

    onSelect(vid:Video){
        console.log(JSON.stringify(vid));
        this.showVideo = true;
        this.url += vid.videoCode;
        console.log(this.url);
    }

    toggleVideo(){
        console.log(this.showVideo);
        (this.showVideo == true) ? this.showVideo = false : this.showVideo = true;
    }

    addVideo(id: number,title : string, desc : string, code : string){

        console.log(this.v.videos);
        let myVideo = new Video(id,title,desc,code);

       /// videos.push(myVideo);
        console.log(myVideo);

    }
}