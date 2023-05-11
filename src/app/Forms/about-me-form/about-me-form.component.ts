import {Component, OnInit} from '@angular/core';
import {ChangeService} from "../../change.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../http/notification.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.css']
})

export class AboutMeFormComponent implements OnInit {
  form2:FormGroup
  form3:FormGroup
  form4:FormGroup
  form5:FormGroup
  constructor(private route:Router,private formBuilder:FormBuilder,private notificationService:NotificationService){
    this.form2 = this.formBuilder.group({
      skillsArray: this.formBuilder.array([
        this.formBuilder.group({
          skills: ['', Validators.required],
          level: ['', Validators.required]
        })
      ])
    });
    this.form3 = this.formBuilder.group({
      professionel: this.formBuilder.array([
        this.formBuilder.group({
    title: ['', Validators.required],
    dated: ['', Validators.required],
    datef: ['', Validators.required],
    description: ['', Validators.required]
        })
      ])
    });
    this.form4 = this.formBuilder.group({
      education: this.formBuilder.array([
        this.formBuilder.group({
    title1: ['', Validators.required],
    dated1: ['', Validators.required],
    datef1: ['', Validators.required],
    description1: ['', Validators.required]
        })
      ])
    });
    this.form5 = this.formBuilder.group({
      portfolio: this.formBuilder.array([
        this.formBuilder.group({
        image: [this.imgport, Validators.required],
        title: ['', Validators.required],
        description: ['', Validators.required]
        })
      ])
    });
  
  
  }
  ngOnInit(): void {
    
  }
  dataport:any=''
  imgport:any=""
  imgpath:any=""
  data:any=""
  form1:FormGroup=this.formBuilder.group({
    picture:[this.imgpath,Validators.required],
    fullname:['',[Validators.required]],
    role:['',[Validators.required]],
    link:['',[Validators.required]],
   
  })
  form:FormGroup=this.formBuilder.group({
  description:['',Validators.required],
  age:['',[Validators.required,Validators.min(18),Validators.pattern('[0-9]*')]],
  email:['',[Validators.required,Validators.email]],
  phone:['',[Validators.required,Validators.pattern('[0-9]{8}')]],
  address:['',[Validators.required]],
  language:['',[Validators.required]],
})
get skillsArray() {
  return this.form2.get('skillsArray') as FormArray;
}



addSkill() {
  this.skillsArray.push(this.formBuilder.group({
    skills: ['', Validators.required],
    level: ['', Validators.required]
  }));
}

removeSkill(index: number) {
  this.skillsArray.removeAt(index);
}

onSubmit2() {
  console.log(this.form2.value);

  // any additional logic here to handle the form submission
}

get professionel() {
  return this.form3.get('professionel') as FormArray;
}

addexp() {
  this.professionel.push(this.formBuilder.group({
    title: ['', Validators.required],
    dated: ['', Validators.required],
    datef: ['', Validators.required],
    description: ['', Validators.required]

  }));
}

removeexp(index: number) {
  this.professionel.removeAt(index);
}

onSubmit3() {
  console.log(this.form3.value);
  // any additional logic here to handle the form submission
}

get education() {
  return this.form4.get('education') as FormArray;
}

added() {
  this.education.push(this.formBuilder.group({
    title1: ['', Validators.required],
    dated1: ['', Validators.required],
    datef1: ['', Validators.required],
    description1: ['', Validators.required]

  }));
}

removeed(index: number) {
  this.education.removeAt(index);
}

onSubmit4() {
  console.log(this.form4.value);
  // any additional logic here to handle the form submission
}

get portfolio() {
  return this.form5.get('portfolio') as FormArray;
}

addport() {
  this.portfolio.push(this.formBuilder.group({
    image: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required]
  }));
}

removeport(index: number) {
  this.portfolio.removeAt(index);
}


eventhand1(event :any, i: number){
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const imgport = URL.createObjectURL(file);
    console.log(imgport); // log the image path to the console
    console.log(this.data)
    this.portfolio.controls[i].patchValue({
      image: imgport
    });
  }
}

onSubmit5(){
  console.log(this.form5.value.portfolio);
}

// onSubmit5(){
//   this.dataport={image:this.imgport,title:this.form5.value.title,description:this.form5.value.description}
//   console.log(this.dataport)
// }










 
  onSubmit() {
    if(this.form.invalid){
      this.notificationService.showError('Please fill all the details !!', 'Error');
      return;
    }
    console.log("onSubmit")
    console.log(this.form.value);
    this.notificationService.showSuccess('Data shown successfully !!', 'Success');
  }
  onSubmit1() {
    if(this.form1.invalid){
      this.notificationService.showError('Please fill all the details !!', 'Error');
      return;
    }
    console.log("onSubmit2")
    this.data={picture:this.imgpath,fullname:this.form1.value.fullname,role:this.form1.value.role,link:this.form1.value.link}

    console.log(this.data);

    this.notificationService.showSuccess('Data shown successfully !!', 'Success');
  }
  eventhand(event :any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgpath = URL.createObjectURL(file);
      console.log(this.imgpath); // log the image path to the console
      console.log(this.data)
    }
  }


sendData(){
  this.notificationService.data.skills=this.form2.value.skillsArray

  this.notificationService.data.experience=this.form3.value.professionel

  this.notificationService.data.education=this.form4.value.education

  this.notificationService.data.portfolio=this.form5.value.portfolio

    this.notificationService.data.about=this.form.value

    this.notificationService.data.header=this.data


    this.route.navigate(['/portfolioone'])

}





}
