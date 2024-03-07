import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-physics-animation',
  templateUrl: './physics-animation.component.html',
  styleUrls: ['./physics-animation.component.scss']
})
export class PhysicsAnimationComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;

  ngAfterViewInit() {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;

    if (this.context) {
      this.draw();
    }
  }

  ball = {
    x: 50,
    y: 0,
    radius: 20,
    velocity: 2,
    acceleration: 0.05
  };

  drawBall(): void {
    this.context.beginPath();
    this.context.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }

  draw(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.y = this.canvas.height / 2;
    this.drawBall();

    this.ball.velocity += this.ball.acceleration;
    this.ball.x += this.ball.velocity;

    if (this.ball.x + this.ball.radius > this.canvas.width || this.ball.x - this.ball.radius < 0) {
      this.ball.velocity = -this.ball.velocity;
    }

    requestAnimationFrame(() => this.draw());
  }

}
