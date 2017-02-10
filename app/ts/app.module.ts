import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PlaylistComponent} from "./playlist.component";
import {Service} from "./service";
import {YoutubePlayerComponent} from "./youtube-player.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
