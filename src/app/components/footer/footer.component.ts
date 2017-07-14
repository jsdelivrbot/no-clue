import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clue-footer',
  template: `
    <div class="footer">
      <img height="100px" src="../../../assets/img/nocluelogo.png">
      2017 Daniel Kagan
      <a href="#">Contact Me</a>
    </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
