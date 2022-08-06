import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDetails } from 'src/app/objects/eventDetails';
import { User } from 'src/app/objects/user';
import { EventService } from 'src/app/services/event.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
  user:User=new User();
  eventsDetails!:EventDetails[];
  title = 'appBootstrap'; 
  closeResult: string = '';
  

  constructor(private eventService:EventService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user.id=Number(sessionStorage.getItem('id'));
    if(sessionStorage.getItem("email")==undefined)
    this.router.navigate(['/index']);
    else{
    this.getAllMyEvents();
    }
  }
  
  public getAllMyEvents(){
    this.eventService.getEventsOfUser(this.user).subscribe(
      (resp:EventDetails[])=>{
        this.eventsDetails =resp;
      },
      (error:HttpErrorResponse)=>alert(error)
    )
  }
  
  public map(lat:number,long:number){
    this.router.navigate([`map/${lat}/${long}`])
  }

  public deleteEvent(id:number):void{
    this.eventService.deleteEvent(id).subscribe(
      (resp:void)=>{
        window.location.reload();
      }
     ,(error:HttpErrorResponse)=>{
       alert(error)
     }
   );
  
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
