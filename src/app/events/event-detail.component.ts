import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
    
    templateUrl: './event-detail.component.html'
    
  })
  export class EventDetailComponent{

pageTitle : string = 'Event Detail';



constructor(private routeParams: ActivatedRoute,
 private router: Router)
{
    let id;
    this.routeParams.params.subscribe( params => this.pageTitle+= `: ${params.id}` );
}

onBack(): void{
    this.router.navigate(['events']);
}
  }