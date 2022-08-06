import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDetails } from 'src/app/objects/eventDetails';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventDeatils:EventDetails=new EventDetails();
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit(): void {
    this.eventDeatils.eventOwner.id=Number(sessionStorage.getItem('id'));
    if(sessionStorage.getItem("email")==undefined)
    this.router.navigate(['/index']);
  
  }

  saveEvent(){
    this.eventService.saveEvent(this.eventDeatils).subscribe(
      (resp:EventDetails)=>{
        console.log(this.eventDeatils)
        this.router.navigate([`/myEvents`])
      },
      (error:HttpErrorResponse)=>{console.log(error)}
    );
  }

}
