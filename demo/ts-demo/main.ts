import {claobj } from "./home";


// let modelName:modelObj;
// modelName = {
//   name:'wang'
// };
let imClaObj:claobj;
imClaObj = new claobj("liu");
console.log(imClaObj);



(function foo() {

//*** Number***//
let aNum : Number;
aNum = 1111;
aNum = new Number(2222)
console.log(aNum);

let bnum : number;
bnum = 1111;

console.log(bnum);

//*** String***//
let aStr : String;
aStr = "wang";
aStr = new String("liu")
console.log(aStr);

let bstr : string;
bstr = "wang";

console.log(bstr);

//*** Boolean ***//
let aBooble : Boolean;
aBooble = true;
aBooble = true;
aBooble = new Boolean(false)
console.log(aBooble);

let bbooble : boolean;
bbooble = true;

console.log(bbooble);

//*** Object ***//
let aObj : Object;
aObj = {};
aObj = new Object();
aObj = [];
aObj = function (){
	
}
console.log(aObj);
    // 接口定义
    interface Person {
        name: string;
        age: number;
    }

        let tom: Person = {
            name: 'Tom',
            age: 25
        };
        console.log(tom);
        // 断言定义
        let dtom = <Person>{
            name: 'dtom',
            age: 25
        };
        console.log(dtom);


//*** Array ***//
let Arr : Array<any>;
Arr = [1,2,3,4];
console.log(Arr);

let Darr = <Array<any>>[7,8,9,10];
console.log(Darr);


    let bArr : any[];
    bArr = [1,2,3,4];
    console.log(bArr);
    
    interface NumberArray {
        [index: number]: number;
    }
    let fibonacci: NumberArray = [1, 1, 2, 3, 5];
    let dfibonacci  = <NumberArray>[1, 1, 2, 3, 5];
    console.log(dfibonacci);

    interface ObjNumberArray {
        [index: number]: number;
        
    }
    let objfibonacci  = <ObjNumberArray>{name:"liu"}
    console.log(objfibonacci)
    


   
   

//*** Function ***//
let aFun:Function;
aFun = function(){}

console.log(aFun);

    //函数声明 
    function sum(x: number, y: number): number {
        return x + y;
    }
    //函数表达式  
    let mySum = function (x: number, y: number): number {
        return x + y;
    };
    //函数表达式
    let youSum: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };
    //单独的函数--接口定义
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    
        // let mySearch: SearchFunc;
        // mySearch = function(source: string, subString: string) {
        //     return source.search(subString) !== -1;
        // }
        // 断言定义
        // let mySearch = <SearchFunc>function(source: string, subString: string) { };
    //函数对象--接口定义
    interface ObjSearchFun {
        (source: string, subString: string): boolean;
        name:string;
    }
        //使用接口定义会报错
        // let myObjSearch: ObjSearchFun;
        // myObjSearch = function(source: string, subString: string) {
        //     return source.search(subString) !== -1;
        // }
        //需要使用断言的方式
        let myObjSearch = <ObjSearchFun>function(source: string, subString: string) {
                return source.search(subString) !== -1;
            }
            myObjSearch.name = '11111';
        console.log(myObjSearch,1111)





//*** 枚举 ***//
enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>55555555555};


console.log(Days["Sun"]); 
console.log(Days["Mon"]); 
console.log(Days["Tue"]); 
console.log(Days["Sat"]); 

interface Counter {
    (start: number): string;
   
}


let counter = <Counter>function (start: number) { };



console.log(counter)


console.log("新的开始+++++++++++++++++++++");

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};


let {a, b}: {a: string, b: number} = o;
console.log(a);
console.log(b)


function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

keepWholeObject({a:"wang"});



interface NumberDictionary {
    [index: string]: string;
    length: string;    // 可以，length是number类型
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
  }

  class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Dog;
}


interface StringArray {
    [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  
  let myStr: string = myArray[0];



  let input = [1, 2];
  function f([first, second]:[number,number]) {
    console.log(first);
    console.log(second);
}
f([1,2])
//不能直接传入input，因为input被类型推断，number[],不能被元组[number,number]进行赋值。反过来是可以的。
//f(input)

interface SquareConfig {
    color: string;
    width: number;
}

interface BsquareConfig {
    color: string;
    width: number;
    name: string;
}
function createSquare(config: SquareConfig): void {
    
};
let squareOptions = { color: "red", width: 100 ,name:"wwww"};
let mySquare = createSquare(squareOptions);


 let configObj : SquareConfig = {
    color: "red",
    width: 5000,
 };
 let bSquareOptions : BsquareConfig = { color: "red", width: 100 ,name:"wwww"};

configObj = bSquareOptions;
 
//====================函数返回函数写法====================  
interface Parent{
    (source: string, subString: string): boolean;
}

//第一种

// function parentFun():Parent{
//     return (source: string, subString: string) => {
//         return true
//      }
// };

//第二种

// function parentFun(): () => string{
//     return () => {
//         return ""
//      }
// };

//第三种

// let parentFun:() => Parent;
// parentFun = function():Parent{
//     return (source: string, subString: string) => {
//         return true
//     }
// }

//第四种

// let parentFun:() => () => string;
// parentFun =  function(){
//     return () => {
//         return ''
//     }
// };

//====================函数返回函数在对象中的写法====================

interface ObjFunParent{
    (source: string, subString: string): ObjOverlapFunParent;
};
interface ObjOverlapFunParent{
    (source: string, subString: string): boolean;
};

interface objParent {
    name:string;
    show:ObjFunParent;//第一种 接口形式的
};

interface ObjbdParent {
    name:string;
    ashow():ObjOverlapFunParent;//第二种 函数声明加接口
    bshow():() => string;//第三种 函数声明加函数表达式
    cshow:() => () => string;//第四种 函数表达式
};
//==========END==========

//===============函数this===============提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面。
function testThis(this: any,name:string) {
    // make sure `this` is unusable in this standalone function
    console.log(this);
    console.log(name);
}
testThis("wang");


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this:Deck):() => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: [3],
    createCardPicker: function(this: Deck) {
        return () => {
            console.log(this,44444444)
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//this参数，在回调函数里被定义
interface UIElement {
    addClickListener(onclick: (this: void, e: string) => void): void;
}

class Handler {
    info: string;
    onClickGood =  (e: string) => {
          console.log(888888)
    }
}
let uiElement:UIElement;
uiElement = {
    addClickListener(fun){
      console.log(fun);
      fun("1111");
    } 
}
let h = new Handler();
uiElement.addClickListener(h.onClickGood);

//===============函数重载的写法===============
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//===============函数泛型的写法===============

//第一种

function identity<T>(arg: T): T {
    return arg;
}
//let output = identity<string>("myString");
let output = identity("myString"); 

//第二种

let myIdentity: <U>(arg: U) => U = identity;

//第三种
//3.1
interface GenericIdentityFnOne {
    <T>(arg: T): T;
}

function identityOne<T>(arg: T): T {
    return arg;
}

let youIidentityOne: GenericIdentityFnOne = identityOne;

//3.2
interface GenericIdentityFnTwo<T> {
    (arg: T): T;
}

function identityTwo<T>(arg: T): T {
    return arg;
}

let youIidentityTwo: GenericIdentityFnTwo<number> = identityTwo;

//===============函数对象===============

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
let objFun:Counter = <Counter>function (start: number) { };
    objFun.interval = 123;
    objFun.reset = function () { };

//===============类===============
class ParentCla {
    age:number;
    name:string;
    constructor(age:number) {
        
    }
}
class ChidrenCla {
    age:number;
    name:string;
    gender:string;
    constructor(name:string) {
    //    super();
    }
}

let parentDom = new ParentCla(11111);
let childrenDom = new ChidrenCla("wang");
parentDom = childrenDom;
// childrenDom = parentDom;
//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animalb {
    numLegs: number;
}

class Bee extends Animalb {
    keeper: BeeKeeper;
}

class Lion extends Animalb {
    keeper: ZooKeeper;
}

function createInstance<A extends Animalb>(c: new () => A): A {
    return new c();
}

createInstance(Lion);  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!



// function create<T>(c: {new(): T; }): T {
//     return new c();
// }

// creat();

//===============函数的兼容===============
function reverseOne(x: number): number;
function reverseOne(x: string): string;
function reverseOne(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
};

//===============函数表类法===============
class BeeKeepera {
    hasMask = 'wang';
} 
//方法一
let FunClaOne: new() => BeeKeepera;
FunClaOne = BeeKeepera;

//方法二
interface claFunObj {
    new():BeeKeepera;
}
let FunClaTwo:claFunObj;
FunClaTwo = BeeKeepera;


let claDemoOne = new FunClaOne();
console.log(claDemoOne,11111)

let claDemoTwo = new FunClaTwo();
console.log(claDemoTwo,22222)

//==============枚举=============
interface mapInterObj{
    name:string
}
let mapObj:mapInterObj = {
    name:"wang"
}
//反向映射 类型
enum numDirection {
    Up,
    Down,
    Left,
    Right,
}
let AA:numDirection = numDirection.Up
let BB:numDirection.Up = numDirection.Up 
// let BB:numDirection.Up = numDirection.Down //Error
enum strDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
let CC:strDirection = strDirection.Up
let DD:strDirection.Up = strDirection.Up
// let DD:strDirection.Up = strDirection.Down //Error
enum mixtureDirection {
    No = 0,
    Yes = "YES",
}
let EE:mixtureDirection = mixtureDirection.No
let FF:mixtureDirection.No = mixtureDirection.No
// let FF:mixtureDirection.No = mixtureDirection.Yes //Error
enum constantFileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
}
let GG:constantFileAccess = constantFileAccess.ReadWrite
// let HH:constantFileAccess.None = constantFileAccess.None //Error
// let HH:mixtureDirection.No = mixtureDirection.Yes //Error
enum computedFileAccess {
  
    // computed member
    G = "123".length,
    R = "5674".length
}
let II:computedFileAccess = computedFileAccess.G
// let JJ:computedFileAccess.G = computedFileAccess.G  //Error
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

enum E {
    X, Y, Z
}

function EObj(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
console.log(EObj(E));

//=============类型兼容性=============

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
let q: Person;
p = q;
// OK, because of structural typing
// p = new Person();


window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};
//
interface nameOne {
    name:string
}
interface nameTwo {
    age:number
}

let nameObj: nameOne&nameTwo
nameObj = {
    name:"wang",
    age:12
}


interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "triangle";
    name: number;
}
type Shape = Square | Rectangle | Circle | Triangle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
};

//===================索引类型和字符串索引签名===================
interface Map<T> {
    [key: string]: T;
}
// let keys: keyof Map<number>; // string
// keys = 111
// let value: Map<number>['foo']; // number

// value = 'wang'


// interface MapOne {
//     name:number;
// }
// let value:MapOne["name"];
interface lx {
    [key: string]:string
}
let lxName:keyof lx;
lxName = 1111

//==========映射类型==========
// interface PersonT {
//     name: string;
//     age: number;
// }

// interface PersonReadonly {
//     readonly name: string;
//     readonly age: number;
// }
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// }
// type ReadonlyPerson = Readonly<PersonT>;

// type Keys = 'option1' | 'option2';
// type Flags = { [K in Keys]: boolean };
// let flagName:Flags = {
//     option1:false,
//     option2:false
// }

//同态

interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}
type Readonly<T> = {
     [P in keyof T]?: T[P];
}
type ReadonlyPerson = Readonly<PersonReadonly>;
let personObj: ReadonlyPerson = {
      name:"wang"
}
//personObj.name ="liu" //name是可选属性，并且是只读的
/////////////

function unproxify<T>(t: Readonly<T>): T {
    let result = {} as T;
    return result;
}
let originalProps = unproxify(personObj);


interface anobj {
    name:string
};
let res = {} as anobj;
console.log(res)

})()




