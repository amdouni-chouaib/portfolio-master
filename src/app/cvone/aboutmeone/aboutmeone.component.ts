import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-aboutmeone',
  templateUrl: './aboutmeone.component.html',
  styleUrls: ['./aboutmeone.component.css']
})
export class AboutmeoneComponent implements OnInit{
    @Input()
    data:any;

    constructor() { }

    ngOnInit(): void {
    }
}
