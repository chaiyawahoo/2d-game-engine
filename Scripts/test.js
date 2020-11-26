import Sprite from './physics/sprite.js';
import Vector2 from './physics/vectors.js';
import ParticleEmitter from './physics/particleEmitter.js';
var canvas = document.getElementById('test-canvas');
var ctx = canvas.getContext('2d');
var turtle = new Sprite('./src/images/turtle.png', new Vector2(50, 5), new Vector2(50, 50), 1, false, true);
var fireball = new Sprite('./src/images/fireball-2.png', new Vector2(-50, -50), new Vector2(75, 75), 1, false, false);
var emitter = new ParticleEmitter(fireball, new Vector2(200, 200), 50, 10, 3);
turtle.applyForce(new Vector2(0, 9.8));
// turtle.applyForce(new Vector2(0, -5));
setInterval(function () {
    //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emitter.update(ctx, 0.5);
    turtle.render(ctx);
    // console.log('V:' + turtle.velocity.y);
    // console.log('A:' + turtle.acceleration.y);
    if (!turtle.checkBounds(canvas)) {
        emitter.moveTo(turtle.position);
    }
    else {
        // turtle.acceleration = new Vector2(0, 0);
        turtle.velocity = new Vector2(turtle.velocity.x, -turtle.velocity.y);
        // turtle.applyForce(new Vector2(0, -5));
    }
    turtle.move(0.5);
}, 100);
//# sourceMappingURL=test.js.map