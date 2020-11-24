import Ball from './physics/ball';
let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
let ball = Ball();
ball.render();
