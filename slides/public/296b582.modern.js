(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(t,e,r){t.exports={X:"h",a:"v",f:"P",J:"E",Y:"g",C:"N",D:"K",r:"O",M:"m",s:"j",K:"M",I:"B"}},158:function(t,e,r){t.exports=r.p+"img/pendulo c.7b2f2fb.svg"},159:function(t,e,r){"use strict";var l=r(143),o=r.n(l);r.d(e,"default",(function(){return o.a}))},168:function(t,e,r){"use strict";r.r(e);r(8),r(9);var l=r(15),o=Object(l.a)({props:{currentBreakpoint:{type:Object,required:!0}},setup(t){var e=Object(l.f)(),r=Object(l.f)();return Object(l.i)((()=>t.currentBreakpoint),(t=>{var l=[{time:2,element:e},{time:1,element:r}];if("cover"===t.index)for(var o of l)o.element&&o.element.value.beginElementAt(o.time);else for(var n of l)n.element&&n.element.value.endElement()})),{firstShadowBallEl:e,lastShadowBallEl:r}}}),n=r(159),c=r(21);var component=Object(c.a)(o,(function(){var t,e=this,l=e.$createElement,o=e._self._c||l;return o("svg",{class:[e.$style.s,(t={},t[e.$style.K]="blank"===e.currentBreakpoint.index,t[e.$style.I]="blank"!==e.currentBreakpoint.index&&"cover"!==e.currentBreakpoint.index,t)],attrs:{viewBox:"0 0 160 90",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("defs",[o("radialGradient",{attrs:{id:"shadow-ball",cx:"20%",cy:"20%",r:"1",gradientTransform:"rotate(0, 0, 0)",gradientUnits:"objectBoundingBox"}},[o("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),o("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}})],1),o("radialGradient",{attrs:{id:"shadow-ball-first",cx:"20%",cy:"20%",r:"1",gradientUnits:"objectBoundingBox"}},[o("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),o("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}}),o("animateTransform",{ref:"firstShadowBallEl",attrs:{attributeName:"gradientTransform",type:"rotate",begin:"2s",keyTimes:"0; 0.25; 0.5; 1",values:"0; 15; 0; 0;",dur:"2s",repeatCount:"indefinite"}})],1),o("radialGradient",{attrs:{id:"shadow-ball-last",cx:"20%",cy:"20%",r:"1",gradientUnits:"objectBoundingBox"}},[o("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0.2",offset:"0"}}),o("stop",{attrs:{"stop-color":"#000","stop-opacity":"0.5",offset:"100%"}}),o("animateTransform",{ref:"lastShadowBallEl",attrs:{attributeName:"gradientTransform",type:"rotate",begin:"2s",keyTimes:"0; 0.25; 0.5; 1",values:"0; -15; 0; 0;",dur:"2s",repeatCount:"indefinite"}})],1)],1),o("g",{class:e.$style.X},[o("line",{class:e.$style.M,attrs:{x1:"50",y1:"0",x2:"50",y2:"45","stroke-width":"0.2"}}),o("circle",{attrs:{fill:"#00e2ff",r:"10",cx:"50",cy:"45"}}),o("circle",{class:e.$style.R,attrs:{r:"10",cx:"50",cy:"45",fill:"url(#shadow-ball-first)"}}),o("image",{attrs:{width:"20",y:"35",x:"40",height:"20","xlink:href":r(158)}})]),o("g",{class:[e.$style.f,e.$style.Y]},[o("line",{class:e.$style.M,attrs:{x1:"70",y1:"0",x2:"70",y2:"45","stroke-width":"0.2"}}),o("circle",{attrs:{fill:"#aab500",r:"10",cx:"70",cy:"45"}}),o("circle",{class:e.$style.R,attrs:{r:"10",cx:"70",cy:"45",fill:"url(#shadow-ball)"}}),o("image",{attrs:{width:"20",x:"60",y:"35",height:"20","xlink:href":r(81)}})]),o("g",{class:[e.$style.f,e.$style.C]},[o("line",{class:e.$style.M,attrs:{x1:"90",y1:"0",x2:"90",y2:"45","stroke-width":"0.2"}}),o("circle",{attrs:{fill:"#ca2a00",r:"10",cx:"90",cy:"45"}}),o("circle",{class:e.$style.R,attrs:{r:"10",cx:"90",cy:"45",fill:"url(#shadow-ball)"}}),o("image",{attrs:{width:"20",x:"80",y:"35",height:"20","xlink:href":r(82)}})]),o("g",{class:e.$style.D},[o("line",{class:e.$style.M,attrs:{x1:"110",y1:"0",x2:"110",y2:"45","stroke-width":"0.2"}}),o("circle",{attrs:{fill:"#0050d8",r:"10",cx:"110",cy:"45"}}),o("circle",{class:e.$style.R,attrs:{r:"10",cx:"110",cy:"45",fill:"url(#shadow-ball-last)"}}),o("image",{attrs:{width:"20","transform-origin":"110 45",x:"100",y:"35",height:"20","xlink:href":r(83)}})])])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports}}]);