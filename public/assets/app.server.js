module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="assets/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){var o=m(d["default"],e,t,n);return h["default"].replace("CONTENT",o)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=n(45),u=o(a),i=n(1),l=o(i),c=n(8),s=n(40),f=o(s),p=n(3),d=o(p),_=n(24),y=o(_),v=n(42),h=o(v),m=function(e,t,n,o){var r=void 0,a=void 0,i=new f["default"](n.url);return e.bootstrap(t),c.match({routes:y["default"],location:i},function(t,n,i){n?o.redirect(301,n.pathname+n.search):t?o.send(500,t.message):null==i?o.send(404,"Not found"):a=l["default"].renderToString(l["default"].createElement(c.RoutingContext,i)),r=u["default"].render(a,e.flush())}),r};e.exports=t["default"]},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("immutable")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),a=o(r);t["default"]=new a["default"],e.exports=t["default"]},function(e,t){e.exports={entrybox:"entrybox__1Olyo",entrybox__header:"entrybox__header__2gfD5",entrybox__input:"entrybox__input__30yEz",vote:"vote__2hul5","main-section":"main-section__1tUi8","main-section__header":"main-section__header__TbIGz","main-section__list":"main-section__list__2FsWi","topic-item__topic":"topic-item__topic__r4Xy-","topic-item__button":"topic-item__button__3A6PW","topic-item__button--increment":"topic-item__button--increment__2vURS","topic-item__button--decrement":"topic-item__button--decrement__oI160","topic-item__button--destroy":"topic-item__button--destroy__bvNVD",scoreboard:"scoreboard__2blSL",scoreboard__header:"scoreboard__header__pX-cx",scoreboard__list:"scoreboard__list__eu-Vg",scoreboard__topic:"scoreboard__topic__24SHO",scoreboard__count:"scoreboard__count__1smTP"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),i=o(u),l=n(26),c=o(l),s=function(){function e(){r(this,e)}return a(e,[{key:"create",value:function(e){if(e.trim().length>0){var t=Date.now().toString(),n={id:t,count:1,text:e};this.dispatch(n),c["default"].addTopic(n).done(function(){}).fail(function(){})}}},{key:"increment",value:function(e){this.dispatch(e),c["default"].updateTopic({id:e},!1,!0)}},{key:"decrement",value:function(e){this.dispatch(e),c["default"].updateTopic({id:e},!1,!1)}},{key:"destroy",value:function(e){this.dispatch(e),c["default"].deleteTopic({id:e})}},{key:"typing",value:function(e){this.dispatch(e)}}]),e}();t["default"]=i["default"].createActions(s),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),i=o(u),l=n(27),c=o(l),s=function(){function e(){r(this,e)}return a(e,[{key:"manuallogin",value:function(e){var t=this;this.dispatch(),c["default"].manuallogin(e).then(function(n,o){"success"===o&&t.actions.loginsuccess(e.email)},function(){})}},{key:"loginsuccess",value:function(e){this.dispatch(e)}},{key:"register",value:function(e){this.dispatch(e)}},{key:"logout",value:function(){var e=this;this.dispatch(),c["default"].logout().then(function(t,n){"success"===n&&e.actions.logoutsuccess()},function(){})}},{key:"logoutsuccess",value:function(){this.dispatch()}}]),e}();t["default"]=i["default"].createActions(s),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),i=o(u),l=n(6),c=o(l),s=n(3),f=o(s),p=function(){function e(){r(this,e),this.user=i["default"].Map({}),this.on("init",this.bootstrap),this.on("bootstrap",this.bootstrap),this.bindListeners({handleLoginAttempt:c["default"].MANUALLOGIN,handleLoginSuccess:c["default"].LOGINSUCCESS,handleLogoutAttempt:c["default"].LOGOUT,handleLogoutSuccess:c["default"].LOGOUTSUCCESS})}return a(e,[{key:"bootstrap",value:function(){i["default"].Map.isMap(this.user)||(this.user=i["default"].fromJS(this.user))}},{key:"handleLoginAttempt",value:function(){this.user=this.user.set("isWaiting",!0),this.emitChange()}},{key:"handleLoginSuccess",value:function(){this.user=this.user.merge({isWaiting:!1,authenticated:!0}),this.emitChange()}},{key:"handleLogoutAttempt",value:function(){this.user=this.user.set("isWaiting",!0),this.emitChange()}},{key:"handleLogoutSuccess",value:function(){this.user=this.user.merge({isWaiting:!1,authenticated:!1}),this.emitChange()}}]),e}();t["default"]=f["default"].createStore(p,"UserStore"),e.exports=t["default"]},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("jquery")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(29),f=o(s),p=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:f["default"].about},c["default"].createElement("h1",{className:f["default"].about__header},"About Ninja Ocean"),c["default"].createElement("p",{className:f["default"].about__description},"Ninja Ocean is comprised of a team of passionate developers, hackers & scientists, aimed to do good."))}}]),t}(c["default"].Component);t["default"]=p,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(44),f=o(s),p=n(7),d=o(p),_=n(25),y=o(_),v=n(17),h=o(v);n(34);var m=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement(f["default"],{stores:{UserStore:d["default"],TopicStore:y["default"]}},c["default"].createElement(h["default"],null),this.props.children)}}]),t}(c["default"].Component);t["default"]=m,m.propTypes={children:c["default"].PropTypes.object},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",null,"Welcome to the Dashboard")}}]),t}(c["default"].Component);t["default"]=s,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(5),f=o(s),p=n(21),d=o(p),_=n(30),y=o(_),v=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this._onSave=function(e){f["default"].create(e)},this._onChange=function(e){f["default"].typing(e)}}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:y["default"].entrybox},c["default"].createElement("h1",{className:y["default"].entrybox__header},"Vote for your top hack idea"),c["default"].createElement(d["default"],{className:y["default"].entrybox__input,value:this.props.topic,placeholder:"What's yer fav idea?",onChange:this._onChange,onSave:this._onSave}))}}]),t}(c["default"].Component);t["default"]=v,v.propTypes={topic:c["default"].PropTypes.string},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(2),f=o(s),p=n(6),d=o(p),_=n(7),y=o(_),v=n(31),h=o(v),m=function(e){function t(e){var n=this;r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._onChange=function(){n.setState({user:y["default"].getState().user})},this._onLoginSubmit=function(){var e=c["default"].findDOMNode(n.refs.email).value,t=c["default"].findDOMNode(n.refs.password).value;d["default"].manuallogin({email:e,password:t})},this.state=y["default"].getState()}return a(t,e),u(t,[{key:"componentDidMount",value:function(){y["default"].listen(this._onChange)}},{key:"componentWillUnmount",value:function(){y["default"].unlisten(this._onChange)}},{key:"render",value:function(){var e=void 0;return e=this.state.user.get("authenticated")?c["default"].createElement("h1",{className:h["default"].login__header},"You are logged in amigo"):this.state.user.get("isWaiting")?c["default"].createElement("h1",{className:h["default"].login__header},"Waiting ..."):c["default"].createElement("div",{className:h["default"].login__container},c["default"].createElement("h1",{className:h["default"].login__header},"Email Login Demo"),c["default"].createElement("fieldset",{className:h["default"].login__fieldset},c["default"].createElement("input",{className:h["default"].login__input,type:"email",ref:"email",placeholder:"email"}),c["default"].createElement("input",{className:h["default"].login__input,type:"password",ref:"password",placeholder:"password"}),c["default"].createElement("button",{className:h["default"].login__button+" "+h["default"]["login__button--green"],onClick:this._onLoginSubmit},"Login"),c["default"].createElement("p",{className:h["default"].login__hint},"Hint: email: example@ninja.com password: ninja")),c["default"].createElement("h1",{className:h["default"].login__header},"Google Login Demo"),c["default"].createElement("fieldset",{className:h["default"].login__fieldset},c["default"].createElement("a",{className:h["default"].login__button+" "+h["default"]["login__button--green"],href:"/auth/google"},"Login with Google"))),c["default"].createElement("div",{className:h["default"].login},e)}}]),t}(c["default"].Component);t["default"]=m,m.propTypes={user:c["default"].PropTypes.instanceOf(f["default"].Map)},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(32),f=o(s),p=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:f["default"].logout},c["default"].createElement("h1",{className:f["default"].logout__header},"Hey m8, you have been logged out"))}}]),t}(c["default"].Component);t["default"]=p,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(2),f=o(s),p=n(20),d=o(p),_=n(4),y=o(_),v=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.topics.toKeyedSeq().map(function(e,t){return c["default"].createElement(d["default"],{id:t,key:t,text:e.get("text")})}).toArray();return c["default"].createElement("div",{className:y["default"]["main-section"]},c["default"].createElement("h3",{className:y["default"]["main-section__header"]},"Vote for your favorite hack day idea"),c["default"].createElement("ul",{className:y["default"]["main-section__list"]},e))}}]),t}(c["default"].Component);t["default"]=v,v.propTypes={topics:c["default"].PropTypes.instanceOf(f["default"].OrderedMap)},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(8),f=n(6),p=o(f),d=n(33),_=o(d),y=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this._onLogout=function(){p["default"].logout()}}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("nav",{className:_["default"].navigation,role:"navigation"},c["default"].createElement(s.Link,{to:"/",className:_["default"].navigation__item+" "+_["default"]["navigation__item--logo"],activeClassName:_["default"]["navigation__item--active"]},"Ninja Ocean"),this.props.UserStore.user.get("authenticated")?c["default"].createElement(s.Link,{onClick:this._onLogout,className:_["default"].navigation__item,to:"/logout"},"Logout"):c["default"].createElement(s.Link,{className:_["default"].navigation__item,to:"/login"},"Log in"),c["default"].createElement(s.Link,{className:_["default"].navigation__item,to:"/dashboard"},"Dashboard"),c["default"].createElement(s.Link,{to:"/about",className:_["default"].navigation__item,activeClassName:_["default"]["navigation__item--active"]},"About"))}}]),t}(c["default"].Component);t["default"]=y,y.propTypes={UserStore:c["default"].PropTypes.object},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(2),f=o(s),p=n(19),d=o(p),_=n(4),y=o(_),v=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.topics.toKeyedSeq().map(function(e,t){return c["default"].createElement(d["default"],{key:t,title:e.get("text"),count:e.get("count")})}).toArray();return c["default"].createElement("div",{className:y["default"].scoreboard},c["default"].createElement("h3",{className:y["default"].scoreboard__header},"Vote count"),c["default"].createElement("ul",{className:y["default"].scoreboard__list},e))}}]),t}(c["default"].Component);t["default"]=v,v.propTypes={topics:c["default"].PropTypes.instanceOf(f["default"].OrderedMap)},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(4),f=o(s),p=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("li",{className:f["default"]["scoreboard__list-item"],key:this.props.key},c["default"].createElement("span",{className:f["default"].scoreboard__topic},this.props.title),c["default"].createElement("span",{className:f["default"].scoreboard__count},this.props.count))}}]),t}(c["default"].Component);t["default"]=p,p.propTypes={key:c["default"].PropTypes.string,title:c["default"].PropTypes.string,count:c["default"].PropTypes.number},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(5),f=o(s),p=n(4),d=o(p),_=function(e){function t(){var e=this;r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this._onIncrement=function(){f["default"].increment(e.props.id)},this._onDecrement=function(){f["default"].decrement(e.props.id)},this._onDestroyClick=function(){f["default"].destroy(e.props.id)}}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("li",{className:d["default"]["topic-item"],key:this.props.id},c["default"].createElement("span",{className:d["default"]["topic-item__topic"]},this.props.text),c["default"].createElement("button",{className:d["default"]["topic-item__button"]+" "+d["default"]["topic-item__button--increment"],onClick:this._onIncrement},"+"),c["default"].createElement("button",{className:d["default"]["topic-item__button"]+" "+d["default"]["topic-item__button--decrement"],onClick:this._onDecrement},"-"),c["default"].createElement("button",{className:d["default"]["topic-item__button"]+" "+d["default"]["topic-item__button--destroy"],onClick:this._onDestroyClick},String.fromCharCode(215)))}}]),t}(c["default"].Component);t["default"]=_,_.propTypes={id:c["default"].PropTypes.string,text:c["default"].PropTypes.string},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=13,f=function(e){function t(){var e=this;r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this._onSave=function(){e.props.onSave(e.props.value)},this._onChange=function(t){e.props.onChange(t.target.value)},this._onKeyDown=function(t){t.keyCode===s&&e._onSave()}}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("input",{className:this.props.className,placeholder:this.props.placeholder,onChange:this._onChange,onKeyDown:this._onKeyDown,value:this.props.value,autoFocus:!0})}}]),t}(c["default"].Component);t["default"]=f,f.propTypes={className:c["default"].PropTypes.string,placeholder:c["default"].PropTypes.string,value:c["default"].PropTypes.string,onSave:c["default"].PropTypes.func,onChange:c["default"].PropTypes.func},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(e,t,n){for(var o=!0;o;){var r=e,a=t,u=n;i=c=l=void 0,o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,a);if(void 0!==i){if("value"in i)return i.value;var l=i.get;return void 0===l?void 0:l.call(u)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=u,o=!0}},l=n(1),c=o(l),s=n(13),f=o(s),p=n(16),d=o(p),_=n(18),y=o(_),v=n(4),h=o(v),m=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:h["default"].vote},c["default"].createElement(f["default"],{topic:this.props.TopicStore.newTopic}),c["default"].createElement(d["default"],{topics:this.props.TopicStore.topics}),c["default"].createElement(y["default"],{topics:this.props.TopicStore.topics}))}}]),t}(c["default"].Component);t["default"]=m,m.propTypes={TopicStore:c["default"].PropTypes.object},e.exports=t["default"]},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){j["default"].getState().user.get("authenticated")||t({nextPathname:e.location.pathname},"/login")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=o(a),i=n(8),l=o(i),c=n(11),s=o(c),f=n(22),p=o(f),d=n(10),_=o(d),y=n(14),v=o(y),h=n(15),m=o(h),b=n(12),g=o(b),O=n(7),j=o(O);t["default"]=u["default"].createElement(l["default"],{component:s["default"]},u["default"].createElement(l["default"],{path:"/",component:p["default"]
}),u["default"].createElement(l["default"],{path:"login",component:v["default"]}),u["default"].createElement(l["default"],{path:"logout",component:m["default"]}),u["default"].createElement(l["default"],{path:"dashboard",component:g["default"],onEnter:r}),u["default"].createElement(l["default"],{path:"about",component:_["default"]})),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),i=o(u),l=n(5),c=o(l),s=n(28),f=n(3),p=o(f),d=function(){function e(){r(this,e),this.topics=i["default"].OrderedMap({}),this.newTopic="",this.on("init",this.bootstrap),this.on("bootstrap",this.bootstrap),this.bindListeners({handleIncrement:c["default"].INCREMENT,handleDecrement:c["default"].DECREMENT,handleCreate:c["default"].CREATE,handleDestroy:c["default"].DESTROY,handleTyping:c["default"].TYPING})}return a(e,[{key:"bootstrap",value:function(){i["default"].OrderedMap.isOrderedMap(this.topics)||(this.topics=s.fromJSOrdered(this.topics)),this.newTopic=""}},{key:"handleIncrement",value:function(e){var t=this.topics.get(e),n=t.get("count");this.topics=this.topics.set(e,t.set("count",n+1)),this.emitChange()}},{key:"handleDecrement",value:function(e){var t=this.topics.get(e),n=t.get("count");this.topics=this.topics.set(e,t.set("count",n-1)),this.emitChange()}},{key:"handleCreate",value:function(e){var t=e.id;this.topics=this.topics.set(t,i["default"].fromJS(e)),this.emitChange()}},{key:"handleDestroy",value:function(e){this.topics=this.topics["delete"](e),this.emitChange()}},{key:"handleTyping",value:function(e){this.newTopic=e,this.emitChange()}}]),e}();t["default"]=p["default"].createStore(d,"TopicStore"),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=o(r),u=Object.prototype.propertyIsEnumerable,i=function(e){if(null==e)throw new TypeError("Object assign cannot be called with null or undefined");return Object(e)},l=function(e){var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t.filter(function(t){return u.call(e,t)})},c=function(){return Object.assign?Object.assign:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;t>o;o++)n[o-1]=arguments[o];var r=void 0,a=i(e);return n.forEach(function(e){r=l(Object(e)),r.forEach(function(t){a[t]=e[t]})}),a}}(),s=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return c.apply(void 0,[{}].concat(t))},f={addTopic:function(e){return a["default"].ajax({url:"/topic",data:JSON.stringify(e),type:"POST",contentType:"application/json"})},updateTopic:function(e,t,n){var o=s(e,{isFull:t,isIncrement:n});return a["default"].ajax({url:"/topic",data:JSON.stringify(o),type:"PUT",contentType:"application/json"})},deleteTopic:function(e){return a["default"].ajax({url:"/topic",data:JSON.stringify(e),contentType:"application/json",type:"DELETE"})}};t["default"]=f,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=o(r),u={manuallogin:function(e){return a["default"].ajax({url:"/login",type:"POST",contentType:"application/json",data:JSON.stringify(e)})},logout:function(){return a["default"].ajax({url:"/logout",type:"GET"})},signup:function(e){return a["default"].ajax({url:"/signup",type:"POST",contentType:"application/json",data:JSON.stringify(e)})}};t["default"]=u,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"object"!=typeof e||null===e?e:Array.isArray(e)?i["default"].Seq(e).map(r).toList():i["default"].Seq(e).map(r).toMap()}function a(e){return"object"!=typeof e||null===e?e:Array.isArray(e)?i["default"].Seq(e).map(r).toList():i["default"].Seq(e).map(r).toOrderedMap()}Object.defineProperty(t,"__esModule",{value:!0}),t.fromJSGreedy=r,t.fromJSOrdered=a;var u=n(2),i=o(u)},function(e,t){e.exports={about:"about__dEvAE",about__header:"about__header__19WTi",about__description:"about__description__1B9Na"}},function(e,t){e.exports={entrybox:"entrybox__W1vEi",entrybox__header:"entrybox__header__1P4ZL",entrybox__input:"entrybox__input__1Wu3X"}},function(e,t){e.exports={login__header:"login__header__36sES",login__fieldset:"login__fieldset__1E0H6",login__input:"login__input__1VmZH",login__button:"login__button__2HIsY","login__button--green":"login__button--green__38KfC",login__hint:"login__hint__In_qu"}},function(e,t){e.exports={logout__header:"logout__header__Oeknx"}},function(e,t){e.exports={navigation:"navigation__1G2hS",navigation__item:"navigation__item__A4Pds","navigation__item--logo":"navigation__item--logo__B2-dw","navigation__item--active":"navigation__item--active__1zRah"}},function(e,t){},,,,,function(e,t){"use strict";t.__esModule=!0;var n="PUSH";t.PUSH=n;var o="REPLACE";t.REPLACE=o;var r="POP";t.POP=r,t["default"]={PUSH:n,REPLACE:o,POP:r}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?"/":arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?a.POP:arguments[2],o=arguments.length<=3||void 0===arguments[3]?null:arguments[3];"string"==typeof e&&(e=i["default"](e));var r=e.pathname||"/",u=e.search||"",l=e.hash||"";return{pathname:r,search:u,hash:l,state:t,action:n,key:o}}t.__esModule=!0;var a=n(39),u=n(41),i=o(u);t["default"]=r,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.match(/https?:\/\/[^\/]*/);return null==t?e:(i["default"](!1,'A path must be pathname + search + hash only, not a fully qualified URL like "%s"',e),e.substring(t[0].length))}function a(e){var t=r(e),n="",o="",a=t.indexOf("#");-1!==a&&(o=t.substring(a),t=t.substring(0,a));var u=t.indexOf("?");return-1!==u&&(n=t.substring(u),t=t.substring(0,u)),""===t&&(t="/"),{pathname:t,search:n,hash:o}}t.__esModule=!0;var u=n(47),i=o(u);t["default"]=a,e.exports=t["default"]},function(e,t){e.exports="<!DOCTYPE html><html><head><title>TITLE</title>META LINK<div class=app>CONTENT</div><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n    ga('create', 'UA-XXXXX-X', 'auto');\n    ga('send', 'pageview');</script><script type=text/javascript charset=utf-8 src=/assets/app.js></script>"},function(e,t){e.exports=require("alt")},function(e,t){e.exports=require("alt/AltContainer")},function(e,t){e.exports=require("iso")},,function(e,t){e.exports=require("warning")}]);