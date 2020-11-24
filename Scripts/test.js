import Sprite from './physics/sprite.js';
import Vector2 from './physics/vectors.js';
var canvas = document.getElementById('test-canvas');
var ctx = canvas.getContext('2d');
var thing = new Sprite("./src/images/turtle.png");
thing.applyForce(new Vector2(0, 9.8));
setInterval(function () {
    //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    thing.render(ctx);
    thing.move();
}, 10);
//# sourceMappingURL=test.js.map