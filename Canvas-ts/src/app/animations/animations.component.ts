import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})


export class AnimationsComponent implements AfterViewInit {
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef;


  ngAfterViewInit(): void {
      // this.drawCicle();
      // this.clock();
      this.animate();
  }




  drawCicle(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    let x: number = canvas.width / 2;
    let y: number = canvas.height / 2;


    let dx: number = 2;
    let dy: number = -2;


    function draw(): void {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      context.arc(x, y, 20, 0, Math.PI * 2);
      context.fillStyle = "blue";
      context.fill();
      context.closePath();

      x += dx;
      y += dy;


      if (x + dx > canvas.width - 20 || x + dx < 20) {
        dx = -dx;
      }
      if (y + dy > canvas.height - 20 || y + dy < 20) {
        dy = -dy;
      }
    }


    setInterval(draw, 50);
  }

  clock(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.save();
    context.clearRect(0, 0, 150, 150);
    context.translate(75, 75);
    context.scale(0.4, 0.4);
    context.rotate(-Math.PI / 2);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.lineWidth = 8;
    context.lineCap = "round";

    // Hour marks
    context.save();
    for (let i = 0; i < 12; i++) {
      context.beginPath();
      context.rotate(Math.PI / 6);
      context.moveTo(100, 0);
      context.lineTo(120, 0);
      context.stroke();
    }
    context.restore();

    // Minute marks
    context.save();
    context.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        context.beginPath();
        context.moveTo(117, 0);
        context.lineTo(120, 0);
        context.stroke();
      }
      context.rotate(Math.PI / 30);
    }
    context.restore();

    const now: Date = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;

    context.fillStyle = "black";

    // Write image description
    canvas.innerText = `The time is: ${hr}:${min}`;

    // Write Hours
    context.save();
    context.rotate(
      (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
    );
    context.lineWidth = 14;
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    // Write Minutes
    context.save();
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(112, 0);
    context.stroke();
    context.restore();

    // Write seconds
    context.save();
    context.rotate((sec * Math.PI) / 30);
    context.strokeStyle = "#D40000";
    context.fillStyle = "#D40000";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(83, 0);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.arc(95, 0, 10, 0, Math.PI * 2, true);
    context.stroke();
    context.fillStyle = "rgb(0 0 0 / 0%)";
    context.arc(0, 0, 3, 0, Math.PI * 2, true);
    context.fill();
    context.restore();

    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = " #325FA2";
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke();

    context.restore();

    requestAnimationFrame(() => this.clock());
  }


  // Sprite
  animate(): void {
    const img:HTMLImageElement = new Image();

    img.src = "https://media.istockphoto.com/id/1419601978/vi/video/ng%C3%A0y-%C4%91%E1%BA%BFn-%C4%91%C3%AAm-paris-th%E1%BB%9Di-gian-tr%C3%B4i-%C4%91i.jpg?s=640x640&k=20&c=sn-2if6sl5WvcMxH8ATh14256ZzRVVE8fnmGzPRBCjs=";
    const canvasXSize: number = 800;
    const canvasYSize: number = 200;
    const speed: number = 30; // lower is faster
    const scale: number = 1.05;
    const y: number = -4.5; // vertical offset

    // Main program
    const dx: number = 0.75;
    let imgW: number;
    let imgH: number;
    let x: number = 0;
    let clearX: number;
    let clearY: number;
    let context: CanvasRenderingContext2D;

    img.onload = () => {
      imgW = img.width * scale;
      imgH = img.height * scale;

      if (imgW > canvasXSize) {
        x = canvasXSize - imgW;
      }

      clearX = Math.max(imgW, canvasXSize);
      clearY = Math.max(imgH, canvasYSize);

      const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
      context = canvas.getContext("2d") as CanvasRenderingContext2D;

      setInterval(draw, speed);
    };

    function draw(): void {
      context.clearRect(0, 0, clearX, clearY);

      if (imgW <= canvasXSize) {
        if (x > canvasXSize) {
          x = -imgW + x;
        }

        if (x > 0) {
          context.drawImage(img, -imgW + x, y, imgW, imgH);
        }

        if (x - imgW > 0) {
          context.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
      } else {

        if (x > canvasXSize) {
          x = canvasXSize - imgW;
        }

        if (x > canvasXSize - imgW) {
          context.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
      }

      context.drawImage(img, x, y, imgW, imgH);

      x += dx;
    }
  }


}


