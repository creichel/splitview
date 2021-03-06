// Selector - Single
/*var $ = function(selector) {
	return document.querySelector(selector);
}*/

// Selector - Multiple
var $$ = function(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
};


var $$$ = function(selector, context) {
	context = context || document;
	var elements = Array.prototype.slice.call(context.querySelectorAll(selector));
	elements.click = function(cb){
		elements.forEach(function(el){
			el.addEventListener('click', function(e){
				e.stopPropagation();
				cb.apply(elements,[e]);
			});
		});
	};
	elements.keypress = function(cb){
		elements.forEach(function(el){
			el.addEventListener('keypress', function(e){
				e.stopPropagation();
				cb.apply(elements,[e]);
			});
		});
	};
	elements.show = function(cb){
		elements.forEach(function(el){
			el.classList.add('active');
		});
	};
	elements.hide = function(cb){
		elements.forEach(function(el){
			el.classList.remove('active');
		});
	};
	elements.blur = function(cb){
		elements.forEach(function(el){
			el.blur();
		});
	};
	elements.focus = function(cb){
		elements.forEach(function(el){
			el.focus();
		});
	};
	elements.toggle = function(cb){
		elements.forEach(function(el){
			el.classList.toggle('active');
		});
	};
	elements.hasClass = function(cb){
		elements.forEach(function(el){
			if( el.classList.contains(cb) ) {
				return true;
			}
		});
	};
	return elements;
};