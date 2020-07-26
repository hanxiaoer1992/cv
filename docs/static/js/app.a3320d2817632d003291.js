webpackJsonp([1],{"1uuo":function(t,e){},J38P:function(t,e){},LXyp:function(t,e,i){t.exports=i.p+"static/img/unity.319c28e.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={name:"App",data:function(){return{menu:[{name:"Home",id:""},{name:"About",id:"about"},{name:"News",id:"news"},{name:"Publications",id:"publications"},{name:"Education",id:"education"},{name:"Awards",id:"awards"}],news:[{content:"One paper is accepted by ACMMM, 2020",timestamp:"2020.07.27",size:"large",type:"primary",icon:"el-icon-more"},{content:"I have joined the Inception Institute of Artificial Intelligence (IIAI), Abu Dhabi, UAE.",timestamp:"2018.12.26",color:"#0bbd87"}]}},methods:{jumpPage:function(){window.location.href="https://arxiv.org/abs/2006.12774"},jumpGrade:function(){window.location.href="https://hanxiaoer1992.github.io/cv/transcript.pdf"}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},[n("ul",t._l(t.menu,function(e,i){return n("li",{key:i},[t._v(t._s(e.name))])}),0)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"news pannel"},[n("div",{staticClass:"title"},[t._v("News")]),t._v(" "),n("div",{staticClass:"context"},[n("div",{staticClass:"block"},[n("el-timeline",t._l(t.news,function(e,i){return n("el-timeline-item",{key:i,attrs:{icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp}},[t._v("\n            "+t._s(e.content)+"\n          ")])}),1)],1)])]),t._v(" "),n("div",{staticClass:"publications pannel"},[n("div",{staticClass:"title",attrs:{id:"publications"}},[t._v("Publications")]),t._v(" "),n("div",{staticClass:"context"},[n("el-row",t._l(1,function(e,a){return n("el-col",{key:e,attrs:{span:24}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:i("LXyp")}}),t._v(" "),n("div",{staticStyle:{padding:"14px"}},[n("span",[t._v("Surpassing Real-World Source Training Data: Random 3D Characters for Generalizable Person Re-Identification")]),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[t._v("2020.07")]),t._v(" "),n("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:t.jumpPage}},[t._v("PDF")])],1)])])],1)}),1)],1)]),t._v(" "),n("div",{staticClass:"education pannel"},[n("div",{staticClass:"title"},[t._v("Education")]),t._v(" "),n("div",{staticClass:"context"},[n("div",[n("div",{staticClass:"school"},[n("img",{attrs:{src:i("to7n"),alt:""}}),t._v(" "),n("div",[n("div",[t._v("Xidian University")]),t._v(" "),n("div",[t._v("2015.09-2018.06")]),t._v(" "),n("div",[t._v("Master of Engineering, major in Electronics and Communications Engineering")]),t._v(" "),n("div",[t._v("Activities:\tDevelopment and maintenance the college websites and admission system")]),t._v(" "),n("div",[t._v("Courses:\tData structure, Machine Learning, Fundamentals of Computer, Signal processing, etc.")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.jumpGrade}},[t._v("Academic Transcript")])],1)]),t._v(" "),n("el-divider"),t._v(" "),t._m(2)],1)])]),t._v(" "),n("div",{staticClass:"awards pannel"},[n("div",{staticClass:"title"},[t._v("Awards")]),t._v(" "),n("div",{staticClass:"context"},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(11,function(t){return n("el-carousel-item",{key:t},[n("div",{class:"a"+t+" a_tab"})])}),1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"left"},[e("h1",[this._v("Yanan Wang")])]),this._v(" "),e("div",{staticClass:"right"},[e("img",{attrs:{src:i("a2lK"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about pannel"},[i("div",{staticClass:"title"},[t._v("About Me")]),t._v(" "),i("div",{staticClass:"context"},[i("p",[t._v("I am an Engineer Inception Institute of Artificial Intelligence and my supervisor is "),i("a",{attrs:{href:"https://liaosc.wordpress.com/"}},[t._v("Dr. Liao Shengcai")]),t._v(". Before that, I got my master degree from School of Electronic Engineering in Xidian University in 2018, supervisored by "),i("a",{attrs:{href:"https://web.xidian.edu.cn/yfli/en/index.html"}},[t._v("Yinfeng Li")]),t._v(".")]),t._v(" "),i("p",[t._v("My research interest includes machine learning and pattern recognition, with a focus on Person Re-identification.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"school"},[e("img",{attrs:{src:i("UPOD"),alt:""}}),this._v(" "),e("div",[e("div",[this._v("Guilin University of Electronic Technology")]),this._v(" "),e("div",[this._v("2011.09-2015.06")]),this._v(" "),e("div",[this._v("Bachelor degree in Electronic Science and Technology")])])])}]};var r=i("VU/8")(a,s,!1,function(t){i("J38P")},null,null).exports,o=i("/ocq"),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("1uuo")},"data-v-d8ec41bc",null).exports;n.default.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:l}]}),u=i("zL8q"),d=i.n(u);i("tvR6");n.default.config.productionTip=!1,n.default.use(d.a),new n.default({el:"#app",router:v,components:{App:r},template:"<App/>",render:function(t){return t(r)}})},UPOD:function(t,e,i){t.exports=i.p+"static/img/guidian.c18f6e1.png"},a2lK:function(t,e,i){t.exports=i.p+"static/img/circle.2ea5b94.png"},to7n:function(t,e,i){t.exports=i.p+"static/img/xidian.6e7af83.png"},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3320d2817632d003291.js.map