(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{215:function(e,t,r){e.exports={m:"h",U:"K",B:"u"}},225:function(e,t,r){"use strict";r.r(t);var n=r(3),c=(r(36),r(226),r(10),r(22),r(29)),o=Object(c.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:50},withErrors:{type:Boolean,required:!1,default:!1}},setup:function(e,t){var r=t.emit,o=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f=function(){return Math.floor(Math.random()*e.speed)},l=Object(c.f)(""),v=Object(c.f)([]),h=Object(c.f)(!1),x=null,d=function(){var t=!1;return{status:function(){var c=Object(n.a)(regeneratorRuntime.mark((function n(){var c,i,d,k,m,N;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==v.value.length){n.next=2;break}return n.abrupt("return");case 2:if(!h.value||!x){n.next=6;break}return x.cancel(),n.next=6,x.status;case 6:h.value=!0,c=v.value.shift();case 8:if(!c){n.next=53;break}if("delete"!==c.type){n.next=22;break}i=0;case 11:if(!(i<c.count)){n.next=20;break}return n.next=14,o(5);case 14:if(!t){n.next=16;break}return n.abrupt("return");case 16:l.value=l.value.slice(0,l.value.length-1);case 17:i++,n.next=11;break;case 20:n.next=50;break;case 22:d=0;case 23:if(!(d<c.text.length)){n.next=50;break}return n.next=26,o(f());case 26:if(!t){n.next=28;break}return n.abrupt("return");case 28:if(!(e.withErrors&&Math.random()<.1)){n.next=46;break}k=Math.floor(3*Math.random()),m=0;case 31:if(!(m<k)){n.next=38;break}return l.value+=(w=void 0,(w="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*w.length))),n.next=35,o(f());case 35:m++,n.next=31;break;case 38:N=0;case 39:if(!(N<k)){n.next=46;break}return n.next=42,o(f());case 42:l.value=l.value.slice(0,l.value.length-1);case 43:N++,n.next=39;break;case 46:l.value+=c.text.charAt(d);case 47:d++,n.next=23;break;case 50:c=v.value.shift(),n.next=8;break;case 53:h.value=!1,!t&&r("updated");case 55:case"end":return n.stop()}var w}),n)})));return function(){return c.apply(this,arguments)}}()(),cancel:function(){t=!0}}};return Object(c.i)((function(){return e.text}),function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,l.value=r,v.value=[],i=0;case 4:if(!(i<t.length)){e.next=13;break}if(t.charAt(i)!==r.charAt(i)){e.next=9;break}n++,e.next=10;break;case 9:return e.abrupt("break",13);case 10:i++,e.next=4;break;case 13:n<r.length&&v.value.push({type:"delete",count:r.length-n}),n<=t.length&&v.value.push({type:"add",text:t.slice(n)}),x=d();case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),Object(c.d)((function(){e.text&&(v.value.push({type:"add",text:e.text}),x=d())})),{currentText:l,isRunning:h}}}),f=r(229),l=r(40);var component=Object(l.a)(o,(function(){var e,t=this,r=t.$createElement,n=t._self._c||r;return n("span",[n("span",[t._v(t._s(t.currentText))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}],class:[t.$style.m,(e={},e[t.$style.U]=t.isRunning,e)]},[t._v("|")])])}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},226:function(e,t,r){"use strict";var n=r(6),c=r(18),o=r(35),f=r(104),l=r(79),v=r(13),h=r(63).f,x=r(42).f,d=r(14).f,k=r(227).trim,m="Number",N=n.Number,w=N,I=N.prototype,y=o(r(80)(I))==m,E="trim"in String.prototype,A=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var r,n,c,o=(t=E?t.trim():k(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+t}for(var code,f=t.slice(2),i=0,v=f.length;i<v;i++)if((code=f.charCodeAt(i))<48||code>c)return NaN;return parseInt(f,n)}}return+t};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(y?v((function(){I.valueOf.call(r)})):o(r)!=m)?f(new w(A(t)),r,N):A(t)};for(var _,O=r(11)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;O.length>R;R++)c(w,_=O[R])&&!c(N,_)&&d(N,_,x(w,_));N.prototype=I,I.constructor=N,r(15)(n,m,N)}},227:function(e,t,r){var n=r(4),c=r(41),o=r(13),f=r(228),l="["+f+"]",v=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),x=function(e,t,r){var c={},l=o((function(){return!!f[e]()||"​"!="​"[e]()})),v=c[e]=l?t(d):f[e];r&&(c[r]=v),n(n.P+n.F*l,"String",c)},d=x.trim=function(e,t){return e=String(c(e)),1&t&&(e=e.replace(v,"")),2&t&&(e=e.replace(h,"")),e};e.exports=x},228:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},229:function(e,t,r){"use strict";var n=r(215),c=r.n(n);r.d(t,"default",(function(){return c.a}))}}]);