import { GetRiddlesService } from '../services/get-riddles.service';
import { RiddleThumbnailComponent } from '../riddle-thumbnail/riddle-thumbnail.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riddles-mosaic',
  template: `
   <section class="riddles-mosaic">
    <app-riddle-thumbnail *ngFor="let riddle of riddles"
                          [riddle] = riddle
    >
   </app-riddle-thumbnail>
   </section>
  `,
  styleUrls: ['./riddles-mosaic.component.css']
})
export class RiddlesMosaicComponent implements OnInit {

/*
  public riddles = [
    {id: 1, name: 'riddle1'},
    {id: 2, name: 'riddle2'},
    {id: 3, name: 'riddle3'}
  ];
*/

  public riddles: any = [];

  constructor(private getRiddlesService: GetRiddlesService) { }

  ngOnInit() {
    this.getRiddlesService.getAllRiddles().subscribe(riddles => {
      this.riddles = riddles;
    });
  }
}
