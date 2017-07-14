import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clue-riddle-search',
  template: `
      <p-autoComplete placeholder="Search"></p-autoComplete>
  `,
  styleUrls: ['./riddle-search.component.css']
})
export class RiddleSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
