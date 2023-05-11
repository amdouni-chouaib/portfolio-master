import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiencemeone',
  templateUrl: './experiencemeone.component.html',
  styleUrls: ['./experiencemeone.component.css']
})
export class ExperiencemeoneComponent {
  @Input() data:any

}
