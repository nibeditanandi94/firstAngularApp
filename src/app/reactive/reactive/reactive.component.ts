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
forbiddenUserNames=['abc','xyz'];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginReactiveForm=new FormGroup({
      'userData': new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenName.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email]),
      }),
  
   'gender':new FormControl('female'),
   'medicines': new FormArray([]),

   
});
//for checking the valuechanges in the form we will use observable i.e. listeners
this.loginReactiveForm.statusChanges.subscribe(
  (status)=>console.log(status)
);

this.loginReactiveForm.valueChanges.subscribe(
(value) => console.log(value)
);

//prepopulating the form by setValues
this.loginReactiveForm.setValue({
  'userData':{
    'username':"Nibedita",
    'email':'nibedita@test.com',
  },
  'gender':'female',
  'medicines':[]
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
    
     forbiddenName(control:FormControl):{[s:string]:boolean}{
       //checking here value of the control is part of forbiddenNames array
      if(this.forbiddenUserNames.indexOf(control.value)!== -1){
        //checking control values matches the array , but returns -1 if
        //not part of array. -1 is considered as true.
        return {'nameisforbidden':true}
      }
      return null;
     }
     
     

     submit(){
       console.log(this.loginReactiveForm);
       //We can reset the form 
       this.loginReactiveForm.reset();
     }


}
