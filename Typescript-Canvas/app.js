var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillRect(0, 0, 1280, 500);
    ctx.fillStyle = "#fff";
    myCircle.draw();
    myCircle2.draw();
}
var Circle = /** @class */ (function () {
    function Circle(x, y, radius, color, lineWidth) {
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    Circle.prototype.draw = function () {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Circle;
}());
var myCircle = new Circle(500, 200, 30, "red", 10);
var myCircle2 = new Circle(100, 100, 40, "blue", 10);
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext('2d');
    gameLoop();
};
//# sourceMappingURL=app.js.map