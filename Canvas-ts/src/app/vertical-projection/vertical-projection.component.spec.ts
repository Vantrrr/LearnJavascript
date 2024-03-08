import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalProjectionComponent } from './vertical-projection.component';

describe('VerticalProjectionComponent', () => {
  let component: VerticalProjectionComponent;
  let fixture: ComponentFixture<VerticalProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
