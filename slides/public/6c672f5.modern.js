(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{142:function(e,t,n){e.exports={j:"V",t:"e",q:"D"}},145:function(e,t,n){e.exports={Z:"S",i:"o"}},152:function(e,t,n){"use strict";n.r(t);var r=n(3),l=n(15),o=Object(l.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:50},withErrors:{type:Boolean,required:!1,default:!1}},setup(e,t){var{emit:n}=t,o=e=>new Promise((t=>setTimeout(t,e))),c=()=>Math.floor(Math.random()*e.speed),y=Object(l.f)(""),d=Object(l.f)([]),f=Object(l.f)(!1),v=null,x=()=>{var t=!1;return{status:function(){var l=Object(r.a)((function*(){if(0!==d.value.length){f.value&&v&&(v.cancel(),yield v.status),f.value=!0;for(var r=d.value.shift();r;r=d.value.shift())if("delete"===r.type)for(var i=0;i<r.count;i++){if(yield o(5),t)return;y.value=y.value.slice(0,y.value.length-1)}else for(var l=0;l<r.text.length;l++){if(yield o(c()),t)return;if(e.withErrors&&Math.random()<.1){for(var x=Math.floor(3*Math.random()),h=0;h<x;h++)y.value+=(m=void 0,(m="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*m.length))),yield o(c());for(var O=0;O<x;O++)yield o(c()),y.value=y.value.slice(0,y.value.length-1)}y.value+=r.text.charAt(l)}var m;f.value=!1,!t&&n("updated")}}));return function(){return l.apply(this,arguments)}}()(),cancel:()=>{t=!0}}};return Object(l.i)((()=>e.text),function(){var e=Object(r.a)((function*(e,t){var n=0;y.value=t,d.value=[];for(var i=0;i<e.length&&e.charAt(i)===t.charAt(i);i++)n++;n<t.length&&d.value.push({type:"delete",count:t.length-n}),n<=e.length&&d.value.push({type:"add",text:e.slice(n)}),v=x()}));return function(t,n){return e.apply(this,arguments)}}()),Object(l.d)((()=>{e.text&&(d.value.push({type:"add",text:e.text}),v=x())})),{currentText:y,isRunning:f}}}),c=n(153),y=n(21);var component=Object(y.a)(o,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("span",[r("span",[t._v(t._s(t.currentText))]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}],class:[t.$style.j,(e={},e[t.$style.t]=t.isRunning,e)]},[t._v("|")])])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},153:function(e,t,n){"use strict";var r=n(142),l=n.n(r);n.d(t,"default",(function(){return l.a}))},161:function(e,t,n){"use strict";var r=n(145),l=n.n(r);n.d(t,"default",(function(){return l.a}))},170:function(e,t,n){"use strict";n.r(t);n(22);var r=n(11),l=n(15),o=n(152);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(l.a)({components:{appTextTyping:o.default},props:{currentBreakpoint:{type:Object,required:!0}},setup(e){var t=["Impressão 3D","Reconhecimento facial","Blockchain","Inteligência artificial ","CAD","Internet das coisas","Realidade virtual ","RFID ","Carros autônomos ","Robotização","Assistentes virtuais","iBPMS","Computação em nuvem ","GPS","Aprendizado de máquina","Big Data"],n=Object(l.e)({layout:[{id:0,x:-40,y:29,angle:90,text:"",size:3,opacity:1},{id:1,x:-2,y:.3,angle:0,text:"",size:4,opacity:.91},{id:2,x:23,y:4,angle:0,text:"",size:2,opacity:.84},{id:3,x:-6.5,y:50,angle:90,text:"",size:1.5,opacity:.92},{id:4,x:38,y:4,angle:0,text:"",size:2,opacity:.85},{id:5,x:-34,y:53,angle:90,text:"",size:2.5,opacity:.91},{id:6,x:18,y:9,angle:0,text:"",size:3,opacity:.92},{id:7,x:35,y:6,angle:0,text:"",size:3.4,opacity:.93},{id:8,x:21,y:-2,angle:0,text:"",size:2.6,opacity:.83},{id:9,x:-30,y:36,angle:90,text:"",size:2.3,opacity:.9},{id:10,x:40,y:16,angle:0,text:"",size:1.8,opacity:.94},{id:11,x:-15.5,y:54,angle:90,text:"",size:1.4,opacity:.7},{id:12,x:23,y:12.5,angle:0,text:"",size:1.7,opacity:.8},{id:13,x:44,y:0,angle:0,text:"",size:3,opacity:.9},{id:14,x:44,y:3,angle:0,text:"",size:2,opacity:.6},{id:15,x:-28,y:61.5,angle:90,text:"",size:2,opacity:.4}].map((e=>y(y({},e),{},{x:e.x/e.size,y:e.y/e.size,width:100/e.size})))});return Object(l.i)((()=>e.currentBreakpoint),(e=>{if("6"===e.label)for(var i=0;i<t.length;i++)n.layout[i].text=t[i];else for(var r=0;r<t.length;r++)n.layout[r].text=""})),{layout:n}}}),f=n(161),v=n(21);var component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.d},[n("div",{class:e.$style.i},e._l(e.layout.layout,(function(t){return n("appTextTyping",{key:t.id,class:e.$style.Z,style:{transform:"translate3d("+t.x+"em, "+t.y+"em, 0) rotate("+t.angle+"deg)","font-size":t.size+"em",width:t.width+"em",opacity:t.opacity},attrs:{speed:150,text:t.text}})})),1)])}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports}}]);