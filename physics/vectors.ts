export class Vector2 {

  // Construction and instance properites
  private x_component:number;
  private y_component:number;

  constructor() {
    this.x_component = 0;
    this.y_component = 0;
  }

  // Accessors
  get x():number {
      return this.x_component;
  }

  get y():number {
      return this.y_component;
  }

  get magnitude():number {
      return Math.sqrt((this.x_component ^ 2) + (this.y_component ^ 2));
  }

  get direction():number {
      return Math.atan(this.y_component / this.x_component);
  }

  // Modifiers
  public update(new_x:number, new_y:number):Vector2 {
    this.x_component = new_x;
    this.y_component = new_y;
    return this;
  }

  public step(delta_x:number, delta_y:number):Vector2 {
    this.x_component += delta_x;
    this.y_component += delta_y;
    return this;
  }
}

export default Vector2;
