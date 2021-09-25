import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  decNumber = 0;

  Decrement() {
this.decNumber = Math.floor((Math.random() * 10) - 1);

  }

}
