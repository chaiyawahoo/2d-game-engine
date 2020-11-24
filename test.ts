import PhysicsObject from './physics/PhysicsObject';
import Vector2 from './physics/vectors';
let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
let thing = new PhysicsObject();
console.log(thing.applyForce(new Vector2(0,-9.8)));
