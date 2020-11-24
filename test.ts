let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = '#fff';
ctx.rect(50, 50, 100, 100);
ctx.fill();
ctx.closePath();
