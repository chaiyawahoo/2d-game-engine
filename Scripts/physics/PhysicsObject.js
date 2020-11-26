import Vector2 from './vectors.js';
/*
* This class will implement our physics entity interface, and be a parent class
* for all future physics enabled game objects
*/
var PhysicsObject = /** @class */ (function () {
    // Our constructor does not accept a velocity or an acceleration because
    // acceleration should only be added by an applied force, and velocity should
    // only update based on acceleration
    function PhysicsObject(position, hitbox, mass, collidable, bounded) {
        this.position = position;
        this.velocity = new Vector2(0, 0);
        this.acceleration = new Vector2(0, 0);
        this.hitbox = hitbox;
        this.mass = mass || 1;
        this.collidable = collidable || false;
        this.bounded = bounded || false;
    }
    // Physics calculations
    PhysicsObject.prototype.move = function (timeStep) {
        // Use implicit Euler's method to approximate new state
        this.velocity.step(this.acceleration.x * timeStep, this.acceleration.y * timeStep);
        this.position.step(this.velocity.x * timeStep, this.velocity.y * timeStep);
        /* TERMINAL VELOCITY BREAKS COLLISIONS
        let terminalVelocity = 100 * Math.sqrt(20*this.mass / this.hitbox.x);
        if (this.velocity.magnitude < terminalVelocity) {
          this.velocity.step(this.acceleration.x * timeStep, this.acceleration.y * timeStep);
        }
        */
        return this.position;
    };
    PhysicsObject.prototype.applyForce = function (force) {
        this.acceleration.step(force.x * this.mass, force.y * this.mass);
        return this.acceleration;
    };
    PhysicsObject.prototype.checkCollision = function (other) {
        if (!this.collidable)
            return false;
        // Check if our object is colliding with the other object
        if (this.position.x + this.hitbox.x > other.position.x && this.position.x - 8 < other.position.x + other.hitbox.x) {
            if (this.position.y + this.hitbox.y > other.position.y && this.position.y - 8 < other.position.y + other.hitbox.y) {
                return true;
            }
        }
        return false;
    };
    PhysicsObject.prototype.checkBounds = function (canvas) {
        if (!this.bounded)
            return false;
        // Check if our object is out of bounds, if so return true
        if (this.position.x < 0 || this.position.x + this.hitbox.x > canvas.width) {
            // Out of bounds horizontally
            return true;
        }
        if (this.position.y < 0 || this.position.y + this.hitbox.y > canvas.height) {
            // Out of bounds vertically
            return true;
        }
        return false;
    };
    // Rendering
    PhysicsObject.prototype.render = function (ctx) {
        ctx.fillStyle = "#ffbad2";
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.hitbox.x, this.hitbox.y);
        ctx.fill();
        ctx.closePath();
    };
    return PhysicsObject;
}());
export { PhysicsObject };
export default PhysicsObject;
//# sourceMappingURL=physicsObject.js.map