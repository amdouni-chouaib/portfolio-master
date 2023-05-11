import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsme',
  templateUrl: './skillsme.component.html',
  styleUrls: ['./skillsme.component.css']
})
export class SkillsmeComponent implements OnInit {
  @Input() data:any
ngOnInit(): void {
  console.log(this.data.skillsArray)
}
}
