1995年,JavaScript问世。它的主要用途是代替Perl等服务器端语言处理输入验证。
### 标题JavaScript实现：
**Javascript包括:核心（ECMAScript）**，文档对象模型（DOM），浏览器对象模型（BOM）
ECMAScript：即ECMA-262定义的语言，并不局限于Web浏览器。，这门语言没有输入和输出之类的方法。Web浏览器只是ECMAScript实现可能存在的一种宿主环境。定义了：语法，类型，语句，关键字，保留字，操作符，全局对象
DOM:文档对象模型，提供与网页内容交互的方法和接口
BOM:浏览器对象模型：提供与浏览器交互的方法和接口

### 浏览器
IE、Firefox、Chrome、Safari和Opera


##  Javascript语法

1.区分大小写
2.标识符：（就是变量、函数、属性或函数参数的名称）第一个字符必须是一个字母、下划线（ _ ）或美元符号（ $ ）；剩下的其他字符可以是字母、下划线、美元符号或数字
关键字，保留字true 、 false 和 null 不能作为标识符。
3.注释：  //单行注释       /*多行注释*/
4.严格模式：ECMAScript 3的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行："use strict";也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：
5.语句：ECMAScript中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾
6.关键字与保留字：保留的关键字不能用作标识符或属性名
##  Javascript变量
变量可以用于保存任何类型的数据。声明变量： var 、 const 和 let
**var:**后跟变量名,即标识符     var message;此可以同时定义变量并设置它的值：var message = "hi";
 **var 声明作用域**
 ** const **声明变量时必须同时初始化变量，修改 const 声明的变量会导致运行时错误。
 **let**  let 声明的变量不会在作用域中被提升,暂时性死区


## 数据类型
ECMAScript有6种简单数据类型（也称为原始类型）：Undefined 、 Null 、 Boolean 、 Number 、String和Symbol 。 Symbol （符号）是ECMAScript 6新增的。还有一种复杂数据类型叫 Object （对象），使用typeof操作符可以检测数据类型
"undefined" 表示值未定义；
"boolean" 表示值为布尔值；
"string" 表示值为字符串；
"number" 表示值为数值；
"object" 表示值为对象（而不是函数）或 null ；
"function" 表示值为函数；
"symbol" 表示值为符号。

## 操作符
**一元操作符**：递增/递减操作符**位操作符 布尔操作符 乘性操作符  指数操作符  加性操作符 关系操作符  相等操作符  条件操作符  赋值操作符  逗号操作符**

## 语句

语句通常使用一或多个 关键字完成既定的任务

**if语句**

if(表达式)  执行语句  else执行语句

**do-while语句**

do-while 语句是一种后测试循环语句，即循环体中的代码执 行后才会对退出条件进行求值。循环体内的代码至少执行 一次

do{

statement

}while(expression)



**while语句**

while 语句是一种先测试循环语句，即先检测退出条件，再执 行循环体内的代码。因此， while 循环体内的代码有可能不会执 行。

while(expression) statement



**for语句**

for 语句也是先测试语句，只不过增加了进入循环之前的初始 化代码，以及循环执行后要执行的表达式

for (initialization; expression; post-loopexpression) statement

**for-in 语句**

for-in 语句是一种严格的迭代语句，用于枚举对象中的非符号 键属性

for (property in expression) statement

****

**for-of 语句**

for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元 素

for (property of expression) statement



**标签语句**

标签语句用于给语句加标签

label: statement



**break 和 continue 语句**

break 语句用于立即退出循环，强制执行循环后的下 一条语句。而 continue 语句也用于立即退出循环，但会再次从循 环顶部开始执行



**with 语句**

with 语句的用途是将代码作用域设置为特定的对象

with (expression) statement;



**switch 语句**

switch 语句是与 if 语句紧密相关的一种流控制语句，从其他 语言借鉴而来

```
switch (expression) { 
	case value1: statement 
	break;
    case value2: statement 
    break;
    case value3: statement 
    break; 
    case value4: statement 
    break; default: statement 
  }
```

这里的每个 case （条件/分支）相当于：“如果表达式等于后面 的值，则执行下面的语句。” break 关键字会导致代码执行跳出 switch 语句。如果没有 break ，则代码会继续匹配下一个条 件。 default 关键字用于在任何条件都没有满足时指定默认执行的 语句（相当于 else 语句）。

### 函数

函数对任何语言来说都是核心组件，因为它们可以封装语句，然 后在任何地方、任何时间执行。ECMAScript中的函数使用 function 关键字声明，后跟一组参数，然后是函数体。

```
function Name(arg0, arg1,...,argN) { 

	statements

 }
```

通过函数名可以调用函数

函数严格模式

函数不能以 eval 或 arguments 作为名称； 函数的参数不能叫 eval 或 arguments ； 两个函数的参数不能叫同一个名称。