import { Component,EventEmitter,Output,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css']
})
export class ThumbsComponent {
@Input() rating: number;
thumbsWidth:number;
@Output() ratingClicked: EventEmitter<string>
= new EventEmitter<string>();
     
  

ngOnChanges(): void {
  console.log(this.rating);
  this.thumbsWidth = this.rating * 86 / 5;
}
onClick()
{
this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
}
}
