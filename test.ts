import PhysicsObject from './physics/PhysicsObject.js';
import Vector2 from './physics/vectors.js';
let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
let thing = new PhysicsObject(
  new Vector2(50, 5),
  new Vector2(50, 50),
  1,
  false,
  true
);
thing.applyForce(new Vector2(0,9.8));
setInterval(() => {
  //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  thing.render(ctx);
  if (!thing.checkBounds(canvas)) {
    thing.move(0.05);
  }
}, 10);
