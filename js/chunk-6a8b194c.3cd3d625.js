(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a8b194c"],{"2fa4":function(t,e,n){"use strict";n("20f6");var r=n("80d2");e["a"]=Object(r["e"])("spacer","div","v-spacer")},"5b47":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ResumeSection",{attrs:{title:t.title}},t._l(t.schoolList,(function(e,r){return n("v-row",{key:r},[n("v-col",[n("v-row",{staticClass:"mb-4",attrs:{"no-gutters":"",align:"baseline"}},[n("v-col",{attrs:{cols:"auto"}},[n("h3",{staticClass:"colorText",domProps:{textContent:t._s(e.degree)}}),n("h4",{domProps:{textContent:t._s(e.name)}})]),n("v-spacer"),n("h4",{staticClass:"lightText",domProps:{textContent:t._s(e.dates)}})],1),t._l(e.achievements,(function(e,r){return n("p",{key:r,domProps:{textContent:t._s(t.prefix+" "+e)}})}))],2)],1)})),1)},a=[],o={props:{schoolList:{type:Array,default:function(){return[]}}},data:function(){return{title:"Education",prefix:"-"}}},c=o,l=n("2877"),s=n("6544"),u=n.n(s),i=n("62ad"),f=n("0fd9"),d=n("2fa4"),p=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=p.exports;u()(p,{VCol:i["a"],VRow:f["a"],VSpacer:d["a"]})},"62ad":function(t,e,n){"use strict";var r=n("ade3"),a=n("5530"),o=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),c=n("d9f7"),l=n("80d2"),s=["sm","md","lg","xl"],u=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),i=function(){return s.reduce((function(t,e){return t["offset"+Object(l["l"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return s.reduce((function(t,e){return t["order"+Object(l["l"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(i),order:Object.keys(f)};function p(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;e["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},i),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,o=e.children,l=(e.parent,"");for(var s in n)l+=String(n[s]);var u=b.get(l);return u||function(){var t,e;for(e in u=[],d)d[e].forEach((function(t){var r=n[t],a=p(e,t,r);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),b.set(l,u)}(),t(n.tag,Object(c["a"])(a,{class:u}),o)}})}}]);
//# sourceMappingURL=chunk-6a8b194c.3cd3d625.js.map