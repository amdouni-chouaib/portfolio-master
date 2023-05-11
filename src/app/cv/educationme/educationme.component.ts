import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-educationme',
  templateUrl: './educationme.component.html',
  styleUrls: ['./educationme.component.css']
})
export class EducationmeComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() data:any
}
