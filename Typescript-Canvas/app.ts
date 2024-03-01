let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillRect(0, 0, 1280, 500);
    ctx.fillStyle = "#fff"
    myCircle.draw();
    myCircle2.draw();

}

class Circle {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";

    constructor(x: number, y: number, radius: number, color: string, lineWidth: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }

    public draw(): void {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

let myCircle: Circle = new Circle(500, 200, 30, "red", 10);
let myCircle2: Circle = new Circle(100, 100, 40, "blue", 10);

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = canvas.getContext('2d');
    gameLoop();
}