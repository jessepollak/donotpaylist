<<<<<<< Updated upstream
module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="assets/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(2),c=o(l),s=n(51),f=o(s),p=n(52),d=o(p),y=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement(f["default"],{title:"React Webpack Node",meta:d["default"].meta,link:d["default"].link})}}]),t}(c["default"].Component);c["default"].renderToString(c["default"].createElement(y,null));var _=f["default"].rewind();t["default"]=_,e.exports=t["default"]},2:function(e,t){e.exports=require("react")},51:function(e,t){e.exports=require("react-helmet")},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=o(r),u=n(54),i=o(u),l=n(55),c=o(l),s=n(56),f=o(s),p={link:[{rel:"icon",href:f["default"]},{rel:"icon",sizes:"192x192",href:a["default"]},{rel:"apple-touch-icon",sizes:"152x152",applecon:i["default"]},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Condensed",type:"text/css"},{rel:"stylesheet",href:"/assets/styles/main.css"}],meta:[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"description",content:"An isomorphic React alt boilerplate with Express and MongoDB deployable to Heroku"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"apple-mobile-web-app-title",content:"React Webpack Node"},{name:"msapplication-TileImage",content:c["default"]},{name:"msapplication-TileColor",content:"#3372DF"}]};t["default"]=p,e.exports=t["default"]},53:function(e,t,n){e.exports=n.p+"3f1998aca65909c0bd077ca705e7d25c.png"},54:function(e,t,n){e.exports=n.p+"ddaf6d6ec871786ec6ee85b2869447b0.png"},55:function(e,t,n){e.exports=n.p+"751390a95ba609212014ff3c73ebf976.png"},56:function(e,t,n){e.exports=n.p+"356c1266f93ade08f69d3e954c0e5fc9.png"}});
=======
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(218);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _helmconfigJs = __webpack_require__(219);

	var _helmconfigJs2 = _interopRequireDefault(_helmconfigJs);

	var Header = (function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_reactHelmet2['default'], {
	        title: 'React Webpack Node',
	        meta: _helmconfigJs2['default'].meta,
	        link: _helmconfigJs2['default'].link
	      });
	    }
	  }]);

	  return Header;
	})(_react2['default'].Component);

	_react2['default'].renderToString(_react2['default'].createElement(Header, null));
	var header = _reactHelmet2['default'].rewind();

	exports['default'] = header;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 218:
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/*
	 * Based on the template in Web Starter Kit : https://github.com/google/web-starter-kit/blob/master/app/index.html
	 * To add to the config, add an object:
	 * {
	 *  type: "link" | "meta",
	 *  sizes: "widthxheight",
	 *  rel: "rel value"
	 *  filename: <Name of your file"
	 * }
	 */

	// Import all your needed files first (webpack will grab the url)
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fileImagesChromeNinja192PrecomposedPng = __webpack_require__(220);

	var _fileImagesChromeNinja192PrecomposedPng2 = _interopRequireDefault(_fileImagesChromeNinja192PrecomposedPng);

	var _fileImagesAppleNinja152PrecomposedPng = __webpack_require__(221);

	var _fileImagesAppleNinja152PrecomposedPng2 = _interopRequireDefault(_fileImagesAppleNinja152PrecomposedPng);

	var _fileImagesMsNinja144PrecomposedPng = __webpack_require__(222);

	var _fileImagesMsNinja144PrecomposedPng2 = _interopRequireDefault(_fileImagesMsNinja144PrecomposedPng);

	var _fileImagesFaviconPng = __webpack_require__(223);

	var _fileImagesFaviconPng2 = _interopRequireDefault(_fileImagesFaviconPng);

	var config = {
	  link: [
	  // Add to homescreen for Chrome on Android
	  { "rel": "icon", "href": _fileImagesFaviconPng2['default'] }, { "rel": "icon", "sizes": "192x192", "href": _fileImagesChromeNinja192PrecomposedPng2['default'] },
	  // Add to homescreen for Safari on IOS
	  { "rel": "apple-touch-icon", "sizes": "152x152", applecon: _fileImagesAppleNinja152PrecomposedPng2['default'] }, { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Roboto+Condensed", "type": "text/css" }, { "rel": "stylesheet", "href": "/assets/styles/main.css" }
	  // SEO: If your mobile URL is different from the desktop URL,
	  // add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones
	  // { "rel": "canonical", "href": "http://www.example.com/" }
	  ],
	  meta: [{ "charset": "utf-8" },
	  // Setting IE=edge tells Internet Explorer to use the latest engine to render the page and execute Javascript
	  { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
	  //  Meta descriptions are commonly used on search engine result pages to display preview snippets for a given page.
	  { "name": "description", "content": "An isomorphic React alt boilerplate with Express and MongoDB deployable to Heroku" },
	  // Mobile Safari introduced this tag to let web developers control the viewport's size and scale
	  // The width property controls the size of the viewport, the initial-scale property controls
	  // the zoom level when the page is first loaded
	  { "name": "viewport", "content": "width=device-width, initial-scale=1" },
	  // Add to homescreen for Chrome on Android
	  { "name": "mobile-web-app-capable", "content": "yes" },
	  // Add to homescreen for Safari on IOS
	  { "name": "apple-mobile-web-app-capable", "content": "yes" }, { "name": "apple-mobile-web-app-status-bar-style", "content": "black" }, { "name": "apple-mobile-web-app-title", "content": "React Webpack Node" },
	  // Tile icon for Win8 (144x144 + tile color)
	  { "name": "msapplication-TileImage", "content": _fileImagesMsNinja144PrecomposedPng2['default'] }, { "name": "msapplication-TileColor", "content": "#3372DF" }]
	};

	exports['default'] = config;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jessepollak/repos/donotpaylist/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "helmconfig.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3f1998aca65909c0bd077ca705e7d25c.png"

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ddaf6d6ec871786ec6ee85b2869447b0.png"

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "751390a95ba609212014ff3c73ebf976.png"

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "356c1266f93ade08f69d3e954c0e5fc9.png"

/***/ }

/******/ });
>>>>>>> Stashed changes
