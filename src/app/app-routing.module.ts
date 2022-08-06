import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { MapComponent } from './components/map/map.component';
import { MyParticipationsComponent } from './components/my-participations/my-participations.component';
import { MyeventsComponent } from './components/myevents/myevents.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {path:"",redirectTo:"index",pathMatch:"full"},
  {path:"index",component:IndexComponent},
  {path:"login",component:UserLoginComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:UserRegisterComponent},
  {path:"addEvent",component:AddEventComponent},
  {path:"myEvents",component:MyeventsComponent},
  {path:"map/:lat/:long",component:MapComponent},
  {path:"allEvents",component:AllEventsComponent},
  {path:"profil",component:ProfilComponent},
  {path:"myparticipations",component:MyParticipationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
