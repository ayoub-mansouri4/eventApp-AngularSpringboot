import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventDetails } from 'src/app/objects/eventDetails';
import { User } from 'src/app/objects/user';
import { EventService } from 'src/app/services/event.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  tab:number[]=new Array();
  eventsDetails!:EventDetails[];
  title = 'appBootstrap'; 
  closeResult: string = '';
  id_user!:number;
  sport!:string;
  
  

  constructor(private eventService:EventService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id_user=Number(sessionStorage.getItem('id'))
    if(sessionStorage.getItem("email")==undefined)
    this.router.navigate(['/index']);
    else{
    this.getAllMyEvents();
    }
  }
  
  public getAllMyEvents(){
    this.eventService.getAllEvents(Number(sessionStorage.getItem('id'))).subscribe(
      (resp:EventDetails[])=>{
        this.eventsDetails =resp;
      },
      (error:HttpErrorResponse)=>alert(error)
    )
  }

  public participateInEvent(id_event:number){
    this.eventService.participateInEvent(this.id_user,id_event).subscribe(
      (resp:void)=>{
        window.location.reload();
      }
     ,(error:HttpErrorResponse)=>{
       alert(error)
     }
   );
  }
  
  public map(lat:number,long:number){
    this.router.navigate([`map/${lat}/${long}`])
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
  

  public getEventsBySport(){
    this.eventService.getEventsBySport(Number(sessionStorage.getItem('id')),this.sport).subscribe(
      (resp:EventDetails[])=>{
        this.eventsDetails =resp;
        this.router.navigate(['path/to'])
        .then(() => {
          window.location.reload();
        });
      },
      (error:HttpErrorResponse)=>alert(error)
    )
  }
  


}
