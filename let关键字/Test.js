// 特征：
// 1. 不允许重复声明；
// 2. 块儿级作用域（局部变量）；
// 3. 不存在变量提升；
// 4. 不影响作用域链；

// let关键字使用示例：
let a; // 单个声明
let b, c, d; // 批量声明
let e = 100; // 单个声明并赋值
let f = 521, g = 'iloveyou', h = []; // 批量声明并赋值

// 不允许重复声明
let dog = "狗";
let dog = "狗";
// 报错：Uncaught SyntaxError: Identifier 'dog' has already been declared

//块儿级作用域（局部变量）
{
  let cat = "猫";
  console.log(cat)
}
console.log(cat)
// 报错：Uncaught ReferenceError: cat is not defined

// 不存在变量提升
// 什么是变量提升：就是在变量创建之前使用（比如输出：输出的是默认值），let不存在，var存在；
console.log(people1);//可输出默认值
console.log(people2);//报错：Uncaught ReferenceError: people2 is not defined
var people1 = "大哥";//存在变量提升
let people2 = "二哥";//不存在变量提升

//不影响作用域链
// 什么是作用域链：很简单，就是代码块内有代码块，跟常规编程语言一样，上级代码块中 的局部变量下级可用
{
  let p = "大哥";

  function fn() {
    console.log(p);//这里是可以使用的
  }

  fn();
}