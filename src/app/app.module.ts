import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { LoginComponent } from './login/login/login.component';
// import { RegisterComponent } from './register/register/register.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    // LoginModule,
    // RegisterModule,
    AppRoutingModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }