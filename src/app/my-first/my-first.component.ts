import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  template: `
    <p>
      my-first works!
    </p>
  `,
  styles: [
  ]
})
export class MyFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
