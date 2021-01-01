import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
genders=['male','female'];
loginReactiveForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginReactiveForm=new FormGroup({
      'userData': new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
      }),
  
   'gender':new FormControl('female'),
   'medicines': new FormArray([])


    });
  }
  backbtn(){
    this.router.navigate(['/home']);
     }

     onAddMedicine(){
       const formInput= new FormControl(null,Validators.required);
      (<FormArray>this.loginReactiveForm.get('medicines')).push(formInput)
     }

     getControls(){
       return (this.loginReactiveForm.get('medicines') as FormArray).controls
     }
     submit(){
       console.log(this.loginReactiveForm);
     }

}
