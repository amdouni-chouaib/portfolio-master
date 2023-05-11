import { Component } from '@angular/core';
import { NotificationService } from '../http/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  constructor(private service:NotificationService,private route:Router){}
one(){
  this.service.pick.one=1
  this.route.navigate(['/make'])
}
two(){
  this.service.pick.one=2
    this.route.navigate(['/make'])
}
}
