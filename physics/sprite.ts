import PhysicsObject from "./physicsObject.js";
import Vector2 from './vectors.js';
/*
 * This class will extend the physics object class so images can be used.
 */
export class Sprite extends PhysicsObject {
  public image_file:string;
  private sprite_element:HTMLImageElement;

  constructor(image_file:string, position:Vector2, hitbox:Vector2, mass:number,
   collidable:boolean, bounded:boolean) {
    super(position, hitbox, mass, collidable, bounded);
    this.image_file = image_file;
    this.sprite_element = document.createElement("img") as HTMLImageElement
    this.sprite_element.src = this.image_file;
  }

  public render(ctx:CanvasRenderingContext2D):void {
    ctx.beginPath();
      ctx.drawImage(
        this.sprite_element,
        this.position.x,
        this.position.y,
        this.hitbox.x,
        this.hitbox.y
      );
      ctx.closePath();
  }
}

export default Sprite;
