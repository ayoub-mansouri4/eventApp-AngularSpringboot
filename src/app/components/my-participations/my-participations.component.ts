import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventDetails } from 'src/app/objects/eventDetails';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-my-participations',
  templateUrl: './my-participations.component.html',
  styleUrls: ['./my-participations.component.css']
})
export class MyParticipationsComponent implements OnInit {
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
    this.eventService.getEventsP(Number(sessionStorage.getItem('id'))).subscribe(
      (resp:EventDetails[])=>{
        this.eventsDetails =resp;
      },
      (error:HttpErrorResponse)=>alert(error)
    )
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
  

 
  

}
