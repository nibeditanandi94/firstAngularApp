import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { medicine } from "./medicine";


@Injectable({providedIn:'root'})
export class medicineService{
    private _url:string="/assets/data/medicines.json";
    
    constructor(private http:HttpClient){}

    getMedicine() : Observable<medicine[]>{
//making get request from the service class to json
   return this.http.get<medicine[]>(this._url)

    }
    
   
}