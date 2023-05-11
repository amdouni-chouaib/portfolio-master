import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoliomeone',
  templateUrl: './portfoliomeone.component.html',
  styleUrls: ['./portfoliomeone.component.css']
})
export class PortfoliomeoneComponent implements OnInit {
  @Input() data:any
ngOnInit(): void {
  console.log(this.data.portfolio)
}
}
