import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { LoginService } from './services/login.service';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { MyeventsComponent } from './components/myevents/myevents.component';
import { MapComponent } from './components/map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfilComponent } from './components/profil/profil.component';
import { IndexComponent } from './components/index/index.component';
import { MyParticipationsComponent } from './components/my-participations/my-participations.component';

 

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    UserRegisterComponent,
    AddEventComponent,
    MyeventsComponent,
    MapComponent,
    AllEventsComponent,
    NavBarComponent,
    ProfilComponent,
    IndexComponent,
    MyParticipationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //
    HttpClientModule,//
    NgbModule//
    
  ],
  providers: [LoginService],//
  bootstrap: [AppComponent]
})
export class AppModule { }
