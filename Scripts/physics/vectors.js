var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x_component = x;
        this.y_component = y;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        // Accessors
        get: function () {
            return this.x_component;
        },
        set: function (delta) {
            this.x_component += delta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this.y_component;
        },
        set: function (delta) {
            this.y_component += delta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            var x_square = Math.pow(this.x_component, 2);
            var y_square = Math.pow(this.y_component, 2);
            return Math.sqrt(x_square + y_square);
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
    Object.defineProperty(Vector2.prototype, "unit", {
        get: function () {
            var x_unit = this.x_component / this.magnitude;
            var y_unit = this.y_component / this.magnitude;
            return new Vector2(x_unit, y_unit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "normal", {
        get: function () {
            // should we choose the other direction?
            var x_normal = -this.y_component / this.magnitude;
            var y_normal = this.x_component / this.magnitude;
            return new Vector2(x_normal, y_normal);
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
    Vector2.prototype.scale = function (other) {
        this.x_component *= other.x;
        this.y_component *= other.y;
        return this;
    };
    Vector2.prototype.scaleInverse = function (other) {
        this.x_component /= other.x;
        this.y_component /= other.y;
        return this;
    };
    Vector2.prototype.add = function (other) {
        this.x_component += other.x;
        this.y_component += other.y;
        return this;
    };
    Vector2.prototype.subtract = function (other) {
        this.x_component -= other.x;
        this.y_component -= other.y;
        return this;
    };
    Vector2.prototype.multiply = function (factor) {
        this.x_component *= factor;
        this.y_component *= factor;
        return this;
    };
    Vector2.prototype.divide = function (factor) {
        this.x_component /= factor;
        this.y_component /= factor;
        return this;
    };
    return Vector2;
}());
export { Vector2 };
export default Vector2;
//# sourceMappingURL=vectors.js.map