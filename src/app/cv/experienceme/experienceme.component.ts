import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experienceme',
  templateUrl: './experienceme.component.html',
  styleUrls: ['./experienceme.component.css']
})
export class ExperiencemeComponent implements OnInit {
  @Input() data:any
    ngOnInit(): void {
      console.log(this.data.professionel)
  }

}
