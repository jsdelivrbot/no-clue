import { Riddle } from '../../models/riddle';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
//<p-panel [header]="riddle.name" class="riddle-thumbnail-container">
//riddle: {{riddle.name}}
@Component({
  selector: 'clue-riddle-thumbnail',
  template: `

    <div class="riddle-thumbnail-container" (click)="riddleClicked()">
      <div class="riddle-thumbnail">
      <p class="riddle-thumbnail-header" [ngClass]='getHeaderClass()'>
        {{riddle.name}}
      </p>
      </div>
    </div>

  `,
  styleUrls: ['./riddle-thumbnail.component.css']
})
export class RiddleThumbnailComponent implements OnInit {

  @Input() riddle: Riddle;
  private getHeaderClass(): string {
    return this.riddle.difficulty >= 8 ? 'riddle-thumbnail-header-easy'
      : this.riddle.difficulty <= 3 ? 'riddle-thumbnail-header-hard'
      : 'riddle-thumbnail-header-medium';
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private riddleClicked() {
    this.router.navigate([`./riddles/${this.riddle.id}`]);
  }

}
