import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
        email!:any;
         

  constructor(private router:Router,public  loginServices:LoginService) {

   }
        btnClick() {
                this.router.navigateByUrl('/login');
        };
        btnClicki(){
                this.router.navigateByUrl('/register');
        };
        btnClickk(){
                this.router.navigateByUrl('/home');
                };
        btnClickik(){
                this.router.navigateByUrl('/myEvents');
        };
        btnClickikk(){
                this.router.navigateByUrl('/addEvent');
        };
        profil(){
                this.router.navigateByUrl('/profil');
        };

        ngOnInit(): void {
                this.email=sessionStorage.getItem('email');
        }
        verify():boolean{
                return this.email!=undefined;
        }

}
