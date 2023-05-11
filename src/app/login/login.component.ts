import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../http/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service:NotificationService){}
  data1:any
  ngOnInit(): void {
    
   // this.data1=JSON.parse(JSON.stringify(this.service.data.title))
    
  }

}
