import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-momentum-one-axis',
  templateUrl: './momentum-one-axis.component.html',
  styleUrls: ['./momentum-one-axis.component.scss']
})
export class MomentumOneAxisComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;

  startX: number = 0;
  currentX: number = 0;
  velocityX: number = 0;

  ngAfterViewInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;

    this.canvas.addEventListener('mousedown', (event: MouseEvent) => this.onMouseDown(event));
    this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    this.animate();
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.canvas.addEventListener('mousemove', (evt: MouseEvent) => this.onMouseMove(evt));
  }

  onMouseUp() {
    this.velocityX = this.currentX - this.startX;
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event: MouseEvent) {
    this.currentX = event.clientX;
  }

  animate(): void {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = 'blue';
      this.context.fillRect(50 + this.velocityX, 50, 50, 50);
      this.velocityX *= 0.95;

      requestAnimationFrame(() => this.animate());
    }
  }
}
