var observer = {
	subscribe: function(event, callback) {
		debugger;
		var call = this._callback || (this._callback={}); // 如果_callback不存在就赋值为空对象，并且将其赋值给call。
		(this._callback[event] || (this._callback[event]=[])).push(callback);
		return this;
	},
	publish: function() {
		var args = [].slice.call(arguments);
		var event = args.shift(), list;
		if(!this._callback) return this;
		if(!(list = this._callback[event])) return this;
		for(var i = 0, length = list.length; i < length; i++) {
			list[i].apply(this, args);
		}
	},
	unsubscribe: function() {
		var args = [].slice.call(arguments);
		var event = args.shift();
		if(!(this._callback && this._callback[event])) return this;
		var self = this;
		args.forEach(function(callback, i) {
			var index = self._callback[event].indexOf(callback);
			index>=0 && self._callback[event].splice(index, 1);
		})
	}
}
// 例子
var hello = function() {
	alert("hello");
}
var world = function() {
	alert("world");
}
observer.subscribe("test", hello)
observer.subscribe("test", world)
observer.unsubscribe("test", hello);
observer.publish("test");