"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var home_1 = require("./home");
// let modelName:modelObj;
// modelName = {
//   name:'wang'
// };
var imClaObj;
imClaObj = new home_1.claobj("liu");
console.log(imClaObj);
(function foo() {
    //*** Number***//
    var aNum;
    aNum = 1111;
    aNum = new Number(2222);
    console.log(aNum);
    var bnum;
    bnum = 1111;
    console.log(bnum);
    //*** String***//
    var aStr;
    aStr = "wang";
    aStr = new String("liu");
    console.log(aStr);
    var bstr;
    bstr = "wang";
    console.log(bstr);
    //*** Boolean ***//
    var aBooble;
    aBooble = true;
    aBooble = true;
    aBooble = new Boolean(false);
    console.log(aBooble);
    var bbooble;
    bbooble = true;
    console.log(bbooble);
    //*** Object ***//
    var aObj;
    aObj = {};
    aObj = new Object();
    aObj = [];
    aObj = function () {
    };
    console.log(aObj);
    var tom = {
        name: 'Tom',
        age: 25
    };
    console.log(tom);
    // 断言定义
    var dtom = {
        name: 'dtom',
        age: 25
    };
    console.log(dtom);
    //*** Array ***//
    var Arr;
    Arr = [1, 2, 3, 4];
    console.log(Arr);
    var Darr = [7, 8, 9, 10];
    console.log(Darr);
    var bArr;
    bArr = [1, 2, 3, 4];
    console.log(bArr);
    var fibonacci = [1, 1, 2, 3, 5];
    var dfibonacci = [1, 1, 2, 3, 5];
    console.log(dfibonacci);
    var objfibonacci = { name: "liu" };
    console.log(objfibonacci);
    //*** Function ***//
    var aFun;
    aFun = function () { };
    console.log(aFun);
    //函数声明 
    function sum(x, y) {
        return x + y;
    }
    //函数表达式  
    var mySum = function (x, y) {
        return x + y;
    };
    //函数表达式
    var youSum = function (x, y) {
        return x + y;
    };
    //使用接口定义会报错
    // let myObjSearch: ObjSearchFun;
    // myObjSearch = function(source: string, subString: string) {
    //     return source.search(subString) !== -1;
    // }
    //需要使用断言的方式
    var myObjSearch = function (source, subString) {
        return source.search(subString) !== -1;
    };
    myObjSearch.name = '11111';
    console.log(myObjSearch, 1111);
    //*** 枚举 ***//
    var Days;
    (function (Days) {
        Days[Days["Sun"] = 7] = "Sun";
        Days[Days["Mon"] = 8] = "Mon";
        Days[Days["Tue"] = 9] = "Tue";
        Days[Days["Wed"] = 10] = "Wed";
        Days[Days["Thu"] = 11] = "Thu";
        Days[Days["Fri"] = 12] = "Fri";
        Days[Days["Sat"] = 55555555555] = "Sat";
    })(Days || (Days = {}));
    ;
    console.log(Days["Sun"]);
    console.log(Days["Mon"]);
    console.log(Days["Tue"]);
    console.log(Days["Sat"]);
    var counter = function (start) { };
    console.log(counter);
    console.log("新的开始+++++++++++++++++++++");
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    var a = o.a, b = o.b;
    console.log(a);
    console.log(b);
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    keepWholeObject({ a: "wang" });
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
    var myArray;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
    var input = [1, 2];
    function f(_a) {
        var first = _a[0], second = _a[1];
        console.log(first);
        console.log(second);
    }
    f([1, 2]);
    function createSquare(config) {
    }
    ;
    var squareOptions = { color: "red", width: 100, name: "wwww" };
    var mySquare = createSquare(squareOptions);
    var configObj = {
        color: "red",
        width: 5000
    };
    var bSquareOptions = { color: "red", width: 100, name: "wwww" };
    configObj = bSquareOptions;
    ;
    ;
    ;
    ;
    //==========END==========
    //===============函数this===============提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面。
    function testThis(name) {
        // make sure `this` is unusable in this standalone function
        console.log(this);
        console.log(name);
    }
    testThis("wang");
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: [3],
        createCardPicker: function () {
            var _this = this;
            return function () {
                console.log(_this, 44444444);
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    var Handler = /** @class */ (function () {
        function Handler() {
            this.onClickGood = function (e) {
                console.log(888888);
            };
        }
        return Handler;
    }());
    var uiElement;
    uiElement = {
        addClickListener: function (fun) {
            console.log(fun);
            fun("1111");
        }
    };
    var h = new Handler();
    uiElement.addClickListener(h.onClickGood);
    function reverse(x) {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        }
        else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    //===============函数泛型的写法===============
    //第一种
    function identity(arg) {
        return arg;
    }
    //let output = identity<string>("myString");
    var output = identity("myString");
    //第二种
    var myIdentity = identity;
    function identityOne(arg) {
        return arg;
    }
    var youIidentityOne = identityOne;
    function identityTwo(arg) {
        return arg;
    }
    var youIidentityTwo = identityTwo;
    var objFun = function (start) { };
    objFun.interval = 123;
    objFun.reset = function () { };
    //===============类===============
    var ParentCla = /** @class */ (function () {
        function ParentCla(age) {
        }
        return ParentCla;
    }());
    var ChidrenCla = /** @class */ (function () {
        function ChidrenCla(name) {
            //    super();
        }
        return ChidrenCla;
    }());
    var parentDom = new ParentCla(11111);
    var childrenDom = new ChidrenCla("wang");
    parentDom = childrenDom;
    // childrenDom = parentDom;
    //泛型类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    // myGenericNumber.zeroValue = 0;
    // myGenericNumber.add = function(x, y) { return x + y; };
    var BeeKeeper = /** @class */ (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    var ZooKeeper = /** @class */ (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animalb = /** @class */ (function () {
        function Animalb() {
        }
        return Animalb;
    }());
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animalb));
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animalb));
    function createInstance(c) {
        return new c();
    }
    createInstance(Lion); // typechecks!
    function reverseOne(x) {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        }
        else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    ;
    //===============函数表类法===============
    var BeeKeepera = /** @class */ (function () {
        function BeeKeepera() {
            this.hasMask = 'wang';
        }
        return BeeKeepera;
    }());
    //方法一
    var FunClaOne;
    FunClaOne = BeeKeepera;
    var FunClaTwo;
    FunClaTwo = BeeKeepera;
    var claDemoOne = new FunClaOne();
    console.log(claDemoOne, 11111);
    var claDemoTwo = new FunClaTwo();
    console.log(claDemoTwo, 22222);
    var mapObj = {
        name: "wang"
    };
    //反向映射 类型
    var numDirection;
    (function (numDirection) {
        numDirection[numDirection["Up"] = 0] = "Up";
        numDirection[numDirection["Down"] = 1] = "Down";
        numDirection[numDirection["Left"] = 2] = "Left";
        numDirection[numDirection["Right"] = 3] = "Right";
    })(numDirection || (numDirection = {}));
    var AA = numDirection.Up;
    var BB = numDirection.Up;
    // let BB:numDirection.Up = numDirection.Down //Error
    var strDirection;
    (function (strDirection) {
        strDirection["Up"] = "UP";
        strDirection["Down"] = "DOWN";
        strDirection["Left"] = "LEFT";
        strDirection["Right"] = "RIGHT";
    })(strDirection || (strDirection = {}));
    var CC = strDirection.Up;
    var DD = strDirection.Up;
    // let DD:strDirection.Up = strDirection.Down //Error
    var mixtureDirection;
    (function (mixtureDirection) {
        mixtureDirection[mixtureDirection["No"] = 0] = "No";
        mixtureDirection["Yes"] = "YES";
    })(mixtureDirection || (mixtureDirection = {}));
    var EE = mixtureDirection.No;
    var FF = mixtureDirection.No;
    // let FF:mixtureDirection.No = mixtureDirection.Yes //Error
    var constantFileAccess;
    (function (constantFileAccess) {
        // constant members
        constantFileAccess[constantFileAccess["None"] = 0] = "None";
        constantFileAccess[constantFileAccess["Read"] = 2] = "Read";
        constantFileAccess[constantFileAccess["Write"] = 4] = "Write";
        constantFileAccess[constantFileAccess["ReadWrite"] = 6] = "ReadWrite";
    })(constantFileAccess || (constantFileAccess = {}));
    var GG = constantFileAccess.ReadWrite;
    // let HH:constantFileAccess.None = constantFileAccess.None //Error
    // let HH:mixtureDirection.No = mixtureDirection.Yes //Error
    var computedFileAccess;
    (function (computedFileAccess) {
        // computed member
        computedFileAccess[computedFileAccess["G"] = "123".length] = "G";
        computedFileAccess[computedFileAccess["R"] = "5674".length] = "R";
    })(computedFileAccess || (computedFileAccess = {}));
    var II = computedFileAccess.G;
    // let JJ:computedFileAccess.G = computedFileAccess.G  //Error
    var FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // computed member
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
    var E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function EObj(obj) {
        return obj.X;
    }
    // Works, since 'E' has a property named 'X' which is a number.
    console.log(EObj(E));
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var p;
    var q;
    p = q;
    // OK, because of structural typing
    // p = new Person();
    window.onmousedown = function (mouseEvent) {
        console.log(mouseEvent.button); //<- Error
    };
    var nameObj;
    nameObj = {
        name: "wang",
        age: 12
    };
    function area(s) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * Math.pow(s.radius, 2);
        }
    }
    ;
    var lxName;
    lxName = 1111;
    var personObj = {
        name: "wang"
    };
    //personObj.name ="liu" //name是可选属性，并且是只读的
    /////////////
    function unproxify(t) {
        var result = {};
        return result;
    }
    var originalProps = unproxify(personObj);
    ;
    var res = {};
    console.log(res);
})();
