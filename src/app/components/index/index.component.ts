import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users:any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("email")!=undefined)
    this.router.navigate(['/home']);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
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
