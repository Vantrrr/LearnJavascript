import { Component, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-state-canvas',
  templateUrl: './state-canvas.component.html',
  styleUrls: ['./state-canvas.component.scss']
})
export class StateCanvasComponent {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;

  ngAfterViewInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;

    if(this.context) {
    this.stateDrawCircle();
    }
  }

  stateDrawCircle() {
    this.context.fillStyle = "red";
    this.context.beginPath();
    this.context.arc(50, 50, 30, 0, 2 * Math.PI);
    this.context.fill();

    this.context.save();
    this.context.fillStyle = "blue";
    this.context.beginPath();
    this.context.arc(150, 50, 30, 0, 2 * Math.PI);
    this.context.fill();


    this.context.restore();
    this.context.beginPath();
    this.context.arc(250, 50, 30, 0, 2 * Math.PI);
    this.context.fill();

  }
}
