import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../http/notification.service';

@Component({
  selector: 'app-cvtemplatetwo',
  templateUrl: './cvtemplatetwo.component.html',
  styleUrls: ['./cvtemplatetwo.component.css']
})
export class CvtemplatetwoComponent implements OnInit {
  constructor(private service:NotificationService){}

  data1:any
  ngOnInit(): void {
    this.data1=JSON.parse(JSON.stringify(this.service.data))
  console.log(this.data1)
  }
}
