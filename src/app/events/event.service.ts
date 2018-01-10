import {Injectable} from '@angular/core';
import { IEvent } from './event';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService
{

    constructor(){}

   getEvents(): IEvent[]
   {
       console.log("get events");
       return [{
        "name": "Event 1",
        "code" : "Evt100",
        "description": "the first event",
        "date": "2016.01.01",
         "fee" : 10,
         "rating" : 5
      },
      {
        "name": "Event 2",
        "code" : "Evt200",
        "description": "the second event",
        "date": "2016.02.01",
         "fee" : 15,
         "rating" : 3
      },
      {
        "name": "Event 3",
        "code" : "Evt300",
        "description": "the third event",
        "date": "2016.01.03",
         "fee" : 20,
         "rating" : 4
      }];
   }
}