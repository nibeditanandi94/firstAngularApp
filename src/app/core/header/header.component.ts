import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import { HomeService } from 'src/app/home/home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
showParam:boolean=false;
  
  //  loginLoaded:Boolean=false;
  public hide = true;
private firstCustomObservale:Subscription;

  constructor(private homeser:HomeService) { }
  ngOnDestroy(): void {
    this.firstCustomObservale.unsubscribe();
  }

  ngOnInit(): void {

    this.homeser.showActivated.subscribe((data) => {
this.showParam=data;
    });
//creating custom observable
const customIntervalObservale=Observable.create((observer:Observer<Number>) => {
  let count=0;
setInterval(
  () => {
observer.next(count);
// if(count===9){
//   observer.complete();
// }
//error has been thrown, we should handle it as well.

if(count>8){
  observer.error("Error while generating next number");
}
if(count===9){
  observer.complete();
}
count++;
},1000)
});

//now it is outside of the subscribe function, if we want to modify data in the main method 
//we should call it at line 48
customIntervalObservale.pipe(map((data:number) => {
return "modified data" +(data+1);
}));

// this.firstCustomObservale=customIntervalObservale.pipe(map((data:number) => {
//   return "modified data" + (data+1);
//   })).subscribe((data:number) => {
//   console.log("Next Number" + data);
//   },
//   error => {
//   console.log(error);
//   },
//   () => {
//     console.log("completed");
//   })

this.firstCustomObservale=customIntervalObservale.subscribe((data:number) => {
console.log("Next Number" +data);
},
error => {
console.log(error);
},
() => {
  console.log("completed");
})

}
  // loadLogin(){
  //   this.loginLoaded= true;
  //     }
 
  loadLoginComponent(){
       this.hide= true;
    }

    loadRegister(){
      this.hide= true;
    }

    loadReactive(){
      this.hide= true;
    }
}
