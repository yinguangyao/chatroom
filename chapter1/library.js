// MVC和命名空间
var Animal = function() {
	var Cat = function() {
	}
	Cat.fn = Cat.prototype;
	Cat.extend = function(obj) { // 添加静态属性
		for (var key in obj) {
			Cat[key] = obj[key];
		}
	} 
	Cat.include = function(obj) { // 添加实例属性
		for (var key in obj) {
			Cat.fn[key] = obj[key];
		}
	}
	return Cat;
}
// 例子
var Cat = new Animal();
Cat.extend({
  food: "fish",
  age: function() {
    console.log("age is 20");
  }
})