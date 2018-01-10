import { Component } from '@angular/core';
import { EventListComponent } from './events/event-list.component';
import { EventService } from './events/event.service';
import 'rxjs/Rx';
import {Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  
  providers:[EventListComponent,EventService,WelcomeComponent]
  
})


export class AppComponent {
  title = 'Local Event';
}

