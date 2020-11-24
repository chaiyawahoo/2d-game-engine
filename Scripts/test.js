import PhysicsObject from './physics/PhysicsObject.js';
import Vector2 from './physics/vectors.js';
var canvas = document.getElementById('test-canvas');
var ctx = canvas.getContext('2d');
var thing = new PhysicsObject(new Vector2(50, 5), new Vector2(50, 50), 1, false, true);
thing.applyForce(new Vector2(0, 9.8));
setInterval(function () {
    //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    thing.render(ctx);
    if (!thing.checkBounds(canvas)) {
        thing.move(0.05);
    }
}, 10);
//# sourceMappingURL=test.js.map