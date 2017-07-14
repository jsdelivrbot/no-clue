import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'clue-sidenav',
  // template: `
  //            <button (click) = "onToggle.emit()">click</button>
  //            <p> side nav </p>
  //            <p *ngIf="isOpen">The content </p>
  //           `,
  template: `
  <div class="navbar">
    <p-tabView orientation="left">
      <p-tabPanel header="Home">
        Content 1
      </p-tabPanel>
      <p-tabPanel header="Top ">
          Content 2
      </p-tabPanel>
      <p-tabPanel header="Header 3">
          Content 3
      </p-tabPanel>
  </p-tabView>
</div>

  `,
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() onToggle = new EventEmitter();
  @Input() isOpen = false;
}
