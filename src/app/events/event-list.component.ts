import {Component, OnInit} from '@angular/core';
import {IEvent} from './event';
// import {EventFilterPipe} from './event-filter.pipe';
import {ThumbsComponent} from '../thumbs/thumbs.component';
import { EventService } from './event.service';
import {Routes,RouterModule} from '@angular/router';

@Component({
 selector: 'app-events',
 templateUrl: './event-list.component.html',
 styleUrls:['./event-list.component.css'],
 // pipes: [EventFilterPipe],
 providers:[ThumbsComponent]
})


 export class EventListComponent implements OnInit{
  pageTitle="Event List!";
  imageWidth=50;
  imageMargin=2;
  showImage=false;
  searchCriteria:string;
  errorMessage:string;
events: IEvent[];

constructor(private eventService: EventService)
{
  

}

ngOnInit(): void{
  console.log('In OnInit');
  this.events=this.eventService.getEvents();

  console.log(this.eventService.getEvents());
}

onRatingClicked(message: string): void{
  this.pageTitle = 'Event List:'+message;
}

}
