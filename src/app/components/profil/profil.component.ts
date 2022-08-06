import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/objects/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 public user:User=new User();
 id!:number;

  constructor(private router:Router,private userService:UserService,) { }

  ngOnInit(): void {
    this.getUser()

  }
  getUser(){
    this.userService.getUser(Number(sessionStorage.getItem('id'))).subscribe(
      (resp:User)=>{
        this.user=resp;
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }

  update(){
    this.userService.updateUser(this.user).subscribe(
      (resp:User)=>{
        this.user=resp;
        sessionStorage.setItem('email',resp.email);
        sessionStorage.setItem('password',resp.password);
        sessionStorage.setItem('firstName',resp.firstName);
        sessionStorage.setItem('lastName',resp.lastName);
        window.location.reload();
        
      },
      (error:HttpErrorResponse)=>{
        alert(error);
      }
    )
  }
eve(){
 this.router.navigateByUrl('/myEvents');                                                                  };
}





