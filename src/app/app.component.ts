import { Component, OnInit } from '@angular/core';
import { ChangeService } from './change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'port-cv';
  constructor(private change:ChangeService){}
  ngOnInit(): void {

  }
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
