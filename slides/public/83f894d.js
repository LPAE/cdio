(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{216:function(t,e,r){t.exports={X:"h",a:"v",f:"P",J:"E",Y:"g",C:"N",D:"K",r:"O",M:"m",s:"j",K:"M",I:"B"}},234:function(t,e,r){t.exports=r.p+"img/pendulo c.7b2f2fb.svg"},235:function(t,e,r){"use strict";var n=r(216),l=r.n(n);r.d(e,"default",(function(){return l.a}))},244:function(t,e,r){"use strict";r.r(e);r(22),r(10),r(16),r(17),r(23),r(25),r(26);var n=r(29);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c=Object(n.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup:function(t){var e=Object(n.f)(),r=Object(n.f)();return Object(n.i)((function(){return t.currentBreakpoint}),(function(t){var n=[{time:2,element:e},{time:1,element:r}];if("cover"===t.index){var o,c=l(n);try{for(c.s();!(o=c.n()).done;){var f=o.value;f.element&&f.element.value.beginElementAt(f.time)}}catch(t){c.e(t)}finally{c.f()}}else{var y,d=l(n);try{for(d.s();!(y=d.n()).done;){var h=y.value;h.element&&h.element.value.endElement()}}catch(t){d.e(t)}finally{d.f()}}})),{firstShadowBallEl:e,lastShadowBallEl:r}}}),f=r(235),y=r(40);var component=Object(y.a)(c,(function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("svg",{class:[e.$style.s,(t={},t[e.$style.K]="blank"===e.currentBreakpoint.index,t[e.$style.I]="blank"!==e.currentBreakpoint.index&&"cover"!==e.currentBreakpoint.index,t)],attrs:{viewBox:"0 0 160 90",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[l("defs",[l("radialGradient",{attrs:{id:"shadow-ball",cx:"20%",cy:"20%",r:"1",gradientTransform:"rotate(0, 0, 0)",gradientUnits:"objectBoundingBox"}},[l("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),l("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}})],1),l("radialGradient",{attrs:{id:"shadow-ball-first",cx:"20%",cy:"20%",r:"1",gradientUnits:"objectBoundingBox"}},[l("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),l("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}}),l("animateTransform",{ref:"firstShadowBallEl",attrs:{attributeName:"gradientTransform",type:"rotate",begin:"2s",keyTimes:"0; 0.25; 0.5; 1",values:"0; 15; 0; 0;",dur:"2s",repeatCount:"indefinite"}})],1),l("radialGradient",{attrs:{id:"shadow-ball-last",cx:"20%",cy:"20%",r:"1",gradientUnits:"objectBoundingBox"}},[l("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),l("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}}),l("animateTransform",{ref:"lastShadowBallEl",attrs:{attributeName:"gradientTransform",type:"rotate",begin:"2s",keyTimes:"0; 0.25; 0.5; 1",values:"0; -15; 0; 0;",dur:"2s",repeatCount:"indefinite"}})],1)],1),l("g",{class:e.$style.X},[l("line",{class:e.$style.M,attrs:{x1:"50",y1:"0",x2:"50",y2:"45","stroke-width":"0.2"}}),l("circle",{attrs:{fill:"#00e2ff",r:"10",cx:"50",cy:"45"}}),l("circle",{class:e.$style.R,attrs:{r:"10",cx:"50",cy:"45",fill:"url(#shadow-ball-first)"}}),l("image",{attrs:{width:"20",y:"35",x:"40",height:"20","xlink:href":r(234)}})]),l("g",{class:[e.$style.f,e.$style.Y]},[l("line",{class:e.$style.M,attrs:{x1:"70",y1:"0",x2:"70",y2:"45","stroke-width":"0.2"}}),l("circle",{attrs:{fill:"#aab500",r:"10",cx:"70",cy:"45"}}),l("circle",{class:e.$style.R,attrs:{r:"10",cx:"70",cy:"45",fill:"url(#shadow-ball)"}}),l("image",{attrs:{width:"20",x:"60",y:"35",height:"20","xlink:href":r(145)}})]),l("g",{class:[e.$style.f,e.$style.C]},[l("line",{class:e.$style.M,attrs:{x1:"90",y1:"0",x2:"90",y2:"45","stroke-width":"0.2"}}),l("circle",{attrs:{fill:"#ca2a00",r:"10",cx:"90",cy:"45"}}),l("circle",{class:e.$style.R,attrs:{r:"10",cx:"90",cy:"45",fill:"url(#shadow-ball)"}}),l("image",{attrs:{width:"20",x:"80",y:"35",height:"20","xlink:href":r(146)}})]),l("g",{class:e.$style.D},[l("line",{class:e.$style.M,attrs:{x1:"110",y1:"0",x2:"110",y2:"45","stroke-width":"0.2"}}),l("circle",{attrs:{fill:"#0050d8",r:"10",cx:"110",cy:"45"}}),l("circle",{class:e.$style.R,attrs:{r:"10",cx:"110",cy:"45",fill:"url(#shadow-ball-last)"}}),l("image",{attrs:{width:"20","transform-origin":"110 45",x:"100",y:"35",height:"20","xlink:href":r(147)}})])])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports}}]);