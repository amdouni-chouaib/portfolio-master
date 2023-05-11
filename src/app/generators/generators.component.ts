import { Component } from '@angular/core';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.css']
})
export class GeneratorsComponent {
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
}
