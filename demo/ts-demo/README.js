// # ts

// > base

/**变量声明时进行类型推论。**/         /**类型推论**/
/**变量初始化时进行类型检查。**/       /**类型检查**/
        //断言编译器默认程序员自己类型检测过，可以跳过类型检测。//值 as 类型
/**变量与变量之间进行赋值时，可以避免类型检查，但会检查两个变量类型的级别是否适合赋值操作。**/  /**类型兼容性  “普遍情况：一少为大;函数参数：以多为大”**/
//    声明变量时 ------ 也需声明变量类型 -------- 规定声明变量类型的规则 
     /***********************************************************************/
                             /**变量的类型**/
    /***********************************************************************/
    // any
    //    any                     无类型
    // void
    //    void                    空值
    // undefined
    //     undefined              null 和 undefined是所有类型的子类型;
    // null
    //     null                   null 和 undefined是所有类型的子类型;
    // 数字:
    //     构造函数法 Number > number
    //     number
    //     字面量类型
    // 字符串:
    //     构造函数法 String > string
    //     string
    //     字面量类型
    // 布尔:
    //     构造函数法 Boolean > boolean
    //     boolean
    //     字面量类型
    // 对象:                                 注：是引用类型的父级
    //     构造函数法 Object                         
    //     接口 
    //      字面量类型  
    // 函数:    
    //     构造函数法 Function
    //     接口                              
    //     表达式 （）=> 类型                 
    //     函数声明又名字面量类型               注：函数重载只能这种写法;声明出来的不是变量,只能调用不能进行赋值,因为在ts中声明出来的是函数值和变量。
    //                                  
    // 数组:
    //     构造函数与泛型 Array<any>
    //     接口 
    //     字面量类型
    //     基础类型[]
    //     元组                                注：number[]的级别 > [number,numder]
    // 类的类型:
    //     字面量类型                           注： 声明的不是变量，如同函数声明，但声明出来的可以表明实例化的类型即是构造函数法。
    //     implements 接口                     注： 同上
    //     typeof Greeter意思是Greeter类的类型
    //     函数表类法
    /****特殊的类型****/
    // 混合类型:                                 注：   函数与对象的混合
    //     接口的断言
    // 交叉类型:
    //      &
    // 联合类型:
    //      ||
    /****高级类型(接口的衍生类型)****/
    // 索引类型和字符串索引签名:
    // 映射类型:
    //       同态: type Partial<T> = { [P in keyof T]?: T[P] }
    //         在添加任何新属性之前可以拷贝所有存在的属性修饰符.
    //       非同态类型: [P in K]: T;
    //          非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。

    /****重点学习****/
    //   接口  (声明合并,继承,衍生类型)
    //   泛型在各个类型定义上的使用 （泛型约束）
    //   函数 （重载，传参this） 
    //   类    (修饰符,伪类)
    

    /***********************************************************************/
                             /**新增的值的类型**/
    /***********************************************************************/
    // 类                注：Greeter定义的是实例的类型，typeof Greeter意思是Greeter类的类型
    //      修饰符
    //      伪类
    // 枚举  
    //     枚举的成员： （数字和字符串）
    //            常数项
    //                  字面量项   
    //                          数字项（正负型）
    //                          字符串项       
    //                   常量枚举表达式项
    //
    //            计算所得项
    //
    //       普通枚举（所有成员项）            特点：成员结果是数字的时候有反向映射，是字符串的时候没有。
    //       常数枚举（枚举初始化成员为常数项） 特点：编译阶段会被删除
    //       联合枚举 (初始化字面量项)         特点：枚举成员成为了类型
    //       外部枚举
    //      


//类型断言
//通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
// 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

//类型兼容性
//TypeScript里的类型兼容性是基于结构子类型的:结构类型是一种只使用其成员来描述类型的方式.
//C#或Java里的类型兼容性是基于名义类型的:在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的

//类型推论
//一边明确，推论出给出一个兼容所有类型的类型给另一边
//两边都不明确类型，进行按上下文归类

//类型保护
//typeof,instanceof,null,断言,类型谓词

//类型别名
//type


















//    基本规则： 

        

//              在不进行赋值的情况下：

//                        不同类型的变量不能进行 相等 赋值;
//                        子类型的变量不能 等于 父类型的变量;
//                        但父类型的变量能 等于 子类型的变量;

//              对变量赋值相当于确定变量的类型;

//              null 和 undefined是所有类型的子类型;

//              any类型为具有"复制类型"功能的类型,不能理解为包含所有类型的最大层类型，只是你给它赋值成啥类型，它就是啥类型，和被赋值的类型同级;

//              函数的返回值进行赋值时，先检查被赋值变量的类型必须属于并大于定义返回值的类型（满足上面说的要求时），才会进行赋值。

//              将一个联合类型的变量指定为一个更加具体的类型可以使用类型断言





