import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Routes,Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
// import { EventFilterPipe } from './events/event-filter.pipe';
import { ThumbsComponent } from './thumbs/thumbs.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventDetailComponent } from './events/event-detail.component';



const routes: Routes =[
  {path: 'welcome',component: WelcomeComponent},
  {path:'events', component: EventListComponent},
  {path: 'events/event/:id', component: EventDetailComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    // EventFilterPipe,
    ThumbsComponent,
    WelcomeComponent,
    EventDetailComponent

  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes,{enableTracing: true})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
