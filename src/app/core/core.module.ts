import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { ReactiveModule } from '../reactive/reactive.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home/home.component';


@NgModule({
  declarations: [CoreComponent, HeaderComponent,HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LoginModule,
    RegisterModule,
    ReactiveModule,
    ReactiveFormsModule
    
  ],
  exports:[CoreComponent]
})
export class CoreModule { }
