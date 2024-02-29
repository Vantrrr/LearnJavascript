let canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

function veDuongThang() {
    c.moveTo(50,100); // Khai báo điểm đầu
    c.lineTo(50,0); // Khai báo điểm cuối
    c.lineWidth = 5; // Khai báo độ rộng của đường thẳng
    c.strokeStyle = "#FF0000" // Khai báo màu của đường thẳng
    c.stroke(); // Thực hiện vẽ
}

function veHinhChuNhat() {
    c.lineWidth = 5;
    c.strokeStyle = "#FF0000" // Khai báo màu của đường thẳng
    c.strokeRect(100,50,200,100); // Tọa độ xy, width, height 
    c.fillStyle = "#ccc" // Màu nền   
    c.fillRect(100,50,200,100) // xy, width, height
}

function gradientHCN() {
    // Create gradient
    var grd = c.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    c.fillStyle = grd;
    c.fillRect(10, 10, 150, 80);
}

function veHinhTron() {
    c.beginPath();
    c.arc(95, 50, 40, 0, 2 * Math.PI); // x,y, radius bán kính, startAngle: góc bắt đầu , enAngle: góc kết thúc.
    c.stroke();
}

function veText() {
    c.font = "30px Arial";
    c.fillText("Hello World", 10, 50); // Text,x,y
}

function shapeRectangle() {
    c.fillStyle = 'rgba(255,0,0,0.5)';
    c.fillRect(100, 100, 100, 100);
    c.clearRect(120, 120, 60, 60);
    c.strokeRect(125, 125, 50, 50);
    c.fillStyle = 'rgba(0,0,255,0.5)';
    c.fillRect(300, 100, 100, 100);
    c.fillStyle = 'rgba(0 0 20 / 50%)';
    c.fillRect(300, 150, 100, 100)
}

// Arc / Circle (Vòng cung // đường tròn)
function randomCircle() {
    // c.beginPath();
    // c.arc(400, 300, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = 'red';
    // c.stroke();
    for (let i = 0; i < 3; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
    }    
}

// Draw a triangle
function drawTriagle() {
    c.beginPath();
    c.moveTo(75, 50);
    c.lineTo(100, 75);
    c.lineTo(100, 25);
    c.fill();
    c.stroke();
}

// Drawing Bezier Curves
function drawBezierCurves() {
    c.beginPath();
    c.moveTo(75, 25);
    c.quadraticCurveTo(25, 25, 25, 62.5);
    c.quadraticCurveTo(25, 100, 50, 100);
    c.quadraticCurveTo(50, 120, 30, 125);
    c.quadraticCurveTo(60, 120, 65, 100);
    c.quadraticCurveTo(125, 100, 125, 62.5);
    c.quadraticCurveTo(125, 25, 75, 25);
    c.stroke();
}

// Animate
var x = 200;
function Animate() {
    requestAnimationFrame(Animate);
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.fillStyle = "#ccc";
    c.clearRect(0, 0, innerWidth, innerHeight);
    // c.fill();
    
    c.stroke();

    x += 1;
}

