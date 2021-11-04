// 特征：
// 1. 不允许重复声明；
// 2. 块儿级作用域（局部变量）；
// 3. 不存在变量提升；
// 4. 不影响作用域链；

// let关键字使用示例：
let a; // 单个声明
let b,c,d; // 批量声明
let e = 100; // 单个声明并赋值
let f = 521, g = 'iloveyou', h = []; // 批量声明并赋值

// 不允许重复声明：
let dog = "狗";
let dog = "狗";
// 报错：Uncaught SyntaxError: Identifier 'dog' has already been declared