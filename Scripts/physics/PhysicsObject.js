import Vector2 from './vectors.js';
/*
 * This class will implement our physics entity interface, and be a parent class
 * for all future physics enabled game objects
 */
var PhysicsObject = /** @class */ (function () {
    function PhysicsObject() {
        this.position = new Vector2(50, 0);
        this.velocity = new Vector2(0, 0);
        this.acceleration = new Vector2(0, 0);
        this.hitbox = new Vector2(50, 50);
        this.mass = 1;
        this.timeStep = .05;
    }
    // Physics calculations
    PhysicsObject.prototype.move = function () {
        // Use implicit Euler's method to approximate new state
        this.position.step(this.velocity.x * this.timeStep, this.velocity.y * this.timeStep);
        var terminalVelocity = 100 * Math.sqrt(20 * this.mass / this.hitbox.x);
        if (this.velocity.magnitude < terminalVelocity) {
            this.velocity.step(this.acceleration.x * this.timeStep, this.acceleration.y * this.timeStep);
        }
        return this.position;
    };
    PhysicsObject.prototype.applyForce = function (force) {
        this.acceleration.x += force.x * this.mass;
        this.acceleration.y += force.y * this.mass;
        return this.acceleration;
    };
    PhysicsObject.prototype.checkCollision = function (other) {
        return true;
    };
    PhysicsObject.prototype.checkBounds = function (canvas) {
        return true;
    };
    // Rendering
    PhysicsObject.prototype.render = function (ctx) {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.hitbox.x, this.hitbox.y);
        ctx.fill();
        ctx.closePath();
    };
    return PhysicsObject;
}());
export { PhysicsObject };
export default PhysicsObject;
//# sourceMappingURL=PhysicsObject.js.map