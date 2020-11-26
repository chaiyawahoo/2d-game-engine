import Sprite from "./sprite.js";
import Vector2 from './vectors.js';
/*
 *
 */
export class ParticleEmitter {
  public spriteTemplates:Sprite[];
  public position:Vector2;
  public magnitude:number;
  public duration:number;
  public wait:number;
  sprites:Sprite[];
  durations:number[];
  waitTimer:number;

  constructor(spriteTemplates:Sprite[], position:Vector2, magnitude:number, duration:number, wait:number) {
    this.position = new Vector2(position.x, position.y);
    this.spriteTemplates = [];
    spriteTemplates.forEach(template => {
      let copy = new Sprite(template.image_file, new Vector2(this.position.x, this.position.y), template.hitbox, template.mass, template.collidable, template.bounded);
      this.spriteTemplates.push(copy);
    });
    this.magnitude = magnitude;
    this.duration = duration;
    this.wait = wait;
    this.sprites = [];
    this.durations = [];
    this.waitTimer = wait;
  }

  public spawn(direction:number, magnitude:number, index:number) {
    direction = direction % 2 * Math.PI;
    let velocity = new Vector2(Math.cos(direction) * magnitude, Math.sin(direction) * magnitude);
    let template = this.spriteTemplates[index];
    let copy = new Sprite(template.image_file, new Vector2(this.position.x, this.position.y), template.hitbox, template.mass, template.collidable, template.bounded);
    copy.velocity = velocity;
    this.sprites.push(copy);
    this.durations.push(0);
  }

  public spawnRandom() {
    let direction = Math.random() * 2 * Math.PI;
    let magnitude = Math.random() * this.magnitude;
    let templateIndex = Math.floor(Math.random() * this.spriteTemplates.length);
    this.spawn(direction, magnitude, templateIndex);
  }

  public moveTo(position:Vector2) {
    this.position.update(position.x, position.y);
  }

  public update(ctx:CanvasRenderingContext2D, timeStep:number) {
    if (this.durations[0] >= this.duration) {
      this.durations.shift();
      this.sprites.shift();
    }
    for (let i = 0; i < this.durations.length; i++) {
      this.durations[i] += timeStep;
    }
    if (this.waitTimer >= this.wait) {
      this.spawnRandom();
      this.waitTimer = 0;
    }
    this.waitTimer += timeStep;
    for (let i = 0; i < this.sprites.length; i++) {
      if (!this.sprites[i].checkBounds(ctx.canvas)) {
        this.sprites[i].move(timeStep);
      }
    }
    this.render(ctx)
  }

  public render(ctx:CanvasRenderingContext2D) {
    this.sprites.forEach(sprite => {
      sprite.render(ctx);
    });
  }
}

export default ParticleEmitter;
