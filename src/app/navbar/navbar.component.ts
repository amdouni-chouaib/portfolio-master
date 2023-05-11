import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private route:Router){}
  token:any=false
  test:any=true
  ngOnInit() {
    if(localStorage.getItem("token")){
      return this.token=true
    }else{
      return this.token=false
    }
  }
  logins(){
    if(localStorage.getItem("token")){
      return this.test=false
    }else{
      return this.test=true
    }
  }
  logout(){
    localStorage.removeItem("token")
    this.route.navigate(["/login"])

  }
  
}
