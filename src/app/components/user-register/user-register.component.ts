import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../objects/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public user:User=new User();
  public ConfirmedPassword!:string;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("email")!=undefined)
    this.router.navigate(['/home']);
  }
  register(){
    let resp = this.loginService.register(this.user);
    resp.subscribe(
      (resp:User)=>{
        if(resp!=null){
          sessionStorage.setItem('email',resp.email);
          sessionStorage.setItem('password',resp.password);
          sessionStorage.setItem('firstName',resp.firstName);
          sessionStorage.setItem('lastName',resp.lastName);
          this.router.navigate(["/home"]);
        }
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    );
  }

}
