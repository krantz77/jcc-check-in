(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){"use strict";(function(t){n.d(e,"c",function(){return d}),n.d(e,"d",function(){return m}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return p});var r=n(4),a=n(8),o=n(0),i=n.n(o),c=n(76),s=n(25),u=n(22),l=function(t){return null===t?"No":((new Date).getTime()-Date.parse(t))/864e5<=7?"Yes":"No"},d=function(t){return i.a.map(t,function(t){var e=Object.keys(t),n=i.a.map(e,function(e){return t[e]});return{UID:n[a.b.UID]?n[a.b.UID]:-1,family_surname:n[a.b.family_surname]?n[a.b.family_surname]:[],last_visit:n[a.b.last_visit],visited_in_last_week:n[a.b.visited_in_last_week]?l(n[a.b.last_visit]):"No",address_city:n[a.b.address_city]?n[a.b.address_city]:"--",number_of_kids:n[a.b.number_of_kids]?n[a.b.number_of_kids]:"--",address_street:n[a.b.address_street]?n[a.b.address_street]:"--",address_postcode:n[a.b.address_postcode]?n[a.b.address_postcode]:"--",crossing_city:n[a.b.crossing_city]?n[a.b.crossing_city]:"--",border_crossing:n[a.b.border_crossing]?n[a.b.border_crossing]:"--",comments:n[a.b.comments]?n[a.b.comments]:"--"}})},f=function(t){return{UID:t.UID,"Family Surname/\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435":t.family_surname,"Number of Kids/\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0456\u0442\u0435\u0439":t.number_of_kids,"Address - Street/ \u0412\u0443\u043b\u0438\u0446\u044f":t.address_street,"Address - Postcode/ \u041f\u043e\u0448\u0442\u043e\u0432\u0438\u0439 \u043a\u043e\u0434":t.address_postcode,"Address - City/ \u041c\u0456\u0441\u0442\u043e":t.address_city,"Border Crossing Date/ \u0414\u0430\u0442\u0430 \u043f\u0435\u0440\u0435\u0442\u0438\u043d\u0443 \u043a\u043e\u0440\u0434\u043e\u043d\u0443":t.border_crossing,"City where came from/ \u041c\u0456\u0441\u0442\u043e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f":t.crossing_city,"Last Visit":t.last_visit,"Visited in Last Week":t.visited_in_last_week,Comments:t.comments}},m=function(t,e,n,a){var o=Object(r.a)({},e,t);a(i.a.map(n,function(t){if(t.UID===o.UID){var e=Object(r.a)({},t,o),n=Object(r.a)({},e,{visited_in_last_week:l(e.last_visit)});return Object(u.b)(f(n)).then(),n}return t}))},h=function(t,e,n,a){n(i.a.map(e,function(e){if(e.UID==t){var n=Object(r.a)({},e,{last_visit:Object(c.a)(new Date,"yyyy-MM-dd"),visited_in_last_week:"Yes",isSelected:!1});return Object(u.b)(f(n)).then(),n}return e})),a(!0)},p=function(e){var r=s.utils.json_to_sheet(e),a=s.utils.book_new(),o=n(68).join(t,"Data/example_data.xlsx");s.utils.book_append_sheet(a,r,"Example_Data"),s.writeFile(a,o)}}).call(this,"/")},22:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c});var r=n(33),a=n(48);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new x(a||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var f={};function m(){}function h(){}function p(){}var v={};u(v,i,function(){return this});var _=Object.getPrototypeOf,b=_&&_(_(D([])));b&&b!==e&&n.call(b,i)&&(v=b);var y=p.prototype=m.prototype=Object.create(v);function g(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var s=d(t[a],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(l).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return I()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=d(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function D(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,c,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),u(y,s,"Generator"),u(y,i,function(){return this}),u(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=D,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var i=function(){var t=Object(r.a)(o().mark(function t(){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3").then(function(t){return t}).catch(function(t){console.log(t)});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(r.a)(o().mark(function t(e){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.patch("https://sheet.best/api/sheets/259f7bec-fcd6-4be1-846d-c3c5dd47c8c3/UID/".concat(e.UID),e).then(function(t){console.log(t)});case 2:t.sent;case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},36:function(t,e){},40:function(t,e,n){t.exports=n.p+"static/media/logo.21319a63.png"},52:function(t,e,n){t.exports=n(75)},59:function(t,e,n){},60:function(t,e,n){},66:function(t,e){},67:function(t,e){},75:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(37),i=n.n(o),c=(n(59),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})}),s=n(4),u=n(12),l=n(40),d=n.n(l),f=(n(60),n(0)),m=n.n(f),h=n(21),p=n(8),v=n(34),_=n(47),b=n(46),y=function(t){var e=t.user,n=t.editedUser,r=t.setEditedUser;return a.a.createElement("div",null,m.a.map(p.a,function(t){return a.a.createElement("div",null,a.a.createElement("div",null,t),a.a.createElement(b.a,{value:m.a.get(e,t),onChange:function(e){r(m.a.set(n,t,e))}}))}))},g=function(t){var e=t.id,n=t.isShown,o=t.canEdit,i=t.setShowOverlay,c=t.dataFormatted,s=t.setDataFormatted,l=t.setCheckInDisabled,d=Object(r.useState)({}),f=Object(u.a)(d,2),p=f[0],v=f[1],b=m.a.find(c,function(t){if(t.UID&&t.UID===e)return t});return a.a.createElement(_.a,{isShown:n,isModal:!0,onEscape:function(){return t.setShowOverlay(!1)},onBackgroundClick:function(){return i(!1)}},a.a.createElement("div",{className:"main-content"},a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{className:"Add-Point-Form",method:"get"},a.a.createElement("label",null,"Id: ","".concat(e))),a.a.createElement(y,{user:b,canEdit:o,editedUser:p,setEditedUser:v}),a.a.createElement("div",{className:"Controls"},a.a.createElement("button",{onClick:function(){i(!1),o?Object(h.d)(p,b,c,s):Object(h.a)(b.UID,c,s,l)}},o?"Submit":"Check In"),a.a.createElement("button",{onClick:function(){return i(!1)}},"Cancel")))))},w=n(80),E=n(22);var k=function(){var t=Object(r.useState)({rows:[],cols:[]}),e=Object(u.a)(t,2),n=e[0],o=(e[1],Object(r.useState)([])),i=Object(u.a)(o,2),c=i[0],l=i[1],f=Object(r.useState)("-1"),_=Object(u.a)(f,2),b=_[0],y=_[1],k=Object(r.useState)(!0),O=Object(u.a)(k,2),j=O[0],x=O[1],D=Object(r.useState)(!1),I=Object(u.a)(D,2),L=I[0],S=I[1],C=Object(r.useState)(""),U=Object(u.a)(C,2),N=U[0],F=U[1],A=Object(r.useState)(!1),P=Object(u.a)(A,2),G=P[0],T=P[1],B=0;Object(r.useEffect)(function(){0===B&&(Object(E.a)().then(function(t){var e=m.a.flatten(t.data),n=Object(h.c)(e);l(n)}),B=1)},[n]);var M={id:N,isShown:L,canEdit:G,setShowOverlay:function(t){S(t)},dataFormatted:c,setDataFormatted:function(t){l(t)},setCheckInDisabled:function(t){x(t)}};return a.a.createElement("div",{className:"App"},L&&a.a.createElement("div",{id:"opaque"}),a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),a.a.createElement("div",null,"JCC Krakow Check In")),a.a.createElement("div",{className:"Grid-Header"},a.a.createElement("div",{className:"Buttons"},a.a.createElement("button",{onClick:function(){Object(h.b)(c)}},"Export"),a.a.createElement("button",{disabled:j,onClick:function(){return Object(h.a)(b,c,l,x)}},"Check In"),a.a.createElement("button",null,"Add Family"),a.a.createElement("button",{disabled:j,onClick:function(){S(!0),T(!0)}},"Edit Family"))),a.a.createElement("div",{className:"App-Body"},a.a.createElement("p",null,a.a.createElement("div",{className:"search-bar"},"Enter Id:",a.a.createElement(w.a,{onChange:function(t){return F(t)}}),a.a.createElement("div",{className:"submit"},a.a.createElement("button",{onClick:function(){S(!0),T(!1)}}," Submit "))),a.a.createElement(g,M),a.a.createElement("div",{className:"data-table"},c?a.a.createElement(v.a,{data:c,isSelectable:!0,onSelect:function(t){return function(t){y(t.UID);var e=m.a.map(c,function(e){return t.UID===e.UID?Object(s.a)({},e,{isSelected:!t.isSelected}):Object(s.a)({},e)});F(t.UID),l(e),x(!j)}(t)},emptyCellText:"--",hasLightHeader:!1},m.a.map(p.a,function(t){return a.a.createElement(v.a.Column,{field:"".concat(t)}," ",t," ")})):""))),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"}))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null))),c()},8:function(t,e,n){"use strict";var r,a,o;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),function(t){t.UID="UID",t.family_surname="family_surname",t.number_of_kids="number_of_kids",t.address_street="address_street",t.address_postcode="address_postcode",t.address_city="address_city",t.crossing_city="crossing_city",t.border_crossing="border_crossing",t.last_visit="last_visit",t.visited_in_last_week="visited_in_last_week",t.comments="comments"}(r||(r={})),function(t){t.UID="UID",t.family_surname="Family Surname/\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",t.number_of_kids="Number of Kids/\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0456\u0442\u0435\u0439",t.address_street="Address - Street/ \u0412\u0443\u043b\u0438\u0446\u044f",t.address_postcode="Address - Postcode/ \u041f\u043e\u0448\u0442\u043e\u0432\u0438\u0439 \u043a\u043e\u0434",t.address_city="Address - City/ \u041c\u0456\u0441\u0442\u043e",t.border_crossing="Border Crossing Date/ \u0414\u0430\u0442\u0430 \u043f\u0435\u0440\u0435\u0442\u0438\u043d\u0443 \u043a\u043e\u0440\u0434\u043e\u043d\u0443",t.crossing_city="City where came from/ \u041c\u0456\u0441\u0442\u043e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",t.last_visit="Last Visit",t.visited_in_last_week="Visited in Last Week",t.comments="Comments"}(a||(a={})),function(t){t[t.UID=0]="UID",t[t.family_surname=1]="family_surname",t[t.number_of_kids=3]="number_of_kids",t[t.address_street=6]="address_street",t[t.address_postcode=7]="address_postcode",t[t.address_city=8]="address_city",t[t.crossing_city=9]="crossing_city",t[t.border_crossing=10]="border_crossing",t[t.last_visit=11]="last_visit",t[t.visited_in_last_week=12]="visited_in_last_week",t[t.comments=13]="comments"}(o||(o={}));a.UID,a.family_surname,a.number_of_kids,a.address_street,a.address_postcode,a.address_city,a.crossing_city,a.border_crossing,a.last_visit,a.visited_in_last_week,a.comments}},[[52,1,2]]]);
//# sourceMappingURL=main.42171523.chunk.js.map