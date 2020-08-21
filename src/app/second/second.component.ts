import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  isDisplay = true;
  toggle = "Hidden";
  arr = ["Cá", "Cua", "Tôm", "Gà"];
  display(){
    this.isDisplay = !this.isDisplay;
    if(this.isDisplay === true)
      this.toggle = "Hidden";
    else
      this.toggle = "Display";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
