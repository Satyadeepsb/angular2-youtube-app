import { Component } from '@angular/core';
import {Config} from "./config.service";
import {PlaylistComponent} from "./playlist.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  mainHeading = Config.MAIN_HEADING;


}
