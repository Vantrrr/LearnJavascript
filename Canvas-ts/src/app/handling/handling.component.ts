import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-handling',
  templateUrl: './handling.component.html',
  styleUrls: ['./handling.component.scss']
})
export class HandlingComponent implements AfterViewInit{
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private canvas!: HTMLCanvasElement;
  ballX = 50;
  ballY = 50;
  ballRadius = 10;
  paddleHeight = 10;
  paddleWidth = 115;
  paddleX = 0;
  rightPressed = false;
  leftPressed = false;
  ballSpeedX = 2;
  ballSpeedY = -2;

  constructor() { }

  ngAfterViewInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    requestAnimationFrame(this.draw.bind(this));
  }

  keyDownHandler(event: KeyboardEvent) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(event: KeyboardEvent) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  drawBall() {
    this.context.beginPath();
    this.context.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
    this.context.fillStyle = '#0095DD';
    this.context.fill();
    this.context.closePath();
  }

  drawPaddle() {
    this.context.beginPath();
    this.context.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.context.fillStyle = '#0095DD';
    this.context.fill();
    this.context.closePath();
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBall();
    this.drawPaddle();

    // Handle ball movement
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    if (
      this.ballY + this.ballRadius >= this.canvas.height - this.paddleHeight &&
      this.ballX > this.paddleX &&
      this.ballX < this.paddleX + this.paddleWidth
    ) {
      this.ballY = this.canvas.height - this.paddleHeight - this.ballRadius;
      this.ballSpeedY = -this.ballSpeedY;
    }

    if (this.ballY - this.ballRadius <= 0) {
      this.ballSpeedY = -this.ballSpeedY;
    }
    if (this.ballX + this.ballRadius >= this.canvas.width || this.ballX - this.ballRadius <= 0) {
      this.ballSpeedX = -this.ballSpeedX;
    }


    if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }

    requestAnimationFrame(this.draw.bind(this));
  }

}
