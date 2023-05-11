import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mecv',
  templateUrl: './mecv.component.html',
  styleUrls: ['./mecv.component.css']
})
export class MecvComponent implements OnInit {
  @Input() data:any
ngOnInit(): void {
  console.log(this.data)
}
}
