import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-state-canvas',
  templateUrl: './state-canvas.component.html',
  styleUrls: ['./state-canvas.component.scss']
})
export class StateCanvasComponent {
  @ViewChild('canvas', {static : true}) myCanvas!:ElementRef;
  ngOnInit() {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.stateDrawCircle(context);
    }
  }

  stateDrawCircle(context: CanvasRenderingContext2D) {

    context.fillStyle = "red";
    context.beginPath();
    context.arc(50, 50, 30, 0, 2 * Math.PI);
    context.fill();

    context.save();


    context.fillStyle = "blue";
    context.beginPath();
    context.arc(150, 50, 30, 0, 2 * Math.PI);
    context.fill();


    context.restore();
    context.beginPath();
    context.arc(250, 50, 30, 0, 2 * Math.PI);
    context.fill();

  }
}
