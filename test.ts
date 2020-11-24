import Sprite from './physics/sprite.js';
import Vector2 from './physics/vectors.js';
let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
let thing = new Sprite("./src/images/turtle.png");
thing.applyForce(new Vector2(0,9.8));
setInterval(() => {
  //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thing.render(ctx);
  thing.move();
}, 10);
