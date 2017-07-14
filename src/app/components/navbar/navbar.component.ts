import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clue-navbar',
  template: `
    <div class="navbar">
      New   |   Hot   |   Trend
      <clue-riddle-search class="navbar-search"></clue-riddle-search>
    </div>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
