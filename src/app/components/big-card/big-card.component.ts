import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() phoCover: string = ""
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = ""
  @Input() Id:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
