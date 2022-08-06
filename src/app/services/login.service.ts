import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../objects/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlServerApi=environment.urlServerApi;

  constructor(private http:HttpClient,private router:Router) { }
  

  
  public login(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlServerApi}/auth/login`,user);
  }

  public register(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlServerApi}/auth/register`,user);
  }
  ssn?:any;
 selecttio(){
 return this.ssn=sessionStorage.getItem('firstName');
 }
 selecttlast(){
  return this.ssn=sessionStorage.getItem('lastName');
  }
  selecttage(){
   return this.ssn=sessionStorage.getItem('age');
   }
   selecttemail(){
    return this.ssn=sessionStorage.getItem('email');
    }
    selecttpass(){
        return this.ssn=sessionStorage.getItem('password');
      }
      selecttid(){
              return this.ssn=sessionStorage.getItem('id');
            }

 logoutUser(){
 sessionStorage.removeItem('firstName');
 sessionStorage.removeItem('email');
  sessionStorage.removeItem('password');
   this.router.navigateByUrl('/login');

 }
  
 
}
