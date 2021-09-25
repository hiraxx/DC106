import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  incNumber = 0;
  


  Increment() {
this.incNumber = Math.floor((Math.random() * 10) + 1); "this.decNumber = Math.floor((Math.random() * 10) - 1)";
  
  }
}