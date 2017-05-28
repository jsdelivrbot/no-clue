import { IRiddle } from '../contracts/IRiddle';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-riddle-thumbnail',
  template: `
    <div class="riddle-thumbnail" (click)="riddleClicked()">
      riddle: {{riddle.name}}
    </div>
  `,
  styleUrls: ['./riddle-thumbnail.component.css']
})
export class RiddleThumbnailComponent implements OnInit {

  @Input() riddle: IRiddle;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  private riddleClicked() {
    this.router.navigate([`./riddles/${this.riddle.id}`]);
  }

}
