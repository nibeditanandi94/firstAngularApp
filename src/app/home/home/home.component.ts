import { Component, OnInit } from '@angular/core';
import { medicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public med=[];

  constructor(private medicineser:medicineService) { }

  ngOnInit(): void {
    this.medicineser.getMedicine().subscribe((data) => {
    this.med=data;
    });
  }

}
