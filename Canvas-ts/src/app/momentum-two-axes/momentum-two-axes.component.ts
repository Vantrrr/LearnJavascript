import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-momentum-two-axes',
  templateUrl: './momentum-two-axes.component.html',
  styleUrls: ['./momentum-two-axes.component.scss']
})
export class MomentumTwoAxesComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  private ball = {
    x: 0,
    y: 0,
    dx: 2,
    dy: -2,
    radius: 10
  };

  ngAfterViewInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;

    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;

    if (this.context) {
      this.draw();
    }
  }

  drawBall(): void {
    this.context.beginPath();
    this.context.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.context.fillStyle = '#0095DD';
    this.context.fill();
    this.context.closePath();
  }

  updateBallPosition(): void {
    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;

    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius || this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    }
  }

  draw(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.updateBallPosition();
    requestAnimationFrame(() => this.draw());
  }
}
