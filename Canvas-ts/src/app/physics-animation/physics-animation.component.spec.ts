import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsAnimationComponent } from './physics-animation.component';

describe('PhysicsAnimationComponent', () => {
  let component: PhysicsAnimationComponent;
  let fixture: ComponentFixture<PhysicsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
