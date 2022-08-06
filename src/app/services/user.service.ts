import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlServerApi=environment.urlServerApi;
  constructor(private http:HttpClient) { }

  public  getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.urlServerApi}/user/getUser/${id}`);
  }

  public  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.urlServerApi}/user/update`,user);
  }
  
}
