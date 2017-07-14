import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clue-header',
  template: `
    <div class="header" (click)="headerClicked()">

    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public headerClicked() {
    this.router.navigate([`./riddles`]);
  }

}
