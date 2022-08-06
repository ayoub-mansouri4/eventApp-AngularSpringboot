import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  title = 'locationApp';
  public lat!:number;
  public long!:number;

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.lat=Number(this.activatedRoute.snapshot.paramMap.get("lat"))
    this.long=Number(this.activatedRoute.snapshot.paramMap.get("long"))
    //alert(this.lat+" "+this.long)
    if(!navigator.geolocation){
      alert('location is not supported')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      this.maps(this.lat,this.long)
    })
  }

 


  maps(lat:number,long:number):void{
      //alert(lat+" "+long)
      let mymap = L.map('map').setView([lat,long], 13);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXlvdWIyMDAwIiwiYSI6ImNrem1zNnIxZzJzcmIybm9jbXVsY2dqeTMifQ.wn-St84ZYYRxV6AxQalyLA',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);
      let marker = L.marker([lat,long]).addTo(mymap);       
        // let locations:{ lat: number, long: number }[]=[{'lat':32.886023,'long':-6.9208655},{'lat':32.850150,'long':-6.577519}]
        // for(let l of locations){
        //       L.marker([l.lat,l.long]).addTo(mymap)
        // }
      // marker.bindPopup('<b>Hi</b>').openPopup();
      // let popup = L.popup()
      //   .setLatLng([position.coords.latitude,position.coords.longitude])
      //   .setContent('')
      //   .openOn(mymap);
  }

}
