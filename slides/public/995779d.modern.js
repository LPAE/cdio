(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10],{142:function(e,t,n){e.exports={p:"W",N:"e"}},146:function(e,t,n){e.exports={Y:"u",s:"I",h:"P",j:"R",V:"y"}},152:function(e,t,n){"use strict";n.r(t);var r=n(3),l=n(15),c=Object(l.a)({props:{text:{type:String,required:!0},speed:{type:Number,default:50},withErrors:{type:Boolean,required:!1,default:!1}},setup(e,t){var{emit:n}=t,c=e=>new Promise((t=>setTimeout(t,e))),o=()=>Math.floor(Math.random()*e.speed),f=Object(l.f)(""),h=Object(l.f)([]),v=Object(l.f)(!1),d=null,y=()=>{var t=!1;return{status:function(){var l=Object(r.a)((function*(){if(0!==h.value.length){v.value&&d&&(d.cancel(),yield d.status),v.value=!0;for(var r=h.value.shift();r;r=h.value.shift())if("delete"===r.type)for(var i=0;i<r.count;i++){if(yield c(5),t)return;f.value=f.value.slice(0,f.value.length-1)}else for(var l=0;l<r.text.length;l++){if(yield c(o()),t)return;if(e.withErrors&&Math.random()<.1){for(var y=Math.floor(3*Math.random()),m=0;m<y;m++)f.value+=(w=void 0,(w="abcdefghijklmnopqrstuvwxyz").charAt(Math.floor(Math.random()*w.length))),yield c(o());for(var x=0;x<y;x++)yield c(o()),f.value=f.value.slice(0,f.value.length-1)}f.value+=r.text.charAt(l)}var w;v.value=!1,!t&&n("updated")}}));return function(){return l.apply(this,arguments)}}()(),cancel:()=>{t=!0}}};return Object(l.i)((()=>e.text),function(){var e=Object(r.a)((function*(e,t){var n=0;f.value=t,h.value=[];for(var i=0;i<e.length&&e.charAt(i)===t.charAt(i);i++)n++;n<t.length&&h.value.push({type:"delete",count:t.length-n}),n<=e.length&&h.value.push({type:"add",text:e.slice(n)}),d=y()}));return function(t,n){return e.apply(this,arguments)}}()),Object(l.d)((()=>{e.text&&(h.value.push({type:"add",text:e.text}),d=y())})),{currentText:f,isRunning:v}}}),o=n(153),f=n(21);var component=Object(f.a)(c,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("span",[r("span",[t._v(t._s(t.currentText))]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRunning,expression:"isRunning"}],class:[t.$style.p,(e={},e[t.$style.N]=t.isRunning,e)]},[t._v("|")])])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports},153:function(e,t,n){"use strict";var r=n(142),l=n.n(r);n.d(t,"default",(function(){return l.a}))},162:function(e,t,n){"use strict";var r=n(146),l=n.n(r);n.d(t,"default",(function(){return l.a}))},171:function(e,t,n){"use strict";n.r(t);var r=n(152),l=n(15),c=Object(l.a)({components:{appTextTyping:r.default},props:{topics:{type:Array,default:()=>[]}},setup(e){var t=null,n=Object(l.f)(1),r=Object(l.e)({topics1:[],topics2:[]});return Object(l.i)((()=>e.topics),(e=>{t&&clearTimeout(t),1===n.value?(r.topics2=e,n.value=2,t=setTimeout((()=>{r.topics1=[]}),400)):(n.value=1,r.topics1=e,t=setTimeout((()=>{r.topics2=[]}),400))})),{currentTopics:n,topicsList:r}}}),o=n(162),f=n(21);var component=Object(f.a)(c,(function(){var e,t,n=this,r=n.$createElement,l=n._self._c||r;return l("div",{class:n.$style.Y},[l("div",{class:[n.$style.s,(e={},e[n.$style.h]=1!==n.currentTopics,e)]},n._l(n.topicsList.topics1,(function(e,t){var r;return l("div",{key:t,class:[n.$style.j,(r={},r[n.$style.V]=!(0==e.bullet),r)],style:{width:null!=e.width&&e.width/(e.size||1)+"em",height:null!=e.height&&e.height/(e.size||1)+"em","font-size":e.size+"em",transform:"translate3d("+(e.x||0/(e.size||1))+"em, "+(e.y||0/(e.size||1))+"em, 0)"}},[l("span",{domProps:{innerHTML:n._s(e.text)}})])})),0),l("div",{class:[n.$style.s,n.$style.g,(t={},t[n.$style.h]=2!==n.currentTopics,t)]},n._l(n.topicsList.topics2,(function(e,t){var r;return l("div",{key:t,class:[n.$style.j,(r={},r[n.$style.V]=!(0==e.bullet),r)],style:{width:null!=e.width&&e.width/(e.size||1)+"em",height:null!=e.height&&e.height/(e.size||1)+"em","font-size":e.size+"em",transform:"translate3d("+(e.x||0/(e.size||1))+"em, "+(e.y||0/(e.size||1))+"em, 0)"}},[l("span",{domProps:{innerHTML:n._s(e.text)}})])})),0)])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports}}]);