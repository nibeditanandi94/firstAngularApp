import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [HomeComponent,UserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],exports:[HomeComponent,UserComponent]
})
export class HomeModule { }
