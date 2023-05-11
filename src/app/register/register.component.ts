import { Component } from '@angular/core';
import { ChangeService } from '../change.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private auth:ChangeService,private route:Router){}
form=new FormGroup({
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.required]),
  firstName:new FormControl("",[Validators.required]),
  lastName:new FormControl("",[Validators.required]),
  confirmPassword:new FormControl("",[Validators.required]),
  phone:new FormControl("",[Validators.required]),

})
signup(){
  this.auth.signup(this.form.value).subscribe((data:any)=>{
    console.log(data)
    this.route.navigate(['/login'])
  })

}



}
