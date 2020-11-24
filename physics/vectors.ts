export class Vector2 {

  // Construction and instance properites
  private x_component:number;
  private y_component:number;

  constructor(x:number, y:number) {
    this.x_component = x;
    this.y_component = y;
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

  set x(delta:number) {
    this.x_component += delta;
  }

  set y(delta:number) {
    this.y_component += delta;
  }

  // Modifiers
  public update(new_x:number, new_y:number):Vector2 {
    this.x_component = new_x;
    this.y_component = new_y;
    return this;
  }
}

export default Vector2;
