import { Input } from '@angular/core';
import { GetRiddlesService } from '../../services/get-riddles.service';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { Riddle } from '../../models/riddle';


@Component({
  selector: 'clue-riddles-mosaic',
  template: `
   <section class="riddles-mosaic">
    <clue-riddle-thumbnail *ngFor="let riddle of riddles"
                          [riddle] = riddle
    >
   </clue-riddle-thumbnail>
   </section>
  `,
  styleUrls: ['./riddles-mosaic.component.css']
})
export class RiddlesMosaicComponent {
  @Input() riddles: Riddle[];
}
