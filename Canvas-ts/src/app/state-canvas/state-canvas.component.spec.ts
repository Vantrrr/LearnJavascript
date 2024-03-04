import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCanvasComponent } from './state-canvas.component';

describe('StateCanvasComponent', () => {
  let component: StateCanvasComponent;
  let fixture: ComponentFixture<StateCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
