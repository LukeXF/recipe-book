import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <h1>
      Hello to the Recipe Book!
    </h1>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
