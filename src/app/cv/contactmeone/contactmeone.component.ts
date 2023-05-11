import { Component } from '@angular/core';
import { NotificationService } from 'src/app/http/notification.service';

@Component({
  selector: 'app-contactmeone',
  templateUrl: './contactmeone.component.html',
  styleUrls: ['./contactmeone.component.css']
})
export class ContactmeoneComponent {
constructor(private notificationService:NotificationService){}


cl(){
alert("thanks you so much")
}


}
