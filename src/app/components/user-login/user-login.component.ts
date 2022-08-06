import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../objects/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
   user:User=new User();
   id!:string;
   

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("email")!=undefined)
    this.router.navigate(['/home']);
  }

 

  login(){
   let resp = this.loginService.login(this.user);
   resp.subscribe(
     (resp:User)=>{
       if(resp!=null){
        sessionStorage.setItem('email',resp.email);
        sessionStorage.setItem('password',resp.password);
        sessionStorage.setItem('firstName',resp.firstName);
         sessionStorage.setItem('lastName',resp.lastName);
        this.id=resp.id.toString();
        sessionStorage.setItem('id',this.id);
        this.router.navigate(["/home"]);
       }
     },
     (error:HttpErrorResponse)=>{
       alert(error);
     }
   );
  }

}
