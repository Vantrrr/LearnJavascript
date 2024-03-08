import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vertical-projection',
  templateUrl: './vertical-projection.component.html',
  styleUrls: ['./vertical-projection.component.scss']
})
export class VerticalProjectionComponent implements AfterViewInit {
  @ViewChild('verticalProjectionCanvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;

  data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  projectionWidth: number = 20;
  projectionSpacing: number = 10;
  projectionHeightMultiplier: number = 3;
  totalWidth: number = 0;

  ngAfterViewInit() {
    // this.canvas = this.myCanvas.nativeElement;
    this.canvas = document.getElementById('verticalProjectionCanvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d')!;

    if (this.context) {
      this.totalWidth = (this.projectionWidth + this.projectionSpacing) * this.data.length;
      this.canvas.width = this.totalWidth;
      this.drawVerticalProjection();
    }
  }

  drawVerticalProjection(): void {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.data.forEach((value, index) => {
        const x = (this.projectionWidth + this.projectionSpacing) * index; // Calculate x position
        const y = this.canvas.height - (value * this.projectionHeightMultiplier); // Calculate y position based on value
        const height = value * this.projectionHeightMultiplier; // Calculate height based on value

        // Draw the bar
        this.context.fillStyle = 'blue'; // Set fill color
        this.context.fillRect(x, y, this.projectionWidth, height); // Draw rectangle
    });
  }
}
