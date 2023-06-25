var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (element) {
        this._boxes.push(element);
    };
    Box.prototype.remove = function () {
        if (this.count === 0) {
            throw new Error('Box is empty');
        }
        return this._boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
// Примери на използване:
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count); // Изход: 3
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count); // Изход: 2
box2.remove();
console.log(box2.count); // Изход: 1
