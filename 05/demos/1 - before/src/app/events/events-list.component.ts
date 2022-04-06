import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

declare let toastr
@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit{
  events:any[]
  constructor(private eventServive:EventService, private toastrService:ToastrService){
    
  }
  ngOnInit(): void {
    this.events=this.eventServive.getEvents();
  }

 handleThumbnailClick(eventName){
   this.toastrService.success(eventName, );
}
}