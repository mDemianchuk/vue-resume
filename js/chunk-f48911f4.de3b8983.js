(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f48911f4"],{"1ba2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("Header",{attrs:{name:e.resume.name,"contact-options":e.resume.contactOptions}}),i("Summary",{attrs:{title:"Summary",text:e.resume.summary}}),i("Experience",{attrs:{title:"Experience","experience-list":e.resume.experienceList}}),i("Projects",{attrs:{title:"Projects","project-list":e.resume.projectList}}),i("Education",{attrs:{title:"Education","school-list":e.resume.schoolList}})],1)},r=[],o=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"Lorem Ipsum",contactOptions:[{text:"123 456 8900",icon:"mdi-phone"},{text:"test@email.com",icon:"mdi-at"},{text:"github.com",icon:"mdi-github"},{text:"linkedin.com",icon:"mdi-linkedin"}],summary:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",experienceList:[{title:"Lorem Ipsum",companyName:"Lorem ipsum dolor",dates:"May '20 - Present",text:"Your duties"},{title:"Lorem Ipsum",companyName:"Lorem ipsum dolor",dates:"Jun '19 - May '20",text:"Your duties"},{title:"Lorem Ipsum",companyName:"Lorem ipsum dolor",dates:"Feb '16 - Jun '19",text:"Your duties"},{title:"Lorem Ipsum",companyName:"Lorem ipsum dolor",dates:"Feb '15 - Feb '16",text:"Your duties"}],projectList:[{name:"Project 1",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at."},{name:"Project 2",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at."}],schoolList:[{name:"School 1",dates:"2018-2020",text:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at."},{name:"School 2",dates:"2014-2018",text:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at."}]}),a={metaInfo:{title:"Resume"},components:{Header:function(){return Promise.all([i.e("chunk-299891ee"),i.e("chunk-099f3d3d")]).then(i.bind(null,"0418"))},Summary:function(){return i.e("chunk-785890c0").then(i.bind(null,"3eb8"))},Experience:function(){return Promise.all([i.e("chunk-299891ee"),i.e("chunk-dd086512")]).then(i.bind(null,"61cd"))},Projects:function(){return i.e("chunk-7854137e").then(i.bind(null,"8cca"))},Education:function(){return i.e("chunk-7856e0f0").then(i.bind(null,"5b47"))}},data:function(){return{resume:o}}},s=a,u=i("2877"),c=i("6544"),m=i.n(c),d=i("a523"),l=Object(u["a"])(s,n,r,!1,null,"ea65d45a",null);t["default"]=l.exports;m()(l,{VContainer:d["a"]})},"20f6":function(e,t,i){},"4b85":function(e,t,i){},a523:function(e,t,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var n=i("2b0e");function r(e){return n["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,i){var n=i.props,r=i.data,o=i.children;r.staticClass="".concat(e," ").concat(r.staticClass||"").trim();var a=r.attrs;if(a){r.attrs={};var s=Object.keys(a).filter((function(e){if("slot"===e)return!1;var t=a[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,o)}})}var o=i("d9f7");t["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var i,n=t.props,r=t.data,a=t.children,s=r.attrs;return s&&(r.attrs={},i=Object.keys(s).filter((function(e){if("slot"===e)return!1;var t=s[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,Object(o["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),a)}})},d9f7:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var n=i("5530"),r=i("3835"),o=(i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("06c5"));function a(e,t){var i="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=Object(o["a"])(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(u)throw a}}}}i("ac1f"),i("1276"),i("498a"),i("b64b"),i("99af");var s=i("80d2"),u={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(e){var t,i={},n=a(e.split(u.styleList));try{for(n.s();!(t=n.n()).done;){var o=t.value,c=o.split(u.styleProp),m=Object(r["a"])(c,2),d=m[0],l=m[1];d=d.trim(),d&&("string"===typeof l&&(l=l.trim()),i[Object(s["a"])(d)]=l)}}catch(p){n.e(p)}finally{n.f()}return i}function m(){var e,t={},i=arguments.length;while(i--)for(var r=0,o=Object.keys(arguments[i]);r<o.length;r++)switch(e=o[r],e){case"class":case"directives":arguments[i][e]&&(t[e]=l(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=d(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=p(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]=Object(n["a"])(Object(n["a"])({},arguments[i][e]),t[e]);break;default:t[e]||(t[e]=arguments[i][e])}return t}function d(e,t){return e?t?(e=Object(s["l"])("string"===typeof e?c(e):e),e.concat("string"===typeof t?c(t):t)):e:t}function l(e,t){return t?e&&e?Object(s["l"])(e).concat(t):t:e}function p(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},t=2;t--;){var i=t<0||arguments.length<=t?void 0:arguments[t];for(var n in i)i[n]&&(e[n]?e[n]=[].concat(i[n],e[n]):e[n]=i[n])}return e}}}]);
//# sourceMappingURL=chunk-f48911f4.de3b8983.js.map