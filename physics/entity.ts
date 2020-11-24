import Vector2 from "./vectors.js"

/*
 * This is our interface that will represent all
 * physics-objects in our game environments.
 */
export interface Entity {
  // Instance properties for all physics entities
  position:Vector2;
  velocity:Vector2;
  acceleration:Vector2;
  hitbox:Vector2;
  mass:number;
  collidable:boolean;
  bounded:boolean;
  timeStep:number;

  // Physics calculations
  move():void;
  applyForce(force:Vector2):void;
  checkCollision(other:Entity):boolean;
  checkBounds(canvas:HTMLCanvasElement):boolean;

  // Rendering
  render(ctx:CanvasRenderingContext2D):void;
}

export default Entity
