(function(t){function e(e){for(var s,o,c=e[0],r=e[1],l=e[2],d=0,v=[];d<c.length;d++)o=c[d],a[o]&&v.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Alias/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"03f0":function(t,e,i){"use strict";var s=i("1378"),a=i.n(s);a.a},"042c":function(t,e,i){},1378:function(t,e,i){},1395:function(t,e,i){"use strict";var s=i("9bfc"),a=i.n(s);a.a},"172a":function(t,e,i){},"1aba":function(t,e,i){t.exports=i.p+"img/page2.ec33645d.jpg"},"259f":function(t,e,i){t.exports=i.p+"img/page4.084f484e.jpg"},3285:function(t,e,i){"use strict";var s=i("83dd"),a=i.n(s);a.a},"32a6":function(t,e,i){},"33c2":function(t,e,i){"use strict";var s=i("40e3"),a=i.n(s);a.a},"40e3":function(t,e,i){},4411:function(t,e,i){t.exports=i.p+"img/page5.8a0da9a5.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"flex wrapper"},[i("mainNav"),i("div",{staticClass:"container"},[i("router-view")],1)],1),i("particle")],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"minNav-wrapper"},[i("div",{staticClass:"nav"},[t._m(0),i("ul",{staticClass:"list"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item",on:{click:t.go}},[i("router-link",{attrs:{to:e.href}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"item.icon"}})]),t._v("\n          "+t._s(e.label)+"\n        ")])],1)}),0),t._m(1)]),i("div",{staticClass:"nav-top fixed-top"},[i("div",{staticClass:"flex-between"},[i("h1",[t._v("Alias's Resume")]),i("button",{staticClass:"btn-default animated jello",on:{click:t.showNav}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-topBtn"}})])])])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h1",{staticClass:"text-center"},[t._v("Alias's Resume")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn-default btnpdf animated swing"},[i("a",{attrs:{href:"https://wuliguaiguaia.github.io/Alias/pdf/pdf.html",target:"_blank"}},[t._v("查看PDF")])])}],r=i("1157"),l=i.n(r),u={name:"HelloWorld",props:{msg:String},data:function(){return{touchStartX:"",diffX:"",navShow:!0,list:[{label:"个人  About me",href:"/person",icon:"#icon-gerenzhongxin",id:1001},{label:"技能 Technology stack",href:"/skill",icon:"#icon-zhuanyezhishijineng",id:1002},{label:"项目 Portfolio",icon:"#icon-xiangmu",href:"/portfolio",id:1003},{label:"联系我 Concat me",icon:"#icon-call",href:"/concat",id:1005},{label:"留言板 Message",icon:"#icon-msg",href:"/message",id:1006}],icons:[{src:"",alt:""}]}},mounted:function(){var t=this;l()("#app").on("touchstart",function(e){t.touchStartX=e.changedTouches[0].clientX}),l()("#app").on("touchend",function(e){var i=e.changedTouches[0].clientX;t.diffX=i-t.touchStartX,t.diffX<-20&&l()(".minNav-wrapper .nav").removeClass("show")}),l()(".container").on("click",function(t){console.log(1),l()(".minNav-wrapper .nav").removeClass("show")})},methods:{showNav:function(){l()(".minNav-wrapper .nav").toggleClass("show")},go:function(){l()(".minNav-wrapper .nav").removeClass("show")}}},d=u,v=(i("730b"),i("2877")),m=Object(v["a"])(d,o,c,!1,null,"9845f412",null),f=m.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"particles-js"}})},p=[],g=(i("572f"),i("9b1b"),{data:function(){return{}},mounted:function(){var t=this;this.$nextTick(function(){t.initParticlesJS()})},methods:{initParticlesJS:function(){particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"edge",stroke:{width:0,color:"#222"},polygon:{nb_sides:5},image:{width:50,height:50}},opacity:{value:.8,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:1,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1400}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}}}),_=g,b=(i("978c"),Object(v["a"])(_,h,p,!1,null,"62963fa8",null)),C=b.exports,w={name:"app",components:{mainNav:f,particle:C}},x=w,y=(i("998e"),Object(v["a"])(x,a,n,!1,null,"ad729ec2",null)),k=y.exports,j=i("8c4f"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"person"},[i("div",{staticClass:"section section1 clearfix"},[t._m(0),i("div",{staticClass:"info-wrapper fr animated bounceInRight"},[i("div",{staticClass:"info",attrs:{"data-tilt":""}},[i("div",{staticClass:"tem"},[i("h1",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-geren9"}})]),t._v("\n            周媛莉\n          ")]),i("hr"),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])])])]),i("div",{staticClass:"section section2"},[t._m(8),i("div",{staticClass:"content jus-around"},[i("div",{staticClass:"item item-left"},[i("div",{staticClass:"box process",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiaoyujingli"}})]),i("h1",[t._v("Learning process")]),i("p",[t._v("自学前端开发，学习资源是视频课程及相关书籍,从基本的静态页面到响应式页面，熟练弹性布局及移动端页面开发,熟练Vue技术栈，熟悉模块化、工程化开发流程,有小程序、移动端开发经验，至此有1年学习经验。")])])]),i("div",{staticClass:"item item-right"},[i("div",{staticClass:"box honor",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-rongyu"}})]),i("h1",[t._v("Get honor")]),t._m(9)])])])])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pic-wrapper fl animated bounceInLeft"},[s("div",{staticClass:"pic",attrs:{"data-tilt":""}},[s("img",{attrs:{src:i("9aa6"),alt:"",width:"250"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("应聘职位")]),i("dd",[t._v("前端工程师")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("年龄")]),i("dd",[t._v("22")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("政治面貌")]),i("dd",[t._v("中共党员")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("现住址")]),i("dd",[t._v("陕西西安")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("英语等级")]),i("dd",[t._v("CET-4")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("学校")]),i("dd",[t._v("本科 西安石油大学")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("专业")]),i("dd",[t._v("材料物理")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("h1",[t._v("School experience")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("励志奖学金")]),i("li",[t._v("品学兼优二等奖")]),i("li",[t._v("英语四级")]),i("li",[t._v("计算机二级")]),i("li",[t._v("校园歌舞大赛三等奖")]),i("li",[t._v("校级优秀社团干部")]),i("li",[t._v("优秀共青团员，三好学生")])])}],E=i("58f1"),$=i.n(E),L={mounted:function(){this.init(),this.initVanilaTilt(),this.initScroll()},destroyed:function(){l()(".container").animate({scrollTop:0},500)},methods:{initVanilaTilt:function(){$.a.init(document.querySelector(".pic"),{max:25,speed:400}),$.a.init(document.querySelector(".info"),{max:25,speed:400}),$.a.init(document.querySelector(".process"),{max:50,speed:400}),$.a.init(document.querySelector(".honor"),{max:50,speed:400})},initScroll:function(){l()("#app .container").on("scroll",function(t){l()(t.currentTarget).scrollTop()>0&&l()(".section2 .header").addClass("animated bounceInRight").show(),l()(t.currentTarget).scrollTop()>=51+l()(".section2 .header").height()&&(l()(".section2 .item-left").addClass("animated bounceInLeft").show(),l()(".section2 .item-right .box").height(l()(".section2 .item-left .box").height()),l()(".section2 .item-right").addClass("animated bounceInRight").show())})},init:function(){}}},O=L,M=(i("03f0"),Object(v["a"])(O,S,T,!1,null,"b76f6b76",null)),z=M.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio",on:{touchstart:t.touchStart,touchend:t.touchEnd}},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Portfolio")]),i("section",{staticClass:"section1 item-wrapper animated bounceInUp"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(0,"showLeft"),expression:"show(0,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("网易云音乐")])]),i("div",{staticClass:"desc"},[t._v("仿移动端网易云音乐，包含后台管理系统，支持上传歌曲，歌词，编辑歌曲，删除等，支持定制歌单。可在线听歌，查看歌词等。")]),i("div",{staticClass:"info"},[i("ol",[i("li",[t._v("使用语言：html + css + sass + javascript + jquery")]),i("li",[t._v("使用 flex/vw/vh 进行移动端适配，并定制全局 reset.css")]),i("li",[t._v("使用 localStorage 存储用户搜索历史")]),i("li",[t._v("仿 vueJs 构建 MVC 设计模,编写 eventHub 发布订阅模式进行各模块间逻辑交互")]),i("li",[t._v("learnCloud 进行数据库存储,七牛云文件上传")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wuliguaiguaia/netease-music",target:"_blank"}},[t._v("项目源码")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])]),i("transition",{attrs:{name:"rightMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(0,"showRight"),expression:"show(0,'showRight')"}],staticClass:"right"},[i("div",{staticClass:"pic"},[i("swiper",{attrs:{lists:t.musicList}})],1)])])],1)])]),i("section",{staticClass:"section2 item-wrapper"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(1,"showLeft"),expression:"show(1,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("Vue重构移动端有赞商城")])]),i("div",{staticClass:"desc"},[t._v("仿移动端有赞商城，使用mock数据，支持地址编辑，购物车结算，查看商品，搜索商品及店铺等功能")]),i("div",{staticClass:"info"},[i("ol",[i("li",[t._v("使用语言：vue + axios + vuex + vue-router + sass + eslint + es6")]),i("li",[t._v("使用 vue-cli3 进行原型开发并配置 vue.config.js")]),i("li",[t._v("使用 vuex 进行地址状态管理，支持增删改查")]),i("li",[t._v("使用 axios + promise 异步请求")]),i("li",[t._v("使用 rap2 接口管理平台，使用 mock.js 进行数据模拟")]),i("li",[t._v("使用 swiper + mint-ui + velocity-animate 插件")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wuliguaiguaia/vue_youzan",target:"_blank"}},[t._v("项目源码")])]),i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:" https://wuliguaiguaia.github.io/vue_youzan/dist/index.html",target:"_blank"}},[t._v("项目预览")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])]),i("transition",{attrs:{name:"rightMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(1,"showRight"),expression:"show(1,'showRight')"}],staticClass:"right"},[i("div",{staticClass:"pic"},[i("swiper",{attrs:{lists:t.mallList}})],1)])])],1)])]),i("section",{staticClass:"section3 item-wrapper"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(2,"showLeft"),expression:"show(2,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("小程序实现翻译工具")])]),i("div",{staticClass:"desc"},[t._v("一款多功能翻译小程序，支持多语言，历史，收藏，留言等功能，使用云开发与本地存储。")]),i("div",{staticClass:"info"},[i("ol",[i("li",[t._v("云开发，数据库与云函数的使用")]),i("li",[t._v("小程序生命周期")]),i("li",[t._v("其他涉及音频，存储，动画，相关技巧")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wuliguaiguaia/miniprogram-translate",target:"_blank"}},[t._v("项目源码")])]),i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://i.loli.net/2019/02/22/5c6ecf52dcd38.jpg",target:"_blank"}},[t._v("项目预览")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])]),i("transition",{attrs:{name:"rightMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(2,"showRight"),expression:"show(2,'showRight')"}],staticClass:"right"},[i("div",{staticClass:"pic"},[i("swiper",{attrs:{lists:t.transList}})],1)])])],1)])])])},N=[],q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t,e){return i("div",{key:e,staticClass:"swiper-slide"},[i("img",{attrs:{src:t.img,alt:""}})])}),0),i("div",{staticClass:"swiper-pagination"})])},R=[],X=i("41d6"),A=(i("455b"),{props:{lists:{type:Array,require:!0}},created:function(){},mounted:function(){this.init()},methods:{init:function(){new X["a"](".swiper-container",{loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}}}),P=A,D=(i("b0bb"),Object(v["a"])(P,q,R,!1,null,"4e1ce486",null)),J=D.exports,V={data:function(){return{len:3,touchStartX:0,touchDiffX:0,page:0,dir:"hor",status:"showLeft",media:"",musicList:[{img:i("d80e")},{img:i("1aba")},{img:i("6127")},{img:i("259f")},{img:i("5a5d")}],transList:[{img:i("b656")},{img:i("c8f5")},{img:i("dad3")},{img:i("99b1")},{img:i("7c1f")}],mallList:[{img:i("8bf5")},{img:i("7531")},{img:i("5a93")},{img:i("4411")},{img:i("c466")}]}},destroyed:function(){l()(".container").animate({scrollTop:0},500)},mounted:function(){this.init(),this.onScroll()},components:{swiper:J},watch:{touchDiffX:function(t){t>100&&(this.status="showLeft",this.dir="hor"),t<-100&&(this.status="showRight",this.dir="hor")}},methods:{init:function(){this.media=this.resize(),l()(".portfolio section").first().css({opaicty:1}).nextAll(".item-wrapper").css({opacity:0})},show:function(t,e){return"pc"===this.media||(e?"showLeft"==e?"hor"!==this.dir||this.status===e:t===this.page&&this.status===e:void 0)},onScroll:function(){var t=this;l()(".container").on("scroll",function(){l()(".portfolio .item-wrapper").each(function(e,i){console.log(l()(i).offset().top,e),l()(i).offset().top<l()(i).height()/1.2&&(t.page=e,console.log(l()(i).css("opacity"),"opaci"),0==l()(i).css("opacity")&&l()(".portfolio section").eq(e).addClass("animated bounceInUp").css({opacity:1}).siblings().removeClass("animated bounceInUp"))})})},resize:function(){return l()(window).width()>500?"pc":"phone"},touchStart:function(t){this.touchStartX=t.changedTouches[0].clientX},touchEnd:function(t){if("phone"===this.media){var e=t.changedTouches[0].clientX;this.touchDiffX=e-this.touchStartX}}}},H=V,B=(i("33c2"),Object(v["a"])(H,I,N,!1,null,"354a45ec",null)),F=B.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Technology stack")]),i("div",{staticClass:"content flex-wrap jus-around"},[i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item1",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("01")]),i("ol",[i("li",[t._v("熟练 HTML,了解语义化标签，熟练标准DOM事件")]),i("li",[t._v("熟练 CSS 核心概念，盒模型，文档流，浮动，定位，BFC，各种居中")]),i("li",[t._v("熟练 flex 弹性布局，移动端配置")])])])]),i("div",{staticClass:"box even"},[i("div",{staticClass:"item item2",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("02")]),i("ol",[i("li",[t._v("熟练 Javascript 及 常用es6语法")]),i("li",[t._v("了解原型，闭包，this")]),i("li",[t._v("熟练 localStorage，ajax，promise，正则表达式")]),i("li",[t._v("熟悉 同源协议，跨域，jsonp")])])])]),i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item3",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("03")]),i("ol",[i("li",[t._v("熟练 jquery，读过源码")]),i("li",[t._v("熟练 sass 嵌套，函数，mixin")]),i("li",[t._v("使用过 gulp，webpack基本配置，用过parcel")])])])]),i("div",{staticClass:"box even"},[i("div",{staticClass:"item item4",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("04")]),i("ol",[i("li",[t._v("熟练 vueJs 语法，了解生命周期，指令，计算属性等")]),i("li",[t._v("熟练 vue-router路由配置，vuex状态管理")]),i("li",[t._v("熟练小程序基本语法及云开发，有项目经验")])])])]),i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item5",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("05")]),i("ol",[i("li",[t._v("熟悉http协议 及 TCP/IP协议")]),i("li",[t._v("研究过常用排序算法")]),i("li",[t._v("热爱前端，对新技术无限好奇，喜欢写博客")])])])])])])}],G={mounted:function(){l()(window).width()>500?(this.initVanilaTilt(),this.toggleClass(1)):(this.init(),this.initScroll())},destroyed:function(){l()(".container").animate({scrollTop:0},500)},methods:{init:function(){setTimeout(function(){l()(".skill .box").first().addClass("scale")},50)},initScroll:function(){l()("#app .container").on("scroll",function(t){l()(".skill .box").each(function(t,e){console.log(l()(e).offset().top,t),l()(e).offset().top<=259&&l()(e).offset().top+l()(e).height()<=553&&l()(e).addClass("scale").siblings().removeClass("scale")})})},toggleClass:function(t){1===t&&(l()(".skill .box.even").addClass("animated bounceInUp"),l()(".skill .box.odd").addClass("animated bounceInDown"))},initVanilaTilt:function(){$.a.init(document.querySelector(".content .item1"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item2"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item3"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item4"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item5"),{max:25,speed:400})}}},K=G,Q=(i("ddb4"),Object(v["a"])(K,U,W,!1,null,"eabf80ac",null)),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"concat"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Concat me")]),i("div",{staticClass:"wrapper flex-wrap"},[i("div",{staticClass:"item animated"},[i("div",{staticClass:"content tel"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-call"}})])]),i("div",[t._v("18829024235")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content wei"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-weixin"}})])]),t._m(0)])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content email"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-email"}})])]),i("div",[t._v("1944063509@qq.com")])])]),i("div",{staticClass:"item uniq"},[i("div",{staticClass:"content zhihu"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhihu"}})])]),t._m(1)])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content git"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-github"}})])]),t._m(2)])])])])},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://i.loli.net/2019/02/22/5c6ecf5305f6f.jpg",target:"_blank"}},[t._v("SenYia_")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://www.zhihu.com/people/da-da-da-xiao-jie-82/posts",target:"_blank"}},[t._v("森仪")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://github.com/wuliguaiguaia?tab=repositories",target:"_blank"}},[t._v("wuliguaiguaia")])])}],et={mounted:function(){this.initVanilaTilt(),this.fixHeight()},methods:{initVanilaTilt:function(){$.a.init(document.querySelectorAll(".concat dl"),{max:50,speed:400})},fixHeight:function(){l()(".concat .item .content").each(function(t,e){l()(e).height(l()(e).width())})}}},it=et,st=(i("e8f5"),Object(v["a"])(it,Z,tt,!1,null,"29307d20",null)),at=st.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog"},[i("h1",{staticClass:"main-title"},[t._v("Blog")]),i("div",{staticClass:"card"},[i("div",{staticClass:"title"},[i("h2",[t._v("博客1")])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"title"},[i("h2",[t._v("博客1")])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"title"},[i("h2",[t._v("博客1")])])])])}],ct={},rt=ct,lt=(i("3285"),Object(v["a"])(rt,nt,ot,!1,null,"713f4061",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Message")]),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"form"},[i("form",{staticClass:"flex-col"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.username,expression:"data.username"}],attrs:{type:"text",placeholder:"Enter your name ~"},domProps:{value:t.data.username},on:{input:function(e){e.target.composing||t.$set(t.data,"username",e.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.message,expression:"data.message"}],attrs:{name:"",id:"",cols:"30",rows:"5"},domProps:{value:t.data.message},on:{input:function(e){e.target.composing||t.$set(t.data,"message",e.target.value)}}}),i("button",{staticClass:"submit",attrs:{type:"submit"},on:{click:t.submit}},[t._v("Submit")])]),i("transition",{attrs:{name:"wait"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.wait,expression:"wait"}],staticClass:"wait"})])],1),i("div",{staticClass:"info"},[t._v("离开页面不可操作！")]),i("main",{staticClass:"content"},[i("div",{staticClass:"list"},t._l(t.mesList,function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"jus-between"},[i("div",{staticClass:"name"},[t._v(t._s(e.username)+":")]),i("div",{staticClass:"time"},[t._v(t._s(t.getTime(e.time)))])]),i("div",{staticClass:"mes"},[t._v(t._s(e.message))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cur.includes(e.id),expression:"cur.includes(item.id)"}],staticClass:"edit"},[i("button",{on:{click:function(i){return t.edit(e)}}},[t._v("编辑")]),i("button",{on:{click:function(i){return t.delet(e)}}},[t._v("删除")])])])}),0)])])])},vt=[],mt=(i("28a5"),i("55dd"),i("20d6"),i("f499")),ft=i.n(mt),ht=(i("7514"),i("0631")),pt=i.n(ht),gt={data:function(){return{cur:[],data:{id:"",username:"",message:"Enter your message ~"},mesList:[],wait:!1}},destroyed:function(){l()(".container").animate({scrollTop:0},500)},mounted:function(){this.initVanilaTilt(),this.getAllMes()},methods:{getAllMes:function(){var t=this,e=new pt.a.Query("Messages");e.find().then(function(e){t.mesList=e.map(function(t){return{id:t.id,username:t.attributes.username,message:t.attributes.message,time:t.updatedAt}}),t.orderTime()})},submit:function(t){t.preventDefault();var e=/^\s+$/;if(!e.test(this.data.username)&&!e.test(this.data.message)){this.wait=!0;var i={username:this.data.username,message:this.data.message};this.data.id?this.update(i):this.save(i)}},edit:function(t){this.data=JSON.parse(ft()(t))},delet:function(t){var e=this;if(window.confirm("确认删除~")){var i=pt.a.Object.createWithoutData("Messages",t.id);i.destroy().then(function(t){var i=e.mesList.findIndex(function(e){return e.id==t.id});e.mesList.splice(i,1),e.reset()})}},reset:function(){this.wait=!1,this.data={id:"",username:"",message:"Enter your message ~"}},save:function(t){var e=this,i=pt.a.Object.extend("Messages"),s=new i;s.save(t).then(function(t){e.mesList.unshift({id:t.id,username:t.attributes.username,message:t.attributes.message,time:t.updatedAt}),e.cur.push(t.id),e.reset()})},orderTime:function(){this.mesList=this.mesList.sort(function(t,e){return Date.parse(e.time)-Date.parse(t.time)})},update:function(t){var e=this,i=pt.a.Object.createWithoutData("Messages",this.data.id);i.save(t).then(function(t){var i=e.mesList.findIndex(function(t){return t.id==e.data.id});e.$set(e.mesList,i,{id:t.id,username:t.attributes.username,message:t.attributes.message,time:t.updatedAt}),e.orderTime(),e.reset()})},getTime:function(t){return t.toLocaleDateString().split("/").join("-")+"   "+t.toLocaleTimeString()},initVanilaTilt:function(){}}},_t=gt,bt=(i("1395"),Object(v["a"])(_t,dt,vt,!1,null,"2bbbfc30",null)),Ct=bt.exports;s["a"].use(j["a"]);var wt=new j["a"]({routes:[{path:"/",redirect:"/person"},{path:"/person",component:z,name:"person"},{path:"/portfolio",component:F,name:"portfolio"},{path:"/skill",component:Y,name:"skill"},{path:"/message",component:Ct,name:"message"},{path:"/concat",component:at,name:"concat"},{path:"/blog",component:ut,name:"blog"}]});i("b059"),i("042c");pt.a.init({appId:"B5R0wHBw9EBMnySC05HI6F4J-gzGzoHsz",appKey:"P1FaA4nhUFJAVK2ksJxvQbAm"});i("4b3c");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(k)},router:wt}).$mount("#app")},"5a5d":function(t,e,i){t.exports=i.p+"img/page5.0f38e7fa.jpg"},"5a93":function(t,e,i){t.exports=i.p+"img/page3.9b5549e4.jpg"},6127:function(t,e,i){t.exports=i.p+"img/page3.a58e4920.jpg"},"69d9":function(t,e,i){},"730b":function(t,e,i){"use strict";var s=i("afd2"),a=i.n(s);a.a},7531:function(t,e,i){t.exports=i.p+"img/page2.144e263e.jpg"},"7c1f":function(t,e,i){t.exports=i.p+"img/page4.00e43d68.jpg"},"83dd":function(t,e,i){},"8bf5":function(t,e,i){t.exports=i.p+"img/page1.d532ece1.jpg"},"978c":function(t,e,i){"use strict";var s=i("69d9"),a=i.n(s);a.a},"998e":function(t,e,i){"use strict";var s=i("d3c2"),a=i.n(s);a.a},"99b1":function(t,e,i){t.exports=i.p+"img/page5.dfa9acf9.jpg"},"9aa6":function(t,e,i){t.exports=i.p+"img/avator.0771587b.jpg"},"9b1b":function(t){t.exports={}},"9bfc":function(t,e,i){},afd2:function(t,e,i){},b059:function(t,e,i){},b0bb:function(t,e,i){"use strict";var s=i("cb3f"),a=i.n(s);a.a},b656:function(t,e,i){t.exports=i.p+"img/page1.83c1a399.jpg"},c466:function(t,e,i){t.exports=i.p+"img/page4.29b0b8ed.jpg"},c8f5:function(t,e,i){t.exports=i.p+"img/page2.adc8b37b.jpg"},cb3f:function(t,e,i){},d3c2:function(t,e,i){},d80e:function(t,e,i){t.exports=i.p+"img/page1.78fde797.jpg"},dad3:function(t,e,i){t.exports=i.p+"img/page3.256f23b1.jpg"},ddb4:function(t,e,i){"use strict";var s=i("32a6"),a=i.n(s);a.a},e8f5:function(t,e,i){"use strict";var s=i("172a"),a=i.n(s);a.a}});
//# sourceMappingURL=app.5509ab28.js.map