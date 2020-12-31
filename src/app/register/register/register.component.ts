import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
// @ViewChild('firstName') firstNameRef:ElementRef;

secret="mother";
answer="";
genders=['male','female'];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backbtn(){
this.router.navigate(['/home'])
  }
// ngAfterViewInit(){
//   this.firstNameRef.nativeElement.focus();
//   console.log(this.firstNameRef);
// }

onRegister(register:NgForm){
console.log(register);
}

}
