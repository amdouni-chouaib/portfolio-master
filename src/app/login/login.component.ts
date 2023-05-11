import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../http/notification.service';
import { ChangeService } from '../change.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth:ChangeService,private route:Router){}

  forms:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required]),

  })


  login(){
    this.auth.login(this.forms.value).subscribe((data:any)=>{
      console.log(data)
      localStorage.setItem("token",data.token)
      this.route.navigate(["/pick"])
    })

  }
  ngOnInit(): void {
    
   
    
  }

}
