import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if(context) {
      this.#drawRectangle(context);
      this.#drawTriangle(context);
    }
  }

  #drawRectangle(context: CanvasRenderingContext2D) {
    context.fillRect(20, 20, 100, 100);
    context.clearRect(40, 40, 30, 30);
    context.strokeRect(50, 50, 10, 10);
  }

  #drawTriangle(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(200,70);
    context.lineTo(300,20);
    context.lineTo(300,120);
    context.fill();
    context.stroke();
  }
}
