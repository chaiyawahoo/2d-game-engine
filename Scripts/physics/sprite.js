var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import PhysicsObject from "./physicsObject.js";
/*
 * This class will extend the physics object class so images can be used.
 */
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite(image_file, position, hitbox, mass, collidable, bounded) {
        var _this = _super.call(this, position, hitbox, mass, collidable, bounded) || this;
        _this.image_file = image_file;
        _this.sprite_element = document.createElement("img");
        _this.sprite_element.src = _this.image_file;
        return _this;
    }
    Sprite.prototype.render = function (ctx) {
        ctx.beginPath();
        ctx.drawImage(this.sprite_element, this.position.x, this.position.y, this.hitbox.x, this.hitbox.y);
        ctx.closePath();
    };
    return Sprite;
}(PhysicsObject));
export { Sprite };
export default Sprite;
//# sourceMappingURL=sprite.js.map