import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-temp-main',
  templateUrl: './temp-main.component.html',
  styleUrls: ['./temp-main.component.scss']
})
export class TempMainComponent implements OnInit {

  @Input() Maindata: any;
  constructor() { }

  ngOnInit() {
    console.log('tempmain');
    console.log(this.Maindata);
  }

}
