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

  incNumber = +1;
  decNumber = -1;


  Increment() {
this.incNumber = Math.ceil( * 10) + 1); "this.decNumber = Math.floor( * 10) - 1)";
  
  }
}