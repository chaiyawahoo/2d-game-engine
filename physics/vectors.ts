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
    const x_square:number = Math.pow(this.x_component, 2);
    const y_square:number = Math.pow(this.y_component, 2);
    return Math.sqrt(x_square + y_square);
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

  public step(delta_x:number, delta_y:number):Vector2 {
    this.x_component += delta_x;
    this.y_component += delta_y;
    return this;
  }
}

export default Vector2;
