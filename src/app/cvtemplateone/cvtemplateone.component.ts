import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '../http/notification.service';
import html2pdf from 'html2pdf.js';
import { ThecvComponent } from '../thecv/thecv.component';

@Component({
  selector: 'app-cvtemplateone',
  templateUrl: './cvtemplateone.component.html',
  styleUrls: ['./cvtemplateone.component.css']
})
export class CvtemplateoneComponent implements OnInit {

  constructor(private service:NotificationService){}
 
  data1:any
  ngOnInit(): void {
    this.data1=JSON.parse(JSON.stringify(this.service.data))
  console.log(this.data1)
  }
  generatePDF() {
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
