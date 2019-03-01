<template>
  <div class="skill">
    <h1 class="main-title animated bounceInRight">Technology stack</h1>
    <div class="content flex-wrap jus-around">
      <div class="box odd">
        <div class="item item1" data-tilt data-tilt-scale="1.1">
          <h1>01</h1>
          <ol>
            <li>熟练 HTML,了解语义化标签，熟练DOM事件</li>
            <li>熟练 CSS 核心概念，盒模型，文档流，浮动，定位，BFC，各种居中</li>
            <li>熟练 flex 弹性布局，移动端配置</li>
          </ol>
        </div>
      </div>
      <div class="box even">
        <div class="item item2" data-tilt data-tilt-scale="1.1">
          <h1>02</h1>
          <ol>
            <li>1. 熟练 JavaScript 及 常用ES6语法</li>
            <li>2. 了解原型，闭包，this</li>
            <li>3. 熟练 web存储，熟练异步操作Ajax，promise，Await/Async</li>
            <li>4. 熟练常用正则表达式</li>
          </ol>
        </div>
      </div>
      <div class="box odd">
        <div class="item item3" data-tilt data-tilt-scale="1.1">
          <h1>03</h1>
          <ol>
            <li>熟练 JQuery，Bootstrap</li>
            <li>熟练 Sass 嵌套，函数，mixin</li>
            <li>熟悉 同源协议，跨域，Jsonp</li>
          </ol>
        </div>
      </div>
      <div class="box even">
        <div class="item item4" data-tilt data-tilt-scale="1.1">
          <h1>04</h1>
          <ol>
            <li>熟练 VueJs 语法，了解生命周期，指令，计算属性等</li>
            <li>熟练 Vue-router 路由配置，Vuex 状态管理</li>
            <li>了解 MVC MVVM 开发模式，代码层面向模块化组件化靠近</li>
          </ol>
        </div>
      </div>
      <div class="box odd">
        <div class="item item5" data-tilt data-tilt-scale="1.1">
          <h1>05</h1>
          <ol>
            <li>熟悉 HTTP 协议</li>
            <li>使用过 Gulp，Webpack 基本配置，用过 Parcel</li>
            <li>熟练小程序基本语法及云开发，有项目经验</li>
            <li>热爱前端，对新技术无限好奇，喜欢写博客</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
import $ from "jquery";
export default {
  mounted() {
    if ($(window).width() > 500) {
      this.initVanilaTilt();
      this.toggleClass(1);
    } else {
      this.init();
      this.initScroll();
    }
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    init() {
      setTimeout(() => {
        $(".skill .box")
          .first()
          .addClass("scale");
      }, 50);
    },
    initScroll() {
      $("#app .container").on("scroll", function(e) {
        $(".skill .box").each((i, el) => {
          if (
            $(el).offset().top <= 259 &&
            $(el).offset().top + $(el).height() <= 553
          ) {
            $(el)
              .addClass("scale")
              .siblings()
              .removeClass("scale");
          }
        });
      });
    },
    toggleClass(n) {
      if (n === 1) {
        $(".skill .box.even").addClass("animated bounceInUp");
        $(".skill .box.odd").addClass("animated bounceInDown");
      }
    },
    initVanilaTilt() {
      VanillaTilt.init(document.querySelector(".content .item1"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".content .item2"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".content .item3"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".content .item4"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".content .item5"), {
        max: 25,
        speed: 400
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.skill {
  color: #fff;
  padding: 50px 40px;
}
.content {
  margin-top: 90px;
  .box {
    .item {
      width: 190px;
      padding: 10px;
      font-size: 14px;
      margin-bottom: 20px;
      min-height: 275px;
    }
    &:nth-child(even) .item {
      background: rgba(5, 146, 92, 0.986);
    }
    &:nth-child(odd) .item {
      background: rgba(255, 255, 255, 0.3);
    }
    li {
      margin: 15px 0;
    }
    h1 {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
@media screen and (max-width: 500px) {
  .skill .content {
    margin: 58px;
    .box {
      transform: scale(1);
      transition: transform 0.5s;
      &.scale {
        transform: scale(1.2);
      }
    }
  }
}
</style>


