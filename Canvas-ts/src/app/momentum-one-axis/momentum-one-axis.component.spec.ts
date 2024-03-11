import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumOneAxisComponent } from './momentum-one-axis.component';

describe('MomentumOneAxisComponent', () => {
  let component: MomentumOneAxisComponent;
  let fixture: ComponentFixture<MomentumOneAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentumOneAxisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentumOneAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
