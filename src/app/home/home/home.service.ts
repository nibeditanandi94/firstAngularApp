import { Injectable } from "@angular/core";
import { EventEmitter } from "events";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class HomeService{
constructor(){}

public showActivated = new Subject<boolean>();
}