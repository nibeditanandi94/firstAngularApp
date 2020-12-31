import { AfterViewInit, Component,Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('f') loginForm:NgForm;
  loginData={
  username:'',
  password:'',
  email:''
  }
  submit=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backbtn(){
 this.router.navigate(['/home']);
  }

  // public onSubmit(form:NgForm){
  //  console.log(form); 
  // }

  onSubmit(){
 console.log(this.loginForm);
 this.submit=true;
 this.loginData.username=this.loginForm.value.username;
 this.loginData.password=this.loginForm.value.password;
 this.loginData.email=this.loginForm.value.email;

 this.loginForm.reset();

  }
  setuserName(){
    const suggestUsername='SuperUser';
    this.loginForm.form.patchValue({
      username:suggestUsername
    });
  }
  
}
