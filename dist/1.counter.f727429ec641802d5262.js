webpackJsonp([1],{51:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(69),i=r(o);n["default"]=function(t,n,e){return n in t?(0,i["default"])(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},119:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:s,payload:t}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments[1],e=v[n.type];return e?e(t,n):t}Object.defineProperty(n,"__esModule",{value:!0}),n.actions=n.doubleAsync=n.COUNTER_INCREMENT=void 0;var c=e(51),u=r(c),a=e(204),f=r(a);n.increment=o,n["default"]=i;var s=n.COUNTER_INCREMENT="COUNTER_INCREMENT",l=n.doubleAsync=function(){return function(t,n){return new f["default"](function(e){setTimeout(function(){t(o(n().counter)),e()},200)})}},v=(n.actions={increment:o,doubleAsync:l},(0,u["default"])({},s,function(t,n){return t+n.payload})),d=0},122:function(t,n,e){var r=e(40),o=e(11)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},195:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0}),n.Counter=void 0;var o=e(4),i=r(o),c=n.Counter=function(t){return i["default"].createElement("div",{style:{margin:"0 auto"}},i["default"].createElement("h2",null,"Counter: ",t.counter),i["default"].createElement("button",{className:"btn btn-default",onClick:t.increment},"Increment")," ",i["default"].createElement("button",{className:"btn btn-default",onClick:t.doubleAsync},"Double (Async)"))};c.propTypes={counter:i["default"].PropTypes.number.isRequired,doubleAsync:i["default"].PropTypes.func.isRequired,increment:i["default"].PropTypes.func.isRequired},n["default"]=c},196:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),i=e(119),c=e(195),u=r(c),a={increment:function(){return(0,i.increment)(1)},doubleAsync:i.doubleAsync},f=function(t){return{counter:t.counter}};n["default"]=(0,o.connect)(f,a)(u["default"])},204:function(t,n,e){t.exports={"default":e(218),__esModule:!0}},218:function(t,n,e){e(133),e(134),e(135),e(254),t.exports=e(9).Promise},223:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},226:function(t,n,e){var r=e(41),o=e(230),i=e(228),c=e(21),u=e(132),a=e(247),f={},s={},n=t.exports=function(t,n,e,l,v){var d,h,p,_,y=v?function(){return t}:a(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=u(t.length);d>b;b++)if(_=n?m(c(h=t[b])[0],h[1]):m(t[b]),_===f||_===s)return _}else for(p=y.call(t);!(h=p.next()).done;)if(_=o(p,m,h.value,n),_===f||_===s)return _};n.BREAK=f,n.RETURN=s},228:function(t,n,e){var r=e(42),o=e(11)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},230:function(t,n,e){var r=e(21);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var c=t["return"];throw void 0!==c&&r(c.call(t)),i}}},232:function(t,n,e){var r=e(11)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(u){}return e}},236:function(t,n,e){var r=e(12),o=e(78).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(40)(c);t.exports=function(){var t,n,e,f=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(i){var s=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),e=function(){l.data=s=!s}}else if(u&&u.resolve){var v=u.resolve();e=function(){v.then(f)}}else e=function(){o.call(r,f)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},241:function(t,n,e){var r=e(29);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},243:function(t,n,e){"use strict";var r=e(12),o=e(9),i=e(23),c=e(22),u=e(11)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},244:function(t,n,e){var r=e(21),o=e(70),i=e(11)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},247:function(t,n,e){var r=e(122),o=e(11)("iterator"),i=e(42);t.exports=e(9).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},254:function(t,n,e){"use strict";var r,o,i,c=e(52),u=e(12),a=e(41),f=e(122),s=e(18),l=e(34),v=e(70),d=e(223),h=e(226),p=e(244),_=e(78).set,y=e(236)(),m="Promise",b=u.TypeError,x=u.process,w=u[m],x=u.process,E="process"==f(x),j=function(){},T=!!function(){try{var t=w.resolve(1),n=(t.constructor={})[e(11)("species")]=function(t){t(j,j)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof n}catch(r){}}(),g=function(t,n){return t===n||t===w&&n===i},M=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},A=function(t){return g(w,t)?new N(t):new o(t)},N=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw b("Bad Promise constructor");n=t,e=r}),this.resolve=v(n),this.reject=v(e)},P=function(t){try{t()}catch(n){return{error:n}}},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,a=n.reject,f=n.domain;try{c?(o||(2==t._h&&k(t),t._h=1),c===!0?e=r:(f&&f.enter(),e=c(r),f&&f.exit()),e===n.promise?a(b("Promise-chain cycle")):(i=M(e))?i.call(e,u,a):u(e)):a(r)}catch(s){a(s)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&C(t)})}},C=function(t){_.call(u,function(){var n,e,r,o=t._v;if(O(t)&&(n=P(function(){E?x.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=E||O(t)?2:1),t._a=void 0,n)throw n.error})},O=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!O(n.promise))return!1;return!0},k=function(t){_.call(u,function(){var n;E?x.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},U=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=M(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,a(I,r,1),a(U,r,1))}catch(o){U.call(r,o)}}):(e._v=t,e._s=1,R(e,!1))}catch(r){U.call({_w:e,_d:!1},r)}}};T||(w=function(t){d(this,w,m,"_h"),v(t),r.call(this);try{t(a(I,this,1),a(U,this,1))}catch(n){U.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(241)(w.prototype,{then:function(t,n){var e=A(p(this,w));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=E?x.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},"catch":function(t){return this.then(void 0,t)}}),N=function(){var t=new r;this.promise=t,this.resolve=a(I,t,1),this.reject=a(U,t,1)}),s(s.G+s.W+s.F*!T,{Promise:w}),e(55)(w,m),e(243)(m),i=e(9)[m],s(s.S+s.F*!T,m,{reject:function(t){var n=A(this),e=n.reject;return e(t),n.promise}}),s(s.S+s.F*(c||!T),m,{resolve:function(t){if(t instanceof w&&g(t.constructor,this))return t;var n=A(this),e=n.resolve;return e(t),n.promise}}),s(s.S+s.F*!(T&&e(232)(function(t){w.all(t)["catch"](j)})),m,{all:function(t){var n=this,e=A(n),r=e.resolve,o=e.reject,i=P(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=A(n),r=e.reject,o=P(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})}});