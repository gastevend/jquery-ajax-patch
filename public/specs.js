webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load all specs so webpack can find them. Think of this as an automatic
	// manifest for bundling specs.

	var req = __webpack_require__(21);
	req.keys().forEach(req);

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(9);

	var index = function index() {
	  return $.ajax({
	    url: app.host + '/books',
	    method: 'GET'
	  });
	};

	var show = function show(id) {
	  return $.ajax({
	    url: app.host + '/books/' + id,
	    method: 'GET'
	  });
	};

	var destroy = function destroy(id) {
	  return $.ajax({
	    url: app.host + '/books/' + id,
	    method: 'DELETE'
	  });
	};

	var update = function update(data) {
	  return $.ajax({
	    url: app.host + '/books/' + data.book.id,
	    method: 'PATCH',
	    data: data
	  });
	};

	var create = function create(data) {
	  return $.ajax({
	    url: app.host + '/books',
	    method: 'POST',
	    data: data
	  });
	};

	module.exports = {
	  index: index,
	  show: show,
	  destroy: destroy,
	  update: update,
	  create: create
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  host: 'http://localhost:4741'
	};

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./library-api.spec.js": 22
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 21;


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var booksApi = __webpack_require__(8);

	describe('Example', function () {
	  it('is true', function () {
	    expect(booksApi).toBe(true);
	  });
	});

/***/ }

});