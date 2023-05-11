import {Component, OnInit} from '@angular/core';
import { ChangeService } from '../change.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../http/notification.service";
@Component({
  selector: 'app-formcv',
  templateUrl: './formcv.component.html',
  styleUrls: ['./formcv.component.css']
})
export class FormcvComponent implements OnInit{
constructor(private change:ChangeService,private formBuilder:FormBuilder,private noficationService:NotificationService){}
  form:FormGroup
  descriptionForm:FormGroup
ngOnInit(){
  this.noficationService.showSuccess('Data shown successfully !!', 'Success');
  this.descriptionForm=this.formBuilder.group({
    description:['',Validators.required]


  })
   this.form=this.formBuilder.group({
        description:['',Validators.required],
        age:['',Validators.required,Validators.min(18),Validators.pattern('^[0-9]*$')],
        email:['',Validators.required,Validators.email],
        phone:['',Validators.required,Validators.pattern('^[0-9]*$')],
        adress:['',Validators.required],
        skills:[this.formBuilder.group(
          {
            skill:['',Validators.required],
            level:['',Validators.required,Validators.min(1),Validators.max(100),Validators.pattern('^[0-9]*$')]
          }
        ),Validators.required],
        experience:[this.formBuilder.group(
          {
            where:['',Validators.required],
            dated:['',Validators.required],
            datef:['',Validators.required],
            message:['',Validators.required]
          }
        ),Validators.required],
        education:[this.formBuilder.group(
          {
            where:['',Validators.required],
            dated:['',Validators.required],
            datef:['',Validators.required],
            message:['',Validators.required]

          }
        ),Validators.required],
   })
}
aboutme:any
data:{

  age:number,
  email:any,
  phone:number,
  adress:any,
  skills:{skill:string,level:number},
  experience:{where:string,dated:string,datef:string,message:string},
  education:any,
  portfolio:any,
  contact:any

}


send(){
this.change.data=this.aboutme

}

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log("onSubmit")
    console.log(this.form.value);
  }
}
