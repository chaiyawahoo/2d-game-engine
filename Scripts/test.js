import PhysicsObject from './physics/PhysicsObject.js';
import Vector2 from './physics/vectors.js';
var canvas = document.getElementById('test-canvas');
var ctx = canvas.getContext('2d');
var thing = new PhysicsObject();
setTimeout(function () {
    console.log("here");
}, 100);
console.log(thing.applyForce(new Vector2(0, -9.8)));
//# sourceMappingURL=test.js.map
