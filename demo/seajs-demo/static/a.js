define(function (require, exports, module) {
    console.log("a");
    var B = require('b');

    console.log("出b");
    var a = "22222"
    exports.a = a;
})