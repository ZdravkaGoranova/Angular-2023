var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data.prototype.say = function () {
        return "{ method: '".concat(this.method, "',\n        uri: '").concat(this.uri, "',\n        version: '").concat(this.version, "',\n        message: '").concat(this.message, "',\n        response: ").concat(this.response, ",\n        fulfilled: ").concat(this.fulfilled, " }");
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.say());
