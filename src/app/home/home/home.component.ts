import { Component, OnInit } from '@angular/core';
import { medicineService } from 'src/app/medicine.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public med=[];

  constructor(private medicineser:medicineService,private homeser:HomeService) { }

  ngOnInit(): void {
    this.medicineser.getMedicine().subscribe((data) => {
    this.med=data;
    });
  }

  onShow(){
 this.homeser.showActivated.next(true);
  }

  public parentData:string="";
 
  sendData(){
    this.parentData="Sending data from parent to child";
  }
 childData:string="";
  GetChildData(Childvalue:string){
  this.childData=Childvalue;
  console.log(Childvalue)
  }
}
