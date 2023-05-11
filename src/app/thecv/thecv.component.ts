import { Component, OnInit } from '@angular/core';
import html2pdf from 'html2pdf.js';
import { NotificationService } from '../http/notification.service';

@Component({
  selector: 'app-thecv',
  templateUrl: './thecv.component.html',
  styleUrls: ['./thecv.component.css']
})
export class ThecvComponent implements OnInit{
  constructor(private service:NotificationService){}
  data1:any
  ngOnInit(): void {
  this.data1=JSON.parse(JSON.stringify(this.service.data))
  console.log(this.data1)
  }


cv(){
  const element = document.getElementById('w');
  const options = {
    margin:       1,
    filename:     'cv-template.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { dpi: 192, letterRendering: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();

}




}
