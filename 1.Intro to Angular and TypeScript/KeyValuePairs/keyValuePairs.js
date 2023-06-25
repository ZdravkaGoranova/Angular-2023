var KeyValuePairs = /** @class */ (function () {
    function KeyValuePairs() {
    }
    KeyValuePairs.prototype.setKeyValue = function (key, value) {
       
        this.key = key;
        this.value = value;
    };
    KeyValuePairs.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.value));
    };
    return KeyValuePairs;
}());
var kvp = new KeyValuePairs();
kvp.setKeyValue(4, "Steve");
kvp.display();
