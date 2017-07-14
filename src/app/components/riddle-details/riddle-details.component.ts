import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'clue-riddle-details',
  template: `
    <p-panel [header]="riddle.name" class="riddle-thumbnail-container">
    <div class="riddle-thumbnail" (click)="riddleClicked()">
      riddle: {{riddle.name}}
      <button type="button" pButton label="Click" icon="fa fa-check"></button>
    </div>
    </p-panel>
  `,
  styleUrls: ['./riddle-details.component.css']
})
export class RiddleDetailsComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  riddle = {
    name:"example"
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
