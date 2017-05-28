import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleFullComponent } from './riddle-full.component';

describe('RiddleFullComponent', () => {
  let component: RiddleFullComponent;
  let fixture: ComponentFixture<RiddleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
