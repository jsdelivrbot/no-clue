import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddlesMosaicComponent } from './riddles-mosaic.component';

describe('RiddlesMosaicComponent', () => {
  let component: RiddlesMosaicComponent;
  let fixture: ComponentFixture<RiddlesMosaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddlesMosaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddlesMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
