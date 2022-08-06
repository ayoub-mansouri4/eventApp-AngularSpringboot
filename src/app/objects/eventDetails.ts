import { Event } from "./event";
import { Location } from "./location";
import { Participant } from "./participant";
import { Post } from "./post";
import { User } from "./user";

export class EventDetails{
    event:Event=new Event();
    post:Post=new Post();
    location:Location=new Location();
    eventOwner:User=new User();
    participants!:Participant[];
    participated!:boolean;
}