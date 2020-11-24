"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
var Vector2 = /** @class */ (function () {
    function Vector2() {
        this.x_component = 0;
        this.y_component = 0;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        // Accessors
        get: function () {
            return this.x_component;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this.y_component;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            return Math.sqrt((this.x_component ^ 2) + (this.y_component ^ 2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "direction", {
        get: function () {
            return Math.atan(this.y_component / this.x_component);
        },
        enumerable: false,
        configurable: true
    });
    // Modifiers
    Vector2.prototype.update = function (new_x, new_y) {
        this.x_component = new_x;
        this.y_component = new_y;
        return this;
    };
    Vector2.prototype.step = function (delta_x, delta_y) {
        this.x_component += delta_x;
        this.y_component += delta_y;
        return this;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;
exports.default = Vector2;
//# sourceMappingURL=vectors.js.map