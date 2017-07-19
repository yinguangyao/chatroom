### 第一章 ###
+ 当构造函数中没有返回值或者返回值不为对象的时候，new一个实例的时候默认返回的是这个实例对象，否则就返回返回值的那个对象。
PS:函数也算一种特殊的对象，当返回函数的时候，同样适用。
+ 可以通过类似jquery的封装extend方法的形式给类和实例增加新的属性和方法，这样避免了直接用prototype导致的添加混乱问题。
```
function Fn1() {
  this.name = 'peter';
  return {
    name: 'jack'
  };

}

function Fn2() {
  this.name = 'peter';
  return 'jack';
}

var obj1 = new Fn1();
var obj2 = new Fn2();
console.log(obj1.name, obj2.name); // jack, peter
```
+ 使用apply和call函数可以实现委托和改变this指向，比如我们常见的var self = this;完全可以用call函数来改变作用域，其他的比如console.log.call(console, arr);这样可以将数组分别打印出来