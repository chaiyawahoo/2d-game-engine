import Entity from "./entity.js";
import Vector2 from './vectors.js';
/*
 * This class will implement our physics entity interface, and be a parent class
 * for all future physics enabled game objects
 */
 export class PhysicsObject implements Entity {
   // Instance properties for all physics entities
   public position:Vector2;
   public velocity:Vector2;
   public acceleration:Vector2;
   public hitbox:Vector2;
   public mass:number;
   public collidable:boolean;
   public bounded:boolean;
   public timeStep:number;

   constructor() {
     this.position = new Vector2(50, 0);
     this.velocity = new Vector2(0, 0);
     this.acceleration = new Vector2(0, 0);
     this.hitbox = new Vector2(50, 50);
     this.mass = 1;
     this.timeStep = .05;
   }

   // Physics calculations
   public move():Vector2 {
     // Use implicit Euler's method to approximate new state
     this.position.step(this.velocity.x * this.timeStep, this.velocity.y * this.timeStep);

     let terminalVelocity = 100 * Math.sqrt(20*this.mass / this.hitbox.x);
     if (this.velocity.magnitude < terminalVelocity) {
       this.velocity.step(this.acceleration.x * this.timeStep, this.acceleration.y * this.timeStep);
     }
     return this.position;
   }

   public applyForce(force:Vector2):Vector2 {
     this.acceleration.x += force.x * this.mass;
     this.acceleration.y += force.y * this.mass;
     return this.acceleration;
   }

   public checkCollision(other:Entity):boolean {
     return true;
   }

   public checkBounds(canvas:HTMLCanvasElement):boolean {
     return true;
   }

   // Rendering
   public render(ctx:CanvasRenderingContext2D):void {
     ctx.fillStyle = "#fff";
     ctx.beginPath();
     ctx.rect(this.position.x, this.position.y, this.hitbox.x, this.hitbox.y);
     ctx.fill();
     ctx.closePath();
   }
 }

 export default PhysicsObject;
