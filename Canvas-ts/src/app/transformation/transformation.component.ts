import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;

  ngAfterViewInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!; // Non-null assertion operator

    if (this.context) {
      // this.translateRectangle();
      // this.rotateAndDraw(18);
      // this.scaleDraw();
      this.transformDraw()
    }
  }

  // Translate
  translateRectangle(): void {
    this.context.fillRect(10, 10, 100, 50);
    this.context.translate(110, 0);
    this.context.fillStyle = "blue";
    this.context.fillRect(10, 10, 100, 50);
    this.context.translate(110, 0);
    this.context.fillStyle = "green";
    this.context.fillRect(10, 10, 100, 50);
  }

  // Rotate
  rotateAndDraw(angle: number): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.save();
    this.context.translate(this.canvas.width / 4, this.canvas.height / 2);
    this.context.rotate(angle * Math.PI / 180);
    this.context.fillStyle = 'blue';
    this.context.fillRect(-80, -25, 100, 50); // Adjusted position to center the rectangle
    this.context.restore();
  }

  // Scale
  scaleDraw(): void {
    this.context.save();
    this.context.scale(10, 3);
    this.context.fillRect(1, 10, 10, 10);
    this.context.restore();

    this.context.scale(-1, 1);
    this.context.font = "48px serif";
    this.context.fillText("VAN", -135, 120);
  }

  // Transform
  transformDraw(): void {
    const sin = Math.sin(Math.PI / 6);
    const cos = Math.cos(Math.PI / 6);
    this.context.translate(100, 100);
    let c = 0;
    for (let i = 0; i <= 12; i++) {
      c = Math.floor((255 / 12) * i);
      this.context.fillStyle = `rgb(${c} ${c} ${c})`;
      this.context.fillRect(0, 0, 100, 10);
      this.context.transform(cos, sin, -sin, cos, 0, 0);
    }

    this.context.setTransform(-1, 0, 0, 1, 100, 100);
    this.context.fillStyle = "rgb(255 128 255 / 50%)";
    // this.context.fillRect(0, 50, 100, 100);
  }
}
