今天的作业晚上12点提交

原型链的理解
prototype ，理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，
这个对象就是我们所说的原型，每一个对象都会从原型继承属性。
__proto__，这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
constructor，每个原型都有一个 constructor 属性指向关联的构造函数。
然后我们引入原形链的概念：当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，
如果还查不到，就去找原型的原型，一直找到最顶层为止。

2
1
2
1
1

num() { console.log(5); }
1
1
undefined

1
1
undefined

第一种
    for (var i = 0; i < 10; i++) { 
        console.log(i); 
    }
第二种
    for (let i = 0; i < 10; i++) {
        setTimeout(() => { 
            document.write(i+'<br>')
        }, 100);
    }
第三种


^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$

function A() {}
function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
function C() {}
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;

var c1 = new C();
c1.prototype === c1.__proto__constructor

c1.__proto__ === C.prototype 
c1.__proto__.prototype ===   c1.prototype
c1.__proto__.__proto__ === B.prototype 
c1.__proto__.__proto__.__proto__ ===  A.prototype 
c1.__proto__.constructor === C.prototype
c1.__proto__.constructor.prototype === C.prototype
c1.__proto__.constructor.prototype.constructor ===C 
C.prototype.constructor === C
C.prototype.constructor.prototype === c1.__proto__ 
C.prototype.constructor.prototype.constructor ===  C
C.prototype.__proto__ === B.prototype