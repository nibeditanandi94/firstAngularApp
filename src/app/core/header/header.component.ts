import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  //  loginLoaded:Boolean=false;
  public hide = true;
private firstCustomObservale:Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.firstCustomObservale.unsubscribe();
  }

  ngOnInit(): void {
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
this.firstCustomObservale=customIntervalObservale.subscribe((data:Number) => {
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
