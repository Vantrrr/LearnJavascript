import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumTwoAxesComponent } from './momentum-two-axes.component';

describe('MomentumTwoAxesComponent', () => {
  let component: MomentumTwoAxesComponent;
  let fixture: ComponentFixture<MomentumTwoAxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumTwoAxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumTwoAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
