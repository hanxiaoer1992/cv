webpackJsonp([1],{"1uuo":function(t,e){},"J2a/":function(t,e,i){t.exports=i.p+"static/img/a3.2b3449a.png"},LXyp:function(t,e,i){t.exports=i.p+"static/img/unity.319c28e.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={name:"App",data:function(){return{menu:[{name:"Home",id:""},{name:"About",id:"about"},{name:"News",id:"news"},{name:"Publications",id:"publications"},{name:"Education",id:"education"},{name:"Awards",id:"awards"}],news:[{content:"One paper is accepted by ACMMM, 2020",timestamp:"2020.07.27",size:"large",type:"primary",icon:"el-icon-more"},{content:"I have joined the Inception Institute of Artificial Intelligence (IIAI), Abu Dhabi, UAE.",timestamp:"2018.12.26",color:"#0bbd87"}]}},methods:{handleSelect:function(t){window.scrollTo(0,document.getElementById(t).offsetTop)},jumpPage:function(){window.location.href="https://arxiv.org/abs/2006.12774"},jumpPage2:function(){window.location.href="https://hanxiaoer1992.github.io/cv/smart_community.pdf"},jumpGrade:function(){window.location.href="https://hanxiaoer1992.github.io/cv/transcript.pdf"}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"app"}},[t._v("Home")]),t._v(" "),a("el-menu-item",{attrs:{index:"about"}},[t._v("About")]),t._v(" "),a("el-menu-item",{attrs:{index:"news"}},[t._v("News")]),t._v(" "),a("el-menu-item",{attrs:{index:"publications"}},[t._v("Publications")]),t._v(" "),a("el-menu-item",{attrs:{index:"education"}},[t._v("Education")]),t._v(" "),a("el-menu-item",{attrs:{index:"awards"}},[t._v("Awards")])],1)],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"news pannel",attrs:{id:"news"}},[a("div",{staticClass:"title"},[t._v("News")]),t._v(" "),a("div",{staticClass:"context"},[a("div",{staticClass:"block"},[a("el-timeline",t._l(t.news,function(e,i){return a("el-timeline-item",{key:i,attrs:{icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp}},[t._v("\n            "+t._s(e.content)+"\n          ")])}),1)],1)])]),t._v(" "),a("div",{staticClass:"publications pannel",attrs:{id:"publications"}},[a("div",{staticClass:"title"},[t._v("Publications")]),t._v(" "),a("div",{staticClass:"context"},[a("el-row",[a("el-col",{attrs:{span:10,offset:"0"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",attrs:{src:i("LXyp")}}),t._v(" "),a("div",{staticStyle:{padding:"14px"}},[a("span",[t._v("Surpassing Real-World Source Training Data: Random 3D Characters for Generalizable Person Re-Identification")]),t._v(" "),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"},[t._v("2020.07")]),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:t.jumpPage}},[t._v("PDF")])],1)])])],1),t._v(" "),a("el-col",{attrs:{span:10,offset:"2"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",attrs:{src:i("J2a/")}}),t._v(" "),a("div",{staticStyle:{padding:"14px"}},[a("span",[t._v("Mobile application design for smart community.")]),t._v(" "),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"},[t._v("2016.10")]),t._v(" "),a("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:t.jumpPage2}},[t._v("PDF")])],1)])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"education pannel",attrs:{id:"education"}},[a("div",{staticClass:"title"},[t._v("Education")]),t._v(" "),a("div",{staticClass:"context"},[a("div",[a("div",{staticClass:"school"},[a("img",{attrs:{src:i("to7n"),alt:""}}),t._v(" "),a("div",[a("div",[t._v("Xidian University")]),t._v(" "),a("div",[t._v("2015.09-2018.06")]),t._v(" "),a("div",[t._v("Master of Engineering, majored in Electronics and Communications Engineering")]),t._v(" "),a("div",[t._v("Projects: Design development and maintenance of college websites and admission systems")]),t._v(" "),a("div",[t._v("Courses: Computational Intelligence (91), Algorithm Design (91), Machine Learning (80), Natural Computing (88), Intelligent Perception and Advanced Computing (86), High Performance Computing (85). Full marks: 100")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:t.jumpGrade}},[t._v("Academic Transcript")])],1)]),t._v(" "),a("el-divider"),t._v(" "),t._m(2)],1)])]),t._v(" "),a("div",{staticClass:"awards pannel",attrs:{id:"awards"}},[a("div",{staticClass:"title"},[t._v("Awards")]),t._v(" "),a("div",{staticClass:"context"},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(10,function(t){return a("el-carousel-item",{key:t},[a("div",{class:"a"+t+" a_tab"})])}),1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"left"},[e("h1",[this._v("Yanan Wang")])]),this._v(" "),e("div",{staticClass:"right"},[e("img",{attrs:{src:i("a2lK"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about pannel",attrs:{id:"about"}},[i("div",{staticClass:"title"},[t._v("About Me")]),t._v(" "),i("div",{staticClass:"context"},[i("p",[t._v("I am an Engineer Inception Institute of Artificial Intelligence and my supervisor is "),i("a",{attrs:{href:"https://liaosc.wordpress.com/"}},[t._v("Dr. Liao Shengcai")]),t._v(". Before that, I got my master degree from School of Electronic Engineering in Xidian University in 2018, supervisored by "),i("a",{attrs:{href:"https://web.xidian.edu.cn/yfli/en/index.html"}},[t._v("Yinfeng Li")]),t._v(".")]),t._v(" "),i("p",[t._v("My research interest includes machine learning and pattern recognition, with a focus on Person Re-identification.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"school"},[a("img",{attrs:{src:i("UPOD"),alt:""}}),t._v(" "),a("div",[a("div",[t._v("Guilin University of Electronic Technology")]),t._v(" "),a("div",[t._v("2011.09-2015.06")]),t._v(" "),a("div",[t._v("Bachelor degree in Electronic Science and Technology")]),t._v(" "),a("div",[t._v("Courses: Probability Theory (95), Advanced Mathematics (98), Linear Algebra (95), Functions of a Complex Variable (96), Signals and Systems (93), C Programming Language (96). Full marks: 100")]),t._v(" "),a("div",[t._v("Project example: "),a("a",{attrs:{href:"https://job.xidian.edu.cn/"}},[t._v("Employment website")])])])])}]};var r=i("VU/8")(n,s,!1,function(t){i("Y7a+")},null,null).exports,o=i("/ocq"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){i("1uuo")},"data-v-d8ec41bc",null).exports;a.default.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),d=i("zL8q"),u=i.n(d);i("tvR6");a.default.config.productionTip=!1,a.default.use(u.a),new a.default({el:"#app",router:v,components:{App:r},template:"<App/>",render:function(t){return t(r)}})},UPOD:function(t,e,i){t.exports=i.p+"static/img/guidian.c18f6e1.png"},"Y7a+":function(t,e){},a2lK:function(t,e,i){t.exports=i.p+"static/img/circle.2ea5b94.png"},to7n:function(t,e,i){t.exports=i.p+"static/img/xidian.6e7af83.png"},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d0f072b33d0a2524b9bc.js.map