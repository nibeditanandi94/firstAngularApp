import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //  loginLoaded:Boolean=false;
  public hide = true;


  constructor() { }

  ngOnInit(): void {
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
