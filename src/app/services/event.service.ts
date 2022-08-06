import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../objects/event';
import { EventDetails } from '../objects/eventDetails';
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private urlServerApi=environment.urlServerApi;
  

  constructor(private http:HttpClient) { }
  

  
  public saveEvent(eventDetails:EventDetails):Observable<EventDetails>{
    return this.http.post<EventDetails>(`${this.urlServerApi}/event/save`,eventDetails);
  }

  public getEventsOfUser(user:User):Observable<EventDetails[]>{
    return this.http.post<EventDetails[]>(`${this.urlServerApi}/event/myevents`,user)
  }
  public getAllEvents(id:number):Observable<EventDetails[]>{
    return this.http.get<EventDetails[]>(`${this.urlServerApi}/event/allEvents/${id}`)
  }

  public deleteEvent(id:number):Observable<void>{
     return this.http.delete<void>(`${this.urlServerApi}/event/deleteEvent/${id}`)
  }

  public participateInEvent(id_user:number,id_event:number):Observable<void>{
    return this.http.post<void>(`${this.urlServerApi}/event/participate`,{id_user:id_user,id_event:id_event})
 }
 public getEventsBySport(id:number,sport:string):Observable<EventDetails[]>{
  return this.http.get<EventDetails[]>(`${this.urlServerApi}/event/allEvents/${id}/${sport}`)
 }
 public  getEventsP(id:number):Observable<EventDetails[]>{
  return this.http.get<EventDetails[]>(`${this.urlServerApi}/event/getEventsP/${id}`)
 }
 //

  
}
