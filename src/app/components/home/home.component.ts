import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("email")==undefined)
    this.router.navigate(['/index']);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/index']);
  }

 btnClick() {
         this.router.navigateByUrl('/login');
 };
btnClk(){    this.router.navigateByUrl('/register');
            };


btnCl(){
                     this.router.navigateByUrl('/home');
             };
  btnCli(){
                                 this.router.navigateByUrl('/product');
                         };
                        
}
