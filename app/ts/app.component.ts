import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
     mainHeading = Config.MAIN_HEADING;
     public  videos: Array<Video>;

     constructor(){
         this.videos = [
             new Video(1, 'Angular 2 for Beginners ', 'fXHyqSIIF9Q','Tutorial 7 Nested Components'),
             new Video(2, 'MEAN Stack for Beginners ', 'tYkb2Qu4UmM','MEAN Basics')
         ]

     }

     getVideos(){
         return this.videos;
     }

}
