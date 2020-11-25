import Sprite from "./sprite.js";
import Vector2 from './vectors.js';
/*
 *
 */
var ParticleEmitter = /** @class */ (function () {
    function ParticleEmitter(spriteTemplates, position, magnitude, duration, wait) {
        var _this = this;
        this.position = new Vector2(position.x, position.y);
        this.spriteTemplates = [];
        spriteTemplates.forEach(function (template) {
            var copy = new Sprite(template.image_file, new Vector2(_this.position.x, _this.position.y), template.hitbox, template.mass, template.collidable, template.bounded);
            _this.spriteTemplates.push(copy);
        });
        this.magnitude = magnitude;
        this.duration = duration;
        this.wait = wait;
        this.sprites = [];
        this.durations = [];
        this.waitTimer = wait;
    }
    ParticleEmitter.prototype.spawn = function (direction, magnitude, index) {
        direction = direction % 2 * Math.PI;
        var velocity = new Vector2(Math.cos(direction) * magnitude, Math.sin(direction) * magnitude);
        var template = this.spriteTemplates[index];
        var copy = new Sprite(template.image_file, new Vector2(this.position.x, this.position.y), template.hitbox, template.mass, template.collidable, template.bounded);
        copy.velocity = velocity;
        this.sprites.push(copy);
        this.durations.push(0);
    };
    ParticleEmitter.prototype.spawnRandom = function () {
        var direction = Math.random() * 2 * Math.PI;
        var magnitude = Math.random() * this.magnitude;
        var templateIndex = Math.floor(Math.random() * this.spriteTemplates.length);
        this.spawn(direction, magnitude, templateIndex);
    };
    ParticleEmitter.prototype.moveTo = function (position) {
        this.position = new Vector2(position.x, position.y);
    };
    ParticleEmitter.prototype.update = function (ctx, timeStep) {
        if (this.durations[0] >= this.duration) {
            this.durations.shift();
            this.sprites.shift();
        }
        for (var i = 0; i < this.durations.length; i++) {
            this.durations[i] += timeStep;
        }
        if (this.waitTimer >= this.wait) {
            this.spawnRandom();
            this.waitTimer = 0;
        }
        this.waitTimer += timeStep;
        for (var i = 0; i < this.sprites.length; i++) {
            if (!this.sprites[i].checkBounds(ctx.canvas)) {
                this.sprites[i].move(timeStep);
            }
        }
        this.render(ctx);
    };
    ParticleEmitter.prototype.render = function (ctx) {
        this.sprites.forEach(function (sprite) {
            sprite.render(ctx);
        });
    };
    return ParticleEmitter;
}());
export { ParticleEmitter };
export default ParticleEmitter;
//# sourceMappingURL=particleEmitter.js.map