import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { medicineService } from '../medicine.service';
import { BrowserModule } from '@angular/platform-browser';
import { HomeChildComponent } from './home/home-child.component';


@NgModule({
  declarations: [HomeComponent,HomeChildComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule
  ],exports:[HomeComponent,HomeChildComponent],
  providers:[medicineService]
})
export class HomeModule { }
