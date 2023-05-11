import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mecvone',
  templateUrl: './mecvone.component.html',
  styleUrls: ['./mecvone.component.css']
})
export class MecvoneComponent {
  @Input() data:any
  
}
