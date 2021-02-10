#  									JavaScript笔记



##  什么是JS？JS的组成？

ECMAScript 核心        						数据类型  运算符  语句  函数  数组   字符串 

DOM 文档对象模型

BOM 浏览器对象模型

JS就是属性和方法的集合。

##  四种输出方式

1) 打印到页面上

​            document.write("输出的内容");     识别HTML标签

2) 在控制台中输出

​            console.log("输出的内容");    字符串

3）输出到浏览器的提示框

​            alert（"输出的内容"）;     弹框

4）输入到浏览器的输入提示框

​            prompt(“输入的内容”，默认值)     对话框

##  注释和引入

js注释：  单行注释   // （快捷键 Ctrl+?）       多行注释 /*  注释的内容   */

```js
    js引入：  内部引入    直接在页面的script标签对里面写代码     
    					一般情况下script标签放在body的最下面 
              外部引入    head标签里面  
                 <script src='文件路径.js'><\/script>
```
##  标识符

1.概念  变量、函数、属性的名字，或者函数的参数   

2.命名规则  a.字母数字下划线$组成，不能以数字开头， b.严格区分大小写  c.不能是JS关键字和保留字   



##  变量及变量声明    

// 变量   可变的量              var 变量名 = 变量值

  1. 先声明，后赋值   2.边声明，边赋值    3.一次性声明多个变量并赋值



## Js数据类型 

  6种数据类型  

5种简单数据类型   String(字符串)   Number(数值)   Boolean(布尔)   Undefined(未定义)   Null(空)   
 复杂数据类型  1种   Object(对象) 

##  运算符

```js
用于做运算的符号就叫运算符

      算术运算符 + - * / %  ++ --
      逻辑运算符  &&  ||  !
      比较运算符  > <  >=   <=   ==  ===  !=   !==
      赋值运算符  = += -= *= /= %=
      其他运算符 - 三元运算符 条件表达式 ? 条件表达式为真执行的语句 : 条件表达式为假执行的语句

      表达式：
      把相同类型的数据用运算符按照一定的顺序拼接起来的，有意义的式子就是表达式


 &&  并且    全真为真（ 左右的结果都为真），其余为假   
        ||  或      全假为假，其余为真 ,只要有一个为真，就是true
        !   取反    - 真变假，假变真
```

##  语句

js里面的一整句话或者表达式,以分号结尾

分号：代表一个语句执行结束

分支/条件语句：条件语句是通过判断指定表达式的值来决定执行还是跳过某些语句

单分支、双分支、多分支

```javascript

      if(表达式){

      }

      if(表达式){
         表达式为真
      }else{
         表达式为假
      }


      if(表达式1){
        表达式1为真
      }else if(表达式2){
          表达式1为假2为真
      }else{
          表达式1、2都为假
      }

 for(var a = 3;a<10;a++){
        循环体 ----循环执行的语句
 }


     执行顺序： 1.变量初始化  2.判断条件是否满足  3.执行循环体 {}里面的语句   4.变量更新
     
                2.判断条件是否满足  3.执行循环体 {}里面的语句   4.变量更新
                
                直到条件不满足结束循环


      switch (key) {
        case value:
          //代码块1          
          break;
        case value:
          //代码块2         
          break;     
        default:
          break;
      }  
         
if(表达式){
   表达式的结果为真
}

if (表达式) {
      表达式为真
} else {
      表达式为假
}

if (表达式1) {
      表达式1为真
} else if(表达式2) {
      表达式1假 - 表达式2真
} else{
      表达式1假 - 表达式2假
}

switch (表达式/变量) {
      	case 变量的值:
         // 执行语句1
            break;
         case 变量的值:
         // 执行语句2
            break;
            
         default:
         // 其他条件都不满足，执行语句end
            break;
 }

switch的条件---变量不会发生数据类型转换    ===

循环语句就是程序执行的一个回路，可以让一部分代码重复执行
        for 
           for(初始化变量;循环条件检测;更新变量值){
	
           }

        while

           while(条件){
             //条件为true执行的代码
          }
        
        do while

          do {
             //先执行一次再判断条件
          } while (条件);

        当表达式条件不满足的 while不会执行，但是do-while会执行一次

 while (条件) {
           条件为真执行,条件为假的时候跳出循环
         }


   do {
        循环体
     } while (条件);     // 条件为真执行循环体，条件为假结束循环

      while 与 do while区别    while先判断条件，条件为真才执行  dowhile无论条件真假，都要先执行一次

 break      结束退出循环

       continue    跳过当次循环，执行下一次

       Break会影响后面循环的执行，执行后直接结束整个循环，但是continue不会影响后面循环的继续执行
```

# 函数（function）

函数概念：函数是由事件驱动或者被调用的时候执行的可被重复利用的代码块

函数是一组可以随时随地运行的语句
作用：
 使程序变得简洁清晰
 易于代码维护
 提高了代码的复用性，提高程序开发的效率

函数定义

   function 函数名(参数1，参数2){
       函数体 ---函数里面要执行的代码块
   }

函数命名

  标识符：变量、函数、属性的名字，或者函数的参数名

函数创建--
第一种创建函数的方式 （- 具名函数-- - 函数声明）
function 函数名(参数1，参数2) { 函数体 }


```js
    第二种创建函数的方式  函数表达式-- 匿名函数
    var fun = function (参数1，参数2) { 函数体 }

    var fun = function (a, b) {
        return a * b;
    }

    console.log(fun(5, 3))
```


```js
    第三种创建函数的方式，不常用。了解

    var fun1 = new Function('a', 'b', 'alert(a*b)');

    fun1(3, 4);
```

 形参  --函数创建的时候
 实参  ---函数调用的时候

```js
   形参和实参一一对应

   实参大于形参-----
   arguments 对象 ---创建了函数，arguments存在，arguments里面存的是所有的实参;
   arguments[0]  第一个实参
   arguments[1]  第二个实参
   。。。。
```

####  形参大于实参 -----

   多了的这个形参的值默认是undefine
   默认情况下，函数的返回值是undefined
   return  1.函数的返回值   2.终止当前函数运行

1. ###### 什么是作用域?

一段代码起作用的范围我们就称之为作用域，分为全局作用域和局部作用域

 	定义全局变量的三种方法

​    \- 变量定义在函数外部

​    \- 在函数内部定义一个不使用var声明的变量

​    \- 使用window对象来定义变量

2. #### 什么是作用域链？

  *> 在函数内部访问一个变量，优先在当前函数内部进行查找，如果找到了就使用该变量，*

  如果找不到则继续向父级进行查找，最后找到window顶层对象，如果还没有找到，则提示报错，

  这种由内向外查找变量的链条关系我们就称之为`作用域链`

####   js的预解析  

当JavaScript代码运行的时候，确定它运行所在的环境是非常重要的，

js的运行环境分为三种

\- 全局代码（Global Code）：代码首次执行时候的默认环境

\- 函数代码（Function Code）：每当执行流程进入到一个函数体内部的时候

\- Eval代码（Eval Code）：当eval函数内部的文本执行的时候

```js
function Fn(){

  var name = 1;

  console.log(name);

}

Fn();
```

- 当执行代码或调用函数的时候，js会形成执行上下文(可以认为代码运行环境)

- 这个执行上下文只能访问当前栈和上一个栈，这个执行上下文会被压入栈顶，

- 如果在函数内部又执行了一个函数，执行同样的操作

- 这样的话，函数执行完成后就会依次出栈，就形成上下文栈。

#### 函数提升与变量提升

  当js中函数或变量在未声明之前使用，
  那么函数或变量的声明将被提升到当前作用域的最顶部，
  这就叫变量提升

#### 函数的生命周期：

函数运行结束--函数以及里面的变量被js的垃圾回收机制回收了
 代码的执行顺序 ：代码从上到下执行--函数只有在调用的时候才会执行

#### 辣鸡回收机制

1. ###### 标记清除

  *> 当变量进入执行环境（函数中声明变量）的时候，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”，*

  在离开环境之后还有的变量则是需要被删除的变量,因为环境中的变量已经无法访问。垃圾收集器，标记给他清除掉。

2. ###### 引用计数清除

  *> 这种方式常常会引起内存泄漏,* 

  机制就是跟踪一个值的引用次数，当声明一个变量并将一个引用类型赋值给该变量时该值引用次数加1，

  当这个变量指向其他一个值则引用次数便减一。当该值引用次数为0时就会被回收。

  a = object +1 b= object +1 c = object + 1 =3 

  a = null -1 

  比如 a 和 b 都保存一个对象，如果，a=b b=a,则a,b引用次数都是2，不会释放

3. ###### 内存管理 

  简单数据类型和复杂数据类型存储方式的不同，

  使用案例理解深拷贝和浅拷贝

#### Date 日期对象

概念:	Date 对象用于处理日期与时间。

创建 Date 对象：

```js
new Date()

var d = new Date();    // 当前时间
```

 

```js
    var d = new Date(milliseconds);   // 毫秒数
    var d = new Date(dateString);    
	// 字符串 '2019 2 2 10:00:00'  '2019-2-2 10:00:00'  '2019/2/2 10:00:00'
    var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);   
    // 以逗号隔开的年月日时分秒
```



#### 获取：

```javascript
  getFullYear()		//从 Date 对象以四位数字返回年份。
  getMonth()		//从 Date 对象返回月份 (0 ~ 11)。
  getDate()			//从 Date 对象返回一个月中的某一天 (1 ~ 31)。
  getDay()			//从 Date 对象返回一周中的某一天 (0 ~ 6)。        
  getHours()		//返回 Date 对象的小时 (0 ~ 23)。
  getMinutes()		//返回 Date 对象的分钟 (0 ~ 59)。
  getSeconds()		//返回 Date 对象的秒数 (0 ~ 59)。 
  getMilliseconds()	 //返回 Date 对象的毫秒(0 ~ 999)。
  getTime()			//返回 1970 年 1 月 1 日至今的毫秒数。
```

​     

#### 设置:

```js
setFullYear()		//设置 Date 对象中的年份（四位数字）。
setMonth()			//设置 Date 对象中月份 (0 ~ 11)。
setDate()			//设置 Date 对象中月的某一天 (1 ~ 31)。   
setHours()			//设置 Date 对象中的小时 (0 ~ 23)。
setMinutes()		//设置 Date 对象中的分钟 (0 ~ 59)。
setSeconds()		//设置 Date 对象中的秒钟 (0 ~ 59)。
setMilliseconds()	 //设置 Date 对象中的毫秒 (0 ~ 999)。
setTime() 			//方法以毫秒设置 Date 对象。
```

​        

#### 转换时间格式的方法:

```javascript
  toLocaleString()		//据本地时间格式，把 Date 对象转换为字符串。
  toLocaleDateString()	//根据本地时间格式，把 Date 对象的日期部分转换为字符串。
  toLocaleTimeString()	//根据本地时间格式，把 Date 对象的时间部分转换为字符串。
```

​      

#### Date转换为字符串:       

```javascript
   toString()		//把 Date 对象转换为字符串。
   valueOf()		//返回 Date 对象的原始值。  ---毫秒       
   toUTCString()	//根据世界时，把 Date 对象转换为字符串。
   toGMTString()   //标准格式的字符串时间
   toDateString()	//把 Date 对象的日期部分转换为字符串。
   toTimeString()	//把 Date 对象的时间部分转换为字符串。
```



#### 定时器相关方法：

设置计时器方法

```javascript
    
    setInterval()  //间歇调用；就是每隔一段时间调用一次-间隙性计时器
   // 按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

    setTimeout()   //延迟调用；指定的时间后调用一次，只调用一次   在指定的毫秒数后调用函数或计算表达式。一次性计时器    
    
    清除计时器的方法
        clearInterval("要清除的定时器名")
        clearTimeout("要清除的定时器名")

    语法：setInterval(code,millisec,lang)     
		 setTimeout(code,millisec,lang)
   code	    //必需。要调用的函数或要执行的代码串。
   millisec	//必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。
   lang	    //可选。 JScript | VBScript | JavaScript
```
## 正则表达式（RegExp）

#### -- 基本概念

- 字符串匹配，查询，替换的一种模式，外表风骚，内功强大。

- 表达式的结构

- 正则表达式结构/修饰符` 比如 `/\d{12}/g`

-  g 全局匹配 

- i 忽略大小写

#### -- 正则的创建方法

字面量方式

```js
var rep = /^1[34578]\d{9}$/
```

构造函数形式

```js
 var rep = new RegExp("表达式","修饰符")
 //比如下面匹配一个手机号
 var rep = new RegExp("^1[34578]\d{9}$");
```

JS 字符串中可以使用正则表达式的三个函数

```js
  string.replace("正则表达式","要替换的对象")
  string.match("正则表达式")
  string.search("正则表达式")
```

test方法（用来验证）

```js
   var rep = /正则表达式/g
   rep.test(要验证的字符串); //结构返回true或者false
```

exec方法（用来验证）

```js
var rep = /正则表达式/g
rep.test(要验证的字符串) //结构返回true或false
```

#### 常用的元字符：

```js
            [abc] //匹配方框号中的任意一个字符
            [^abc] //除了abc以外的所有的字符
            [0-9] //匹配0-9之间数字
            [a-z] //匹配所有的大写字母
            [0-9a-zA-Z] //匹配大小写字母和数字
            [A-z] //匹配所有的大小写字母  [A-Za-z]
            (红色|蓝色|绿色)  //匹配红色，蓝色绿色
            [\u4e00-\u9fa5] //中文汉字
             
            .  //匹配任意字符
            \w //匹配任意字母数字下划线 或 [A-Za-z0-9_]
            \W //匹配非字母数字下划线
            \d //匹配所有数字  [0-9]
            \D //匹配非数字
            \s //匹配空格字符
            \S //匹配非空格字符
```

#### 常用的(写好的)

```javascript
        1.只能是中文 长度为2-7位
		 /^([\u4e00-\u9fa5]){2,7}$/
        2.长度为8到18位的小写大写字母或数字或下划线 【重要】
            /^[a-zA-Z0-9_]{8,18}$/
        3.正确的邮箱格式 【重要】
            /^\w+@[a-z0-9]{2,5}\.(com|cn|net|org)$/
            /^[A-z0-9_-]+@[a-z0-9]{2,5}\.[a-z]{2,3}$/
        4.正确的手机号【重要】
            /^1(3|4|5|7|8)\d{9}$/
        5.正确的身份证号:
            /^\d{15}|\d{17}([0-9]|x)/
            /^[1-9][0-9]{16}[0-9x]$/
        6.正确的qq号
            /[1-9][0-9]{4,}/
        7.正确的电话号码格式 【重要】
            /^0[0-9]{2}-[0-9]{8}|0[0-9]{3}-[0-9]{7}$/
            
        8. 过滤空白 /\s+/g
        9. 过滤首尾空格  str.trim()
        10. 匹配任意8-18之间的大小写字母数字构成的密码
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,18}$/
```

## Array  ---  [ 最好玩的莫过于（数组）]

Array 对象用于在单个的变量中存储多个值，用来存储多组数据的容器（变量）;

```javascript
  数组一般是由中括号包裹，元素之间使用逗号分隔，数组的长度也就是数组中元素的个数使用length获取，数组中具有索引下标，它们是从0开始的，通过对应的索引下标可以取到元素中对应的值。
  数组中的元素可以是js中任意数据类型的值
  当数组对象指定长度时，我们也可以存储多余这个长度的元素

   数组的创建方式：
   1. 使用字面量的方式创建  var arr = [10,20.30,true,"Hello",new Date(),function(){},				[12,12,34],Math.random(),null,undefined]
   2. 使用new关键字来创建一个对象   
   var arr = new Array(12,34,"hello")
   var arr = new Array(5);
```

```js
     数组概念：数组是值的有序集合,每个值叫做一个元素,元素的位置我们称为下标或索引,从0开始
    
     数组定义的两种方式
     var  arr = [1,2,3];
     var  arr1 = new Array(1,2,3);

     数组的属性：length 设置或返回数组中元素的数目；
	max-最大的  min-最小的  average-平均  sort-排序(从左往右-从小到大)       
```


```js
    向数组中添加和删除的方法：
    
    push()	    向数组的末尾添加一个或更多元素，并返回新的数组长度。
    unshift()	  向数组的开头添加一个或更多元素，并返回新的长度

    shift()	    删除并返回数组的第一个元素。  //无参数    
    pop()	      删除数组的最后一个元素并返回删除的元素。 // 无参数
    splice()	  从数组中添加或删除元素 或者替换元素
           参数1： 下标    
           参数2： 数量
           参数3...4...5 添加的元素
           // 返回的是删除的元素---数组

    注意：添加和删除的方法，改变了原数组的长度和元素
```

```js
concat()    拼接一个或多个数组;返回拼接后的数组    
join()     根据指定的分隔符（seperator）进行切割，返回一个字符串,参数缺省以逗号作为分隔符 (数组连接成字符串)
  
  slice()	    选取数组的的一部分，并返回一个新数组 获取数组中部分元素并返回：  不会影响原数组(截取)

  // 以上三个方法不会影响原数组
```


```js
  与索引相关的方法： 
  indexOf()      匹配要查找的元素在数组中第一次出现的索引位置 ,array.indexOf(item,start)
  lastIndexOf()  匹配要查找的元素在数组中最后一次出现的索引位置 
      注意：以上两个方法去查找元素，如果找不到，返回-1
      //  第二个参数默认省略, 如果有，下标
  includes()  包含 数组中是否包含某个值   true   false

  //不会影响原数组
reverse() 反转数组的元素顺序 ; 改变了原数组的顺序  (原来的数组发生变化)
sort()  //排序 ---  影响原数组   默认升序
```

```js

1. instanceof     arr instanceof Array

2. isArray()      Array.isArray(arr)   //// 如果是数组返回结果是true ,否则false 

```

基本排序算法其核心思想是指对一组数据按照一定的顺序重新排列。
    重新排列时用到的技术是一组嵌套的for循环。其中外循环会遍历数组的每一项，内循环则用于比较元素。

这些算法非常逼真的模拟了人类在现实生活中对数据的排序，例如纸牌玩家在处理手中的纸牌时对纸牌进行排序，
或者教师按照字母顺序或者分数对试卷进行排序。

#####  冒泡排序：

最慢的排序算法之一，也是最容易实现的排序算法

数组值会像气泡一样从数组的一端漂浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值 则会浮动到数组的左侧。

原因是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时它们进行互换。

#####  选择排序算法 

​      选择排序从数组的开头开始，将第一个元素和其他元素进行比较。
​      检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，
​      当进行到数组的倒数第二个位置时所有的数组便完成了排序。

## 代理

代理就是目标对象的抽象，复制版本，可以当作目标对象的替身，但又完全独立于目标对象。。

目标既可以被直接操作，也可以通过代理操作，但是直接操作会跳过代理。

#### 创建空代理

使用Proxy构造函数创建的，有两个参数接收（目标对象，处理程序对象），缺少参数就会报错TypeError.

上代码：

```javascript
const target = {
	id:"target"
};

const handler = {};

const proxy = new Proxy(target,handler)

// id属性会访问同一个值
console.log(target.id); // target 
console.log(proxy.id); 	// target

// 给目标属性赋值会反映在两个对象上
// 因为两个对象访问的是同一个值
target.id = 'foo'; 
console.log(target.id); // foo 
console.log(proxy.id); // foo

// 给代理属性赋值会反映在两个对象上
// 因为这个赋值会转移到目标对象
proxy.id = 'bar'; 
console.log(target.id); // bar 
console.log(proxy.id); // bar

// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false

```

## javaScript执行上下文理解



执行上下文就是当前js代码被解析和执行时所在的环境的抽象概念，JavaScript中运行的任何代码都是在执行上下文中运行。

执行上下文也有生命周期，生命周期包括三个阶段：创建阶段->执行阶段->回收阶段.



创建阶段（当函数被调用，单位执行任何内部代码之前）会做以下三件事:

- 创建变量对象：首先初始化函数的参数arguments提升函数声明和变量声明

- 创建作用域链

- 确定this指向

```javascript
function text(arg){
	//1.形参arg是“h1”
    //2.因为函数声明比变量生命优先级高，所以此时arg是function
    console.log(arg)
    
    var arg = "hello";  //3.var arg 变量声明被忽略 arg = hello; 被执行
    function arg(){
        console.log("hello world")
    }
    console.log(arg)
}
text('h1')

```

这是因为当函数执行的时候，**首先会形成一个私有的作用域**，然后一次按照下面的步骤执行：

- 如果有形参，先给形参赋值

- 进行私有作用域中的预解析

- 私有作用域中的代码从上到下执行

函数多了，就有多个函数执行上下文，每次调用函数创建一个新的执行上下文。



（了解）那怎么管理那么多的上下文？JavaScript殷勤创建了个执行栈来管理执行上下文。可以把执行站认为是个存贮函数调用的栈结构，遵循先进后出的原则。

```javascript
console.log(1);
function a(){
	console.log(2)
	(function b(){
		console.log(3)
	})()
	console.log(4)
} 
a()
console.log(5)
//输出: 1 2 3 4 5
```

如果非要深刻理解，看流程图，需要记住的点：

- JavaScript执行在单线程上，所有的代码都是排队执行。
- 一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入行栈的顶部（你可以理解电梯里面进去的人，先进后出，后进先出的概念）
- 每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当权的函数的执行上下文出栈，等待垃圾回收/
- 浏览器的JS执行引擎总是访问栈顶的执行上下文。
- 全局上下文只有唯一的一个，它在浏览器关闭时出栈。

关于作用域上面有提到。。。

**什么是OOP语义ctrl+作键点这个链接↓**

[https://blog.csdn.net/qing_gee/article/details/83305342?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161105937216780255262487%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D&request_id=161105937216780255262487&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-2-83305342.pc_search_result_hbase_insert&utm_term=%E4%BB%80%E4%B9%88%E6%98%AFOOP%E8%AF%AD%E4%B9%89]

## javaScrip面向对象笔记

###### 

##### 	面向对象最常用到的概念：

- ###### 对象、方法、属性

- ###### 类

- ###### 封装

- ###### 聚合

- ###### 重用与继承

- ###### 多态

## 对象

面向对象这种设计风格重点就在于对象，这种对象不是我们代码中的对象，而是实质上的事物在程序设计语言

中的表现形式，这里的食物可以是任何东西（比如某个客观存在的对象，或一些比较抽象的概念）。

例如：

狗这种常见的对象来说，我们可以看到它们具有某些明确的特征（如：颜色，名字，体型等），能

执行某些动作，比如 ： 汪汪叫，睡觉，吃狗粮，躲避，逃跑等等，在OOP（什么是OOP语义看上面？）语义中，这些对象特征就叫

做属性，而那些动作就称之为方法。

此外还有一个口语方面的类比：

- ###### 对象往往使用名词来表示的（如book，person）

- ###### 方法一般都是些动词（如read，run）

- ###### 属性值则是一些形容词

## 类

在现实生活中，相似的对象之间往往都有一些共同的组成特征，例如狗的种类比较多例如{“哈士

奇”，“牧羊犬”，“德牧”，“柯基”。。。。等等种类繁多，*类* 实际上就是对象的设计蓝图或者制

作配方。“对象这个词”，我们有时候也叫“实例”，所以我们可以说老鹰是鸟类的一个实例。我们能基于

相同的类型创建出许多不同的对像。

类就像一个模板（原型），而对象就是在这些模板的基础上被创建出来的。

但是！JS实际上压根儿没有类，该语言的一切都是基于对象的，其所依靠的是一套原型系统

（prototype）。



## 封装

封装则是另一个OOP相关概念，它主要用于对象中封装的内容，两部分组成：

- ###### 相关的数据和属性

- ###### 基于这些属性所能做的功能或方法


```
但除此之外，在概念中封装术语也包含了一层隐藏的信息。因此，当我们理解这个概念时，必须注意它在OOP的特定上下文中的含义。例如，在MP3播放器中。如果这是一个对象，那么作为用户的对象，我们肯定需要一些类似于按钮、显示界面之类的工作。这些接口可以帮助我们使用对象(例如播放歌曲)。至于它们的内部工作原理，我们并不清楚，而且在大多数情况下也不会关心这些。换句话说，这些接口的实现对我们来说是不可见的。同样,在OOP中。当我们在代码中调用对象的方法时，无论是我们自己的对象还是第三方的对象，至少在中国的环境中，鹰更像是鸟的子类。希望读者在理解对象和类之间的关系时，不要过于依赖类比。-第1章绪论7Library，我们不需要知道这个方法是如何工作的。在编译语言中，我们甚至看不到目标代码。由于Javascript是一种解释语言，is可以查看源代码。但至少它们在这个概念上是一致的，我们只需要知道对象操作接口，而不需要关心它的具体实现。关于信息隐藏，另一方面，关于方法和属性的可见性。在某些语言中，我们可以通过public、private、protected这些关键字来定义方法和属性的可见性。该用户可以访问限制分类定义对象的级别。例如，私有方法只有自己的内部代码才能访问对象，而公共方法是任何人都可以访问的。在JavaScript中，虽然所有的方法和属性都是公开的，但是我们会看到，该语言还是提供了一些隐藏的数据方法，以保护程序的秘密性。
```

## 聚合

聚合可把它理解成组合，就是指把几个现有的对象合并成一个新的对象的过程，聚合所强调的就是这种将

多个对象合而为一的能力。

用另一种思维去理解：

我可以把一个项目分解成多个模块，这样项目就易于管理，当一个项目大到一个人无法完成的时候，就得给

它分解成多个模块，必要的话模块还可以分解成多个子模块，这样做可以利于开发者从多个不同的抽象层次来

考虑这个项目怎么开发。

## 继承

顾名思义，继承就是继承一些属性和方法，通过继承，开发者可以实现对代码的重复利用。 

  一个对象继承另一个对象，子对象可以直接使用父对象的属性和方法，这种关系就叫做继承。

  如果父类对象已经定义的属性和方法，子对象可以直接使用，无需再定义，减少内存开销。

  子函数中的属性和方法如果跟父函数同名的话，子函数会覆盖父函数的属性和方法。 

**继承的方法**

~~~js
**原型链继承**

```js
    function Father(){

    }

    function Zi(){ 
    }

    Zi.prototype = new Father()

```
优缺点:

1. 子对象既可以使用方法发自身的属性，也可以使用父方法原型里的属性

2. 缺点：无法传递参数

**构造函数继承**
~~~


~~~js
```js

function Fu(){
    this.name = "超级玛丽";

    this.love = "顶砖吃毛菇";
}

function Zi(){
    
    Fu.call(this);
    
}

```

构造函数继承的优缺点
1. 可以传递参数，
2. 不可以使用父方法的原型属性
~~~


~~~js
**组合继承**

```js
function Fu(){
    this.name = "步佳伟.威龙";
    this.say = function(){

    }
}

function Zi(){

    Fu.call(this);
}

Zi.prototype = new Fu();

```

优点: 既能传递参数，也能使用父函数的原型
缺点：每实例化一次，要调用两次继承父方法
~~~

  **继承方式简单总结**
    - 原型链继承
        - 把父方法的new的实例化对象 赋给 子方法的原型属性
        - 子方法可以使用父方法原型中的属性，缺点：不可以传递参数

- 构造函数继承
    - 在子函数中通过call方法，改变this指向，把父方法的属性全部继承过来
        - 父方法.call(this,传递的参数)
    - 可以传递参数， 无法使用父方法原型中的属性

- 组合继承
    - 把原型链继承和构造函数继承，糅合到一起
    - 既可以传递参数，也可以使用父方法的原型属性， 缺点，实例化一次，调用两次继承，资源消耗比较大。

3. **call和apply的区别**

    A.call(B,参数);   A函数用B对象替代当前对象中的内容
        
    调用一个对象的一种方法，用另一个对象来代替当前对象

    apply和call方法的区别:
    apply传递一个数组参数，但是call传递的是一个参数列表

    还有一个bind方法，但是bind不会自动执行函数，需要手动调用一下

## 多态

多态的概念就是：不同对象通过相同方法调用来实现各自行为的能力，就称作多态。

例如:

obj2继承了上一级对象obj1的所有方法，这意味着两个对象都实现了定义的方法，

现在有一个叫obj3的变量，哪怕我不知道它是obj1还是obj2，也能直接调用这个方法，

完全不用担心会影响代码的正常运转。





# Set

ES6新的数据结构，**没有重复的值**。

Set加入值**不会发生类型转换，5与'5'不同**

内部判断两值相等采用**类似精确相等运算符`===`**

**因此对象总是不相等，例外是`NaN`等于`NaN`**

#### 两个原型方法

- `Set.prototype.constructor` 构造函数Set
- `Set.prototype.size` 返回成员个数

#### 四个操作

- `delete()` 返回布尔值
- `has()` 返回布尔值
- `add()` 返回Set本身，可以采用链式写法
- `clear()` 无返回

#### 四个遍历方法

- `keys()` 返回键名的遍历器
- `values()` 返回键值的遍历器
- `entries()` 返回键值对的遍历器
- `forEach()` 调用回调函数遍历每个成员

```js
var set2 = new Set(['a', 'b', 3]);
for ( let item of set2.entries() ) {
	console.log(item)
}
// ["a", "a"]
// ["b", "b"]
// [3, 3]
```

Set的键名与键值相同，因此**`values()`与`keys()`对Set来说行为是一样的。**

```js
Set.prototype[Symbol.iterator] === Set.prototype.values
//true
```

因此可以直接跳过keys或者values**直接用`for...of`来遍历Set**

由于**扩展运算符...内部使用`for...of`**，因此也适用于Set

```js
数组去重
var arr = [1,2,3,3,2,1];
arr = [...new Set(arr)];
arr // [1, 2, 3]
```

#### WeakSet(了解)

- 成员只能是对象
- 对象都是弱引用
- WeakSet是不可遍历的，也没有`size`属性

#### 3个方法：

 **`has()`, `delete()`, `add()`**

- **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
- **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
- **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

例子:

```js
const ws = new WeakSet();
const obj = {};
const foo = {};
 
ws.add(window); //添加
ws.add(obj);
 
ws.has(window); // true   检测某个值是否在自身的实例中，如果有就返回true没有就返回false
ws.has(foo);    // false
 
ws.delete(window); //删除
ws.has(window);    // false
```

练习：

```js
const ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
```

我试图向 WeakSet 添加一个数值和`Symbol`值，结果报错，因为 WeakSet 只能放置对象。

```js
const ws = new WeakSet();
var obj = { name : "周宇成"}
ws.add(obj)
// WeakSet {{…}}[[Entries]]0: value: name: "周宇成"__proto__: Object__proto__: WeakSet
```

WeakSet的对象都是弱引用，可以用来存储DOM节点而无需担心这些节点从文档移除时会引发内存泄漏，

WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失

```js
ws.size // undefined
ws.forEach // undefined
 
ws.forEach(function(item){ console.log('WeakSet has ' + item)})
// TypeError: undefined is not a function
```

WeakSet不能遍历！是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。



总结: WeakSet成员只能是对象,对象都是弱引用,WeakSet是不可遍历的，也没有`size`属性,WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失

# Map

 **"值-值"，键名可以是各种类型的值**，而对象的键名是字符串

 **数组作为构造函数的参数**

```js
new Map([['name', 'mixukai']])
```

 **Map的键是跟内存地址绑定的**，只有对一个对象的引用，才将其视为同一个键。

 Map的键如果是简单类型的值，若严格相等则则视为同一个键。**`+0`与`-0`相同，`NaN`也和`NaN`相同**

#### 属性和方法

-  `size`, `constructor`

- `set()`(返回Map本身),`get()`, `delete()`,`clear()`

- `keys()`, `values()`, `entries()`, `forEach()`

#### Map转数组

```js
map[Symbol.iterator] === map.entries

[...map.keys()]

[...map.values()]

[...map.entries()]与[...map]效果相同
```

练习:

```js
var array1 = [1,4,9,16];
const map1 = array1.map(x => x *2);
console.log(map1); //输出 【2，8，18，32】 

var array1 = [1, 4, 9, 16];
 
const map1 = array1.map(x => {
    if (x == 4) {
        return x * 2;
    }
    return x;
});
console.log(map1); //输出 [1, 8, 9, 16] 
```

！重要：！

 map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 ***callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。***

callback 是啥？

假设你是一个蜀国将军，这个callback就是军师在你出征的时候交给你的锦囊，告诉你打完仗之后，就拆开锦囊，做里面的事情
callback()的意思就是执行这个锦囊
return callback()的意思就是，做完之后告诉军师结果如何

#### 思考：

要求: 用map反转个字符串

```js
var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(''); 

// 输出: '54321'
```



#### WeakMap(了解)

- 键名必须是对象,`null`除外
- 键名是对象的弱引用
- **没有遍历操作**，无`values()`,`keys()`,`entries()`,也无size
- 无`clear()`

#### 四个方法：

 `set()`, `get()`, `delete()`, `has()`

```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2
 
// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```

WeakMap与Map的区别

首先，`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。

```js
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object! 报错说 1 不是一个对象
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key  不接受其他类型的值作为键名
map.set(null, 2)
// TypeError: Invalid value used as weak map key 不接受其他类型的值作为键名
```

```js
var wm = new WeakMap();  
var element = document.querySelector(".element");  
wm.set(element, "Original");  
wm.get(element) // "Original"  
element.parentNode.removeChild(element);  
element = null;  
wm.get(element) // undefined  
```

将一个DOM节点element作为键名， 然后销毁这个节点， element对应的键就自动消失了， 再引用这个键名就返回undefined,

当某个 DOM 元素被清除， 其所对应的WeakMap记录就会自动被移除.

 WeakMap的专用场合就是， 它的键所对应的对象， 可能会在将来消失。 WeakMap结构有助于防止内存泄漏。

```js
var wm = new WeakMap();  
wm.size  
// undefined  
wm.forEach  
// undefined  
wm.clear()
//clear is no function
```

一是没有遍历操作， 也没有size属性； 二是无法清空， 不支持clear方法 这与WeakMap的键不被计入引用、 被垃圾回收机制忽略有关

 WeakMap 应用的典型场合就是 DOM 节点作为键名。

```js

let myElement = document.getElementById('logo');  
let myWeakmap = new WeakMap();  
myWeakmap.set(myElement, {  
    timesClicked: 0  
});  
myElement.addEventListener('click', function() {  
    let logoData = myWeakmap.get(myElement);  
    logoData.timesClicked++;  
    myWeakmap.set(myElement, logoData);  
}, false);
```

 myElement是一个 DOM 节点， 每当发生 click 事件， 就更新一下状态。 将这个状态作为键值放在 WeakMap 里， 对应的键名就是myElement。 一旦这个 DOM 节点删除， 该状态就会自动消失， 不存在内存泄漏风险。

# 继承

### 重点

    - 对象继承
    - 对象继承的方法
    - call和apply,bind使用

### 难点
    - call和apply,bind使用


### 内容

1. **继承的基本概念**

    一个对象继承另一个对象，子对象可以直接使用父对象的属性和方法，这种关系就叫做继承。
        
    如果父类对象已经定义的属性和方法，子对象可以直接使用，无需再定义，减少内存开销。
        
    子函数中的属性和方法如果跟父函数同名的话，子函数会覆盖父函数的属性和方法。  重写

2. **继承的方法**

    **原型链继承**

    ```js
         //父方法
            function Father(){
                this.name = "王建林";
                this.money = "1个亿";
    
                this.works = function(){
                    console.log("万达房地产");
                }
            }
            
            Father.prototype.height = "180cm";
            //子方法
            function Son(){
                this.name = "王石";
            }
    
            //把父方法的实例化对象放到子方法的原型中去，原型链继承
            Son.prototype = new Father();
    
            var son = new Son();
            console.log(son); //子方法继承后实例化
            console.log(son.money);//访问父函数自身的属性
            console.log(son.height);//访问父方法原型中的属性
    
    ```
    重点：让新实例的原型等于父类的实例。

    特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）

    缺点：1、新实例无法向父类构造函数传参。

    　　　2、继承单一。

    　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）

    **构造函数继承**

    语法

    ```js
    
    function Fu(){
        this.name = "超级玛丽";
    
        this.love = "顶砖吃毛菇";
    }
    
    function Zi(){
        
        Fu.call(this);
        
    }
    ```

    例子

```js


        //父方法
        function Father(name,money){
            this.name = name;
            this.money = money;

            this.works = function(){
                console.log("万达房地产");
            }
        }
        
        Father.prototype.height = "180cm";
        //子方法
        function Son(){
            //call方法，改变this的指向
            Father.call(this,'王石',100000000);//用当前对象，代替Father对象
        }

        var son = new Son();

        console.log(son);
        console.log(son.name);//可以访问父方法属性
        console.log(son.money);//可以访问父方法属性
        console.log(son.height);//无法访问父方法原型中的属性

```

构造函数继承的优缺点

重点：用.call()和.apply()将父类构造函数引入子类函数（复制）

特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。

　　　2、解决了原型链继承缺点。

　　　3、可以继承多个构造函数属性（call多个）。

　　　4、在子实例中可向父实例传参。

缺点：1、只能继承父类构造函数自身的属性。

　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）

　　　3、每个新实例都有父类构造函数的副本，臃肿。



**组合继承**

```js
   //父方法
        function Father(name,money){
            this.name = name;
            this.money = money;

            this.works = function(){
                console.log("万达房地产");
            }
        }
        //Car构造函数
        function Car(){
            this.brand="布加迪.孙宵";
            this.T = "8.0T";
        }
        
        Car.prototype.price = "1800w";
        //子方法
        function Son(){
            //call方法，改变this的指向 构造函数继承
            Father.call(this,'王石',100000000);//用当前对象，代替Father对象
        }
        //原型链的继承
        Son.prototype = new Car();

        var son = new Son();

        console.log(son);

        console.log(son.name);//访问构造函数继承的属性
        console.log(son.brand);//访问原型链继承的属性
        console.log(son.price);//访问原型链继承中的原型中的属性

```

优点: 既能传递参数，也能使用父函数的原型
缺点：每实例化一次，要调用两次继承父方法

重点：**结合了两种模式的优点，传参和复用**

 

特点：1、可以继承父类原型上的属性，可以传参，可复用。

　　　2、每个新实例引入的构造函数属性是私有的。

缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替（替换掉了）原型上的那个父类构造函数。

  **继承方式简单总结**
    - 原型链继承
        - 把父方法的new的实例化对象 赋给 子方法的原型属性
        - 子方法可以使用父方法原型中的属性，缺点：不可以传递参数

- 构造函数继承
    - 在子函数中通过call方法，改变this指向，把父方法的属性全部继承过来
        - 父方法.call(this,传递的参数)
    - 可以传递参数， 无法使用父方法原型中的属性

- 组合继承
    - 把原型链继承和构造函数继承，糅合到一起
    - 既可以传递参数，也可以使用父方法的原型属性， 缺点，实例化一次，调用两次继承，资源消耗比较大。



3. **call和apply的区别**

    A.call(B,参数);   A函数用B对象替代当前对象中的内容
        
    调用一个对象的一种方法，用另一个对象来代替当前对象

    apply和call方法的区别:
    apply传递一个数组参数，但是call传递的是一个参数列表

    还有一个bind方法，但是bind不会自动执行函数，需要手动调用一下\
    
    ```js
        //字面量方式创建一个对象
            //被替换的对象
            var person = {
                name: "龙赐",
                love: "吃饭，睡觉，挨打,学习",
                say: function(age=18){
                    console.log("我是"+this.name,"我喜欢"+this.love,"我今年"+age+"岁");
                }
            }
            person.say();
            //替换的对象
            var girl = {
                name: "小龙",
                love: "王者荣耀,吃鸡,遛鸭子玩"
            }
            
            person.say.call(girl,28);//call
            person.say.apply(girl,[48]);//apply
    
            person.say.bind(girl)(38);//bind方法必须要手动调用
    ```
    
    


4. **继承的案例**

    创建小球的案例，采用继承的方式实现，可以改变小球的大小颜色，等。。。。

```js
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">

    </div>
    <script>
        //构造函数方法，父方法
        function Common(width,height,bgcolor){
            //父级盒子
            this.app = document.getElementById("app");
            this.borderRadius = "50%";
            //小球样式
            this.float = "left";
            this.marginRight = "10px";

            //默认属性
            this.width = width;
            this.height = height;
            this.backgroundColor = bgcolor;

            this.createBall = function(){
                var div = document.createElement("div");
                div.style.float = this.float;
                div.style.marginRight = this.marginRight;
                div.style.borderRadius = this.borderRadius;
                //子级的函数自己实现
                div.style.width = this.width;
                div.style.height = this.height;
                div.style.backgroundColor = this.backgroundColor;

                //小球放到div中去
                app.appendChild(div);
            }
        }

        function Ball1(){
            Common.call(this,"100px",'100px',"orange");
        }
        var ball1 = new Ball1();

        ball1.createBall();

        function Ball2(){
            Common.call(this,"80px",'80px',"#A00000");
        }
        var ball2 = new Ball2();

        ball2.createBall();
    </script>
</body>
</html>
```

# 函数

函数概念：函数是由事件驱动或者被调用的时候执行的可被重复利用的代码块，函数是一组可以随时随地运行的语句
    作用：

- 使程序变得简洁清晰
- 易于代码维护
- 提高了代码的复用性，提高程序开发的效率

### 定义函数的 几种方式

1.普通函数也叫具名函数（最常用的）

```js
function func1([参数]){/*函数体*/}
```

- func1 是调用这个函数的名字

- 参数 是调用的时候传入的参数

- 函数体 是调用后执行的代码块

2.字面量函数也叫匿名函数

```js
var func2=function([参数]){/*函数体*/};
getFunctionName(fn1).length;//0  匿名函数没有name
```

将一匿名函数赋给一个变量，调用方法：func2([函数]);

采用这种方法创建的函数为匿名函数，即没有函数name

3.构造函数形式

```js
var func5=new Function();
```

声明func5为一个对象。

4.自执行函数

```js
(function () {
  alert(1);
}) ();
```

这个函数代表进入页面就直接执行这个函数

当然还有其他创建函数或执行函数的方法，比如采用 eval ， setTimeout， setInterval 等方法，属于非标准方法。

 *//事件时元素本身就具有的特征，只不过，触发事件后，默认没有相关的一些处理。事件函数其实就是给元素的某个时间添加一个事件处理函数*

# 函数传参

- 形参：形式上的参数——给函数声明一个参数；
- 实参：实际的参数——在函数调用时给形参赋的值
- 形参和实参一一对应
- 形参的值默认是undefine

```javascript
function func(形参1,形参2){ //形参  --函数创建的时候
    //函数执行代码
}
 
func(实参1,实参2);		 //实参  ---函数调用的时候
```

举例------之前学过的借用构造函数就是通过参数传递的：

```js
 //构造函数 父级
    function Father(name,age){
        this.name = name;
        this.age = age;
    }
    //构造函数 儿子
    function Zi(){
        // 借用构造函数父级的属性
        Father.call(this,"张三",28) //通过call方法传递参数
    }
    var fun = new Zi()
    console.log(fun.name)
    console.log(fun.age)
```

函数形参比实参数量多的时候：

```js
function fun(age,age1,age2){
     return console.log(age,age1,age2)
}
fun("参数1","参数2")  //参数1 参数2 undefined

```

那如果实参比形参多的时候呢:

```js
function fun(){
     return console.log(arguments) //我门能通过arguments访问到传入的参数----以数组的形式
}
fun("参数1","参数2","参数3")  
//Arguments(3) ["参数1", "参数2", "参数3", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//callee属性 对应的就是fun函数  ——proto——指向的就是Object这也说明了他是个类数组对象，而不是一个数组。
```

有了这个对象我们以后写函数的时候，就不用给所有的形参指定参数名，然后通过参数名的方式获取参数了，我们可以直接使用arguments对象来获取实参

### 返回值return

 如果函数没有显示的使用 return语句 ，那么函数有默认的返回值：undefined

```js
function fun(a,b){
    var c = a+b;
}
var number = fun(2,3)
console.log(number) //undefined
```

### 函数的声明提升

函数声明有三种方式：函数声明，函数表达式（又称函数字面量声明），函数对象的声明（使用率很低）

方式一：函数声明

function  函数名(形参列表){
//方法体 
}

方式二：函数表达式（又称函数字面量声明）

 var  变量名=function 函数名(形参列表){  备注：这个函数名有点特别，它只能在它自己这个函数体内被调用。不能被外部访问，有兴趣的自己测试测试。
//方法体
}

方式三：函数对象的声明

​    var  方法名 =new Function("形参1","形参2","形参3", "方法体");

**只有函数声明才会函数声明提升，其他两种不会函数声明提升。**

### 递归

概念 ：函数中调用函数自己，在使用递归的时候一定需要有结束递归的条件，否则就会变成死循环，直到浏览器崩溃。

```javascript
var data = [
 {
     name: "所有物品",
     children: [
         {
             name: "水果",
             children: [{name: "苹果", children: [{name: '青苹果'}, {name: '红苹果'}]}]
         },
         {
             name: '主食',
             children: [
                 {name: "米饭", children: [{name: '北方米饭'}, {name: '南方米饭'}]}
             ]
         },
         {
             name: '生活用品',
             children: [
                 {name: "电脑类", children: [{name: '联想电脑'}, {name: '苹果电脑'}]},
                 {name: "工具类", children: [{name: "锄头"}, {name: "锤子"}]},
                 {name: "生活用品", children: [{name: "洗发水"}, {name: "沐浴露"}]}
             ]
         }
  ]
}]

//递归遍历实现
var recursiveFunction = function(){
    var str = ''
    const getStr = function(list){
        list.forEach(function(row){
            if(row.children){
                getStr(row.children)
            }else {
                str += row.name + ";"
            }
        })
    }
    getStr(data)
    console.log(str)
}
recursiveFunction()
//输出：青苹果;红苹果;北方米饭;南方米饭;联想电脑;苹果电脑;锄头;锤子;洗发水;沐浴露;
```

可以看到，递归的方式来实现的时候，我们只需要一个for循环，每次遍历接受到的数据，通过判断是否还有`children`，没有就代表是最后一级了，有就继续把`children`这个`list`传给函数继续遍历，最后就得到了我们想要的数据

###### 递归遍历实现排序

封装 利用递归实现的快速排序，效率很高

```javascript
var quickSort = function(arr) {
if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可
    return arr;
}
var pivotIndex = Math.floor(arr.length / 2);//取基准点
var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
var left = [];//存放比基准点小的数组
var right = [];//存放比基准点大的数组
for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配
    if (arr[i] < pivot) {
        left.push(arr[i]);//比基准点小的放在左边数组
    } else {
        right.push(arr[i]);//比基准点大的放在右边数组
    }
}
//递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
return quickSort(left).concat([pivot], quickSort(right));
};

var arr = [14, 50, 80, 7, 2, 2, 11];
console.log(quickSort(arr));
```


 递归一般是在函数里面把函数自己给调用一遍，通过每次调用改变条件，来结束循环。
 递归在数据格式一致，在数据层级未知的情况下，比普通的遍历更有优势。
 递归在异步的时候，更容易理解，且更容易实现，因为可以在异步的回调里面，调用自己来实现每次都能拿到异步的结果再进行其他操作
 递归实现的快速排序比普通遍历实现的排序效率更好。

### 闭包

闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

###### 词法作用域

```js
function init() {
    var name = "隔壁龙赐"; // name 是一个被 init 创建的局部变量
    function Names() { // Names() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    Names();
}
init();
```

`init()` 创建了一个局部变量 `name` 和一个名为Names()的函数。`displayName()` 是定义在 `init()` 里的内部函数，并且仅在 init() 函数体内可用。请注意，Names() 没有自己的局部变量。因为它可以访问到外部函数的变量，所以 Names()可以使用父函数init()中声明的变量 name

 **优点**
    - 外部函数存储的变量可以存储在内存中，避免全局变量的污染

**缺点**
- 占用内存，造成内存泄露
- 父函数每调用一次，会形成不同的闭包
- 对捕获的变量是引用，不是复制

### 立即调用函数表达式 

什么是**立即调用函数表达式**?就是一种立即调用的[函数表达式](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Special/function)

解析器在遇到 function 关键字的时候，它知道这是**函数表达式**而不是**函数声明**。

```js
// 下面的两种方法都可以实现立即调用函数表达式和利用函数的上下文来实现私有化。

(function(){ /* code */ }()); // 推荐这种方式
(function(){ /* code */ })(); // 这样也可以

// 因为 () 和一些操作符（如 = && || ,等）主要是用来在函数表达式和函数声明之间消除歧义的，
// 所以他们可以在解析器已经明确需要一个表达式时省略（但请参与下面的“重要说明”）。

var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 如果不关心返回值或者也不介意你的代码变得晦涩难懂，
// 你可以通过在函数前面添加一元操作符来保存字节。

!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// 还有使用关键字 new Function的方式使用立即调用函数表达式

new Function('console.log("hi")')() 
// 需要把参数名、函数体都作为参数传给 Function 的构造函数，在后面的括号里写上实参，表示调用传值
new Function("a", "b", 'console.log(a + b)')(1, 2)

```

```jsx
//  自执行函数。递归执行或调用：
function foo() { foo(); }

// 自执行匿名函数。
// 因为没有标识符，必需使用`arguments.callee`属性（指向当前执行的函数）执行自身
var foo = function() { arguments.callee(); };

// 这可能是自执行匿名函数，但只有在`foo`标识符实际引用时才是。
// 如果你改变`foo`的引用，那你只是曾经拥有一个自执行匿名函数。
var foo = function() { foo(); };

// 有人把这也叫做自动执行匿名函数，即使它并不是自动执行。
// 因为它没有调用它自己。它只是立即执行。
(function(){ /* code */ }());

// 为函数表达式添加标识符（创建了一个具名函数表达式）在调试时会非常有用。
// 一旦命名，函数就不在匿名。
(function foo(){ /* code */ }());

// IIFE 也可以是自动执行的，尽管这不是最有用的模式。
(function(){ arguments.callee(); }());
(function foo(){ foo(); }());

// 最后一件需要注意的是：在 BlackBerry 5 可能会出错。
// 因为在具名函数表达式中，函数表达式的名称是 undefined 。
(function foo(){ foo(); }());
```

### 私有变量

严格来讲，js中所有对象属性都是共有的，但由于js的函数作用域特性，其实可以认为，任何在函数中定义的变量，都可以认为是私有变量，因为在函数外部不能访问到这些变量，只有在函数本身内部，或者内部闭包函数里才能访问这些变量。

此时便可以将私有变量放在一个函数里，然后以闭包的形式，在该函数里创建特权函数来访问和操纵这些变量。

例如：

```jsx
  function Person(name){
      
          this.getName = function(){
              return name;
          };
      
          this.setName = function (value) {
              name = value;
          };
      }
      
      var person = new Person("Nicholas");
      alert(person.getName());   //"Nicholas"
      person.setName("Greg");
      alert(person.getName());   //"Greg"
```

解析：这里运用的是创建对象中的构造函数模式，有个缺点是每生成一个实例，就会创建同样一组新方法，占用大量内存。

解决的办法是使用静态私有变量来实现特权方法。



### 思考：

看看下面的参数和return返回结果

```js
function fun(){
     return console.log(arguments[1]) // ?
}
fun({"参数1":1},{"参数2":2},{"参数3":3})  
```

用arguments来判断当前传入参数的个数是否与我们需要的数量一致

```js
function add() {
	if( arguments.length == 2 ){
		return arguments[0] + arguments[1];
	}else{
		return '传入参数不合法';
	}
}
 
console.log( add(2,3) );  //?
console.log( add(1,2,3) ); //?
```

函数的属性length

```js
function fun(num,num1,num2){
    
}
function fun1(){
    
}
console.log(fun.length) // ？
console.log(fun1.length) // ？
```

函数的声明提升

```js

	var test1;
	var test2 ;

	console.log(test0)// ？
	console.log(test1)// ？
	console.log(test2)// ？


	function test0 (){
		return 0
	}
	test1 =	function (){
		return 1
	}
	test2 = new Function ( "return 2")

```

递归

```js
//求5个数字的和
var sum=0
for(var i=0;i<6;i++){
    sum=sum+i;
}
console.log(sum);
```



function leijia(total, count, prev = 0) {
	if (count < 0) {
		console.log(total);
		return;
	}
	leijia(prev + total, --count, total);
}

leijia(1, 20);

function findAText(text, dom) {
	dom = dom || document.body.children;
	for (let key in dom) {
		const node = dom[key];
		if (/^a$/i.test(node.nodeName)) {
			const value = node.innerHTML;
			if (value.indexOf('递归') >= 0) {
				console.log(node.innerHTML);
			}
		}
		if (node.children) {
			findAText(text, node.children);
		}
	}
}

findAText('递归'); 

#  异步编程 

1什么是异步？

异步是指在主线程上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务。

例如:

```js
var str = "异步测试";
    var num = 10;
    for (var i = 0; i < 10; i++) {
        num += 2;
    }
console.log(num); // 30
```

上面的i = 0； i ++ 的时候才会让num += 2。

看下面例子:

```js
console.log(100);

setTimeout(()=>{
    console.log(200);
})

setTimeout(()=>{
    console.log(201);
})

Promise.resolve().then(()=>{
    console.log(300);
})

console.log(400);

// 100 400 300 200 201
// 为什么300比200先打印
```

这里就涉及了js中的  ’宏任务‘  和  ’微任务‘

### 宏任务和微任务

- 宏任务：setTimeout ，setInterval ,setImmediate，Ajax,DOM事件
- 微任务：Promise async/await
- 不管宏任务是否到达时间，以及放置的先后顺序，每次主线程执行栈为空的时候，引擎会优先处理微任务队列，**处理完微任务队列里的所有任务**，再去处理宏任务。

### JS运行的环境。

- js的宿主：一般为浏览器或者Node
- 执行栈：   一个存储函数调用的**栈结构**，遵循**先进后出**的原则
- ..........Event Loop，image，等等。
- 宏任务是由宿主发起的，而微任务由JavaScript自身发起。

```js
function foo() {
  throw new Error('error')
}
function bar() {
  foo()
}
bar()
//VM331:2 Uncaught Error: error
//    at foo (<anonymous>:2:9)
//    at bar (<anonymous>:5:3)
//    at <anonymous>:7:1  ------------------> main 函数
从下往上看这个打印结果
当开始执行 JS 代码时，首先会执行一个<anonymous> ，然后执行代码。
根据先进后出的原则，后执行的函数会先弹出栈，foo 这个函数后执行，当执行完毕后就从栈中弹出了
```

拓展 ：`async`和`await`是如何处理异步任务的？

简单说，`async`是通过`Promise`包装异步任务。

```js
//ES6的语法:
async function async1() {
  await async2()
  console.log('1263')
}
async function async2() {
  console.log('1234')
}
async1()

//ES5的写法
new Promise((resolve, reject) => {
  // console.log('async2')
  async2() 
  ...
}).then(() => {
 // 执行async1()函数await之后的语句
  console.log('async1')
})
```

当调用 `async1` 函数时，会马上输出 `async2 end`，并且函数返回一个 `Promise`，接下来在遇到 `await`的时候会就让出线程开始执行 `async1` 外的代码（可以把 `await` 看成是**让出线程**的标志）。
然后当同步代码全部执行完毕以后，就会去执行所有的异步代码，那么又会回到 `await` 的位置，去执行 `then` 中的回调。

`setTimeout`，`setImmediate`谁先执行？

一般来说，`setImmediate`会在`setTimeout`之前执行，如下：

```js

setTimeout(() => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  });
}, 0);
```

执行顺序为：

1. 外层是一个setTimeout，所以执行它的回调的时候已经在timers阶段了
2. 处理里面的setTimeout，因为本次循环的timers正在执行，所以其回调其实加到了下个timers阶段
3. 处理里面的setImmediate，将它的回调加入check阶段的队列
4. 外层timers阶段执行完，进入pending callbacks，idle, prepare，poll，这几个队列都是空的，所以继续往下
5. 到了check阶段，发现了setImmediate的回调，拿出来执行
6. 然后是close callbacks，队列是空的，跳过
7. 又是timers阶段，执行`console.log('setTimeout')`

但是，如果当前执行环境不是timers阶段，就不一定了。。。。顺便科普一下Node里面对`setTimeout`的特殊处理：`setTimeout(fn, 0)`会被强制改为`setTimeout(fn, 1)`。

看下面的例子：

```js
setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});
```

执行顺序为：

1. 遇到`setTimeout`，虽然设置的是0毫秒触发，但是被node.js强制改为1毫秒，塞入times阶段
2. 遇到`setImmediate`塞入check阶段
3. 同步代码执行完毕，进入`Event Loop`
4. 先进入`times`阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足`setTimeout`条件，执行回调，如果没过1毫秒，跳过
5. 跳过空的阶段，进入check阶段，执行`setImmediate`回调

可见，1毫秒是个关键点，所以在上面的例子中，`setImmediate`不一定在`setTimeout`之前执行了。

### 期约（ Promise ）

什么是 Promise？

 promise是一种异步操作的解决方案。

- 主要可以解决回调嵌套问题，也就是大家说的回调地狱问题。它有三种状态pending、resolved（fulfilled）、rejected。状态一旦转换后就无法改变。
- 同时promise状态是私有的，也就是外部js代码无法改变其状态，因为为了隔离外部的同步代码
  然后promise的状态改变主要通过resolve()、reject()执行器函数实现。他们两个是同步执行的。
- promise并非一开始就处于pending状态，而是通过执行刑期函数才能转换状态

语法

```
new Promise( function(resolve, reject) {...} /* executor */  )
```

构建 Promise 对象时，需要传入一个 executor 函数，主要业务流程都在 executor 函数中执行。

Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor，resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。**一旦状态改变，就不会再变**，任何时候都可以得到这个结果。

在 executor 函数中调用 resolve 函数后，会触发 promise.then 设置的回调函数；而调用 reject 函数后，会触发 promise.catch 设置的回调函数。

|            | 一切正常-> | resolved(状态) | then（回调callback）  |
| :--------: | ---------- | -------------- | --------------------- |
| Promise -> |            |                |                       |
|            | 出问题了-> | rejected(状态) | catch（回调callback） |

```js
let p1 = new Promise(()=>{
    setTimeout(()=>{
      console.log(1)
    },1000)
    console.log(2)
  })
console.log(3) // 2 3 1
```

从上面代码 能看出来先打印的是2

所以 **Promise 是用来管理异步编程的，它本身不是异步的**，new Promise的时候会立即把executor函数执行，只不过我们一般会在executor函数中处理一个异步操作

```js
let p1 = new Promise((resolve,reject)=>{
  console.log(1);
  resolve('奥里给')
  console.log(2)
})
// then:设置成功或者失败后处理的方法
p1.then(result=>{
 //p1延迟绑定回调函数
  console.log('成功 '+result)
},reason=>{
  console.log('失败 '+reason)
})
console.log(3)
// 1
// 2
// 3
// 成功 奥里给

```

new Promise的时候先执行executor函数，打印出 1、2，Promise在执行resolve时，触发微任务，还是继续往下执行同步任务， 执行p1.then时，存储起来两个函数（此时这两个函数还没有执行）,然后打印出3，此时同步任务执行完成，最后执行刚刚那个微任务，从而执行.then中成功的方法。

### Promise链式调用

把多个Promise连接到一起来表示一系列异步骤，这种方式可以实现的关键在于两个Promise 固有行为特性：

- 每次对Promise调用then，它都会创建并返回一个新的Promise，我们可以将其链接起来；
- 不管从then调用的完成回调（第一个参数）返回的值是什么，它都会被自动设置为被链接Promise（第一点中的）的完成。

```js
let p1=new Promise((resolve,reject)=>{
    resolve(100) // 决定了下个then中成功方法会被执行
})
// 连接p1
let p2=p1.then(result=>{
    console.log('成功1 '+result)
    return Promise.reject(1) 
// 返回一个新的Promise实例，决定了当前实例是失败的，所以决定下一个then中失败方法会被执行
},reason=>{
    console.log('失败1 '+reason)
    return 200
})
// 连接p2 
let p3=p2.then(result=>{
    console.log('成功2 '+result)
},reason=>{
    console.log('失败2 '+reason)
})
// 成功1 100
// 失败2 1

```

我们通过返回 Promise.reject(1) ，完成了第一个调用then创建并返回的promise p2。p2的then调用在运行时会从return Promise.reject(1) 语句接受完成值，p2.then又创建了另一个新的promise，可以用变量p3存储。

new Promise出来的实例，成功或者失败，取决于executor函数执行的时候，**执行的是resolve还是reject决定的**，或**executor函数执行发生异常错误**，这两种情况都会把实例状态改为失败的。

p2执行then返回的新实例的状态，决定下一个then中哪一个方法会被执行，有以下几种情况：

- 不论是成功的方法执行，还是失败的方法执行（then中的两个方法），凡是执行抛出了异常，则都会把实例的状态改为失败。
- 方法中如果返回一个新的Promise实例（比如上例中的Promise.reject(1)），返回这个实例的结果是成功还是失败，也决定了当前实例是成功还是失败。
- 剩下的情况基本上都是让实例变为成功的状态，上一个then中方法返回的结果会传递到下一个then的方法中。

```js
new Promise(resolve=>{
    resolve(a) // 报错 
// 这个executor函数执行发生异常错误，决定下个then失败方法会被执行
}).then(result=>{
    console.log(`成功：${result}`)
    return result*10
},reason=>{
    console.log(`失败：${reason}`)
// 执行这句时候，没有发生异常或者返回一个失败的Promise实例，所以下个then成功方法会被执行
// 这里没有return，最后会返回 undefined
}).then(result=>{
    console.log(`成功：${result}`)
},reason=>{
    console.log(`失败：${reason}`)
})
// 失败：ReferenceError: a is not defined
// 成功：undefined

```

从上面一些例子，我们可以看出，虽然使用 Promise 能很好地解决回调地狱的问题，但是这种方式充满了 Promise 的 then() 方法，如果处理流程比较复杂的话，那么整段代码将充斥着 then，语义化不明显，代码不能很好地表示执行流程。



### async&await

ES7中新增的异步编程方法，async/await的实现是基于 Promise的，简单而言就是async 函数就是返回Promise对象，是generator的语法糖。很多人认为async/await是异步操作的终极解决方案：

- 语法简洁，更像是同步代码，也更符合普通的阅读习惯；
- 改进JS中异步操作串行执行的代码组织方式，减少callback的嵌套；
- Promise中不能自定义使用try/catch进行错误捕获，但是在Async/await中可以像处理同步代码处理错误。

不过也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。

```js
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch(url1)
  await fetch(url2)
  await fetch(url3)
}

```



### 常用的方法

### 1、Promise.resolve()

Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。 Promise.resolve()等价于下面的写法:

```
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
复制代码
```

Promise.resolve方法的参数分成四种情况。

（1）参数是一个 Promise 实例

如果参数是 Promise 实例，那么Promise.resolve将**不做任何修改、原封不动地**返回这个实例。

```
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
复制代码
```

上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

（2）参数不是具有then方法的对象，或根本就不是对象

```
Promise.resolve("Success").then(function(value) {
 // Promise.resolve方法的参数，会同时传给回调函数。
  console.log(value); // "Success"
}, function(value) {
  // 不会被调用
});
复制代码
```

（3）不带有任何参数

Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。

```
Promise.resolve().then(function () {
  console.log('two');
});
console.log('one');
// one two
复制代码
```

（4）参数是一个thenable对象

thenable对象指的是具有then方法的对象,Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。

```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
复制代码
```

### 2、Promise.reject()

Promise.reject()方法返回一个带有拒绝原因的Promise对象。

```
new Promise((resolve,reject) => {
    reject(new Error("出错了"));
});
// 等价于
 Promise.reject(new Error("出错了"));  

// 使用方法
Promise.reject(new Error("BOOM!")).catch(error => {
    console.error(error);
});
复制代码
```

值得注意的是，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而**不应该直接写在resolve或reject的后面**。所以，最好在它们前面加上return语句，这样就不会有意外。

```
new Promise((resolve, reject) => {
  return reject(1);
  // 后面的语句不会执行
  console.log(2);
})
复制代码
```

### 3、Promise.all()

```
let p1 = Promise.resolve(1)
let p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
let p3 = Promise.resolve(3)
Promise.all([p3, p2, p1])
  .then(result => {
 // 返回的结果是按照Array中编写实例的顺序来
    console.log(result) // [ 3, 2, 1 ]
  })
  .catch(reason => {
    console.log("失败:reason")
  })
复制代码
```

Promise.all 生成并返回一个新的 Promise 对象，所以它可以使用 Promise 实例的所有方法。参数传递promise数组中**所有的 Promise 对象都变为resolve的时候**，该方法才会返回， 新创建的 Promise 则会使用这些 promise 的值。

如果参数中的**任何一个promise为reject的话**，则整个Promise.all调用会**立即终止**，并返回一个reject的新的 Promise 对象。

### 4、Promise.allSettled()

有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。这时，ES2020 引入Promise.allSettled()方法就很有用。如果没有这个方法，想要确保所有操作都结束，就很麻烦。Promise.all()方法无法做到这一点。

假如有这样的场景：一个页面有三个区域，分别对应三个独立的接口数据，使用 Promise.all 来并发请求三个接口，如果其中任意一个接口出现异常，状态是reject,这会导致页面中该三个区域数据全都无法出来，显然这种状况我们是无法接受，Promise.allSettled的出现就可以解决这个痛点：

```
Promise.allSettled([
  Promise.reject({ code: 500, msg: '服务异常' }),
  Promise.resolve({ code: 200, list: [] }),
  Promise.resolve({ code: 200, list: [] })
]).then(res => {
  console.log(res)
  /*
    0: {status: "rejected", reason: {…}}
    1: {status: "fulfilled", value: {…}}
    2: {status: "fulfilled", value: {…}}
  */
  // 过滤掉 rejected 状态，尽可能多的保证页面区域数据渲染
  RenderContent(
    res.filter(el => {
      return el.status !== 'rejected'
    })
  )
})
复制代码
```

Promise.allSettled跟Promise.all类似, 其参数接受一个Promise的数组, 返回一个新的Promise, **唯一的不同在于, 它不会进行短路**, 也就是说当Promise全部处理完成后,我们可以拿到每个Promise的状态, 而不管是否处理成功。

### 5、Promise.race()

Promise.all()方法的效果是"谁跑的慢，以谁为准执行回调"，那么相对的就有另一个方法"谁跑的快，以谁为准执行回调"，这就是Promise.race()方法，这个词本来就是赛跑的意思。race的用法与all一样，接收一个promise对象数组为参数。

Promise.all在接收到的所有的对象promise都变为FulFilled或者Rejected状态之后才会继续进行后面的处理，与之相对的是Promise.race**只要有一个promise对象进入FulFilled或者Rejected状态的话**，就会继续进行后面的处理。

```
// `delay`毫秒后执行resolve
function timerPromisefy(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
}
// 任何一个promise变为resolve或reject的话程序就停止运行
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64)
]).then(function (value) {
    console.log(value);    // => 1
});
复制代码
```

上面的代码创建了3个promise对象，这些promise对象会分别在1ms、32ms 和 64ms后变为确定状态，即FulFilled，并且在第一个变为确定状态的1ms后，.then注册的回调函数就会被调用。

### 6、Promise.prototype.finally()

ES9 新增 finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。**这为在Promise是否成功完成后都需要执行的代码提供了一种方式**。这避免了同样的语句需要在then()和catch()中各写一次的情况。

比如我们发送请求之前会出现一个loading，当我们请求发送完成之后，不管请求有没有出错，我们都希望关掉这个loading。

```
this.loading = true
request()
  .then((res) => {
    // do something
  })
  .catch(() => {
    // log err
  })
  .finally(() => {
    this.loading = false
  })
复制代码
```

finally方法的回调函数不接受任何参数，这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

### 思考:

```js
//1
for(var i=0;i<5;i++){
      setTimeout(function(){
              console.log(i) // ？ //求打印结果
      },1000)
}
//2
let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve()
//console.log(p1 === p2)  //  ? 


//3

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
 
setTimeout(function() {
  console.log('setTimeout')
}, 0)
 
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
 
console.log('script end')

//求打印顺序？
```

```js
//4
let p1 = Promise.resolve(1)
let p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
async function fn() {
  console.log(1)
// 当代码执行到此行（先把此行），构建一个异步的微任务
// 等待promise返回结果，并且await下面的代码也都被列到任务队列中
  let result1 = await p2
  console.log(3)
  let result2 = await p1
  console.log(4)
}
fn()
console.log(2)
// ??? 打印顺序

```

