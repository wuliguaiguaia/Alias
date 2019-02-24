<template>
  <div class="blog">
    <h1 class="main-title animated bounceInRight">Blog</h1>
    <div class="card card1 animated bounceInUp">
      <h2 class="title">
        <a href="https://zhuanlan.zhihu.com/p/50813566" target="_blank" rel="noopener noreferrer">
          浏览器发送请求的前世今生
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>SRJ</li>
        <li>Jsonp</li>
        <li>Ajax</li>
        <li>CORS</li>
      </ul>
      <article>
        <div v-for="item in blog1" :key="item.id">
          <h4>{{item.h4}}</h4>
          <pre>{{item.content}}</pre>
        </div>...
      </article>
      <div class="link">
        <a href="https://zhuanlan.zhihu.com/p/50813566" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
      <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div>
    </div>
    <div class="card card2">
      <h2 class="title">
        <a href="https://zhuanlan.zhihu.com/p/48652245" target="_blank" rel="noopener noreferrer">
          移动端适配方案
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>ve/vh</li>
        <li>flex</li>
        <li>rem/em</li>
        <li>@media</li>
      </ul>
      <article>
        <div>
          <div class="prev">
            <h4>移动端适配技术构成：</h4>
            <ul>
              <li>rem</li>
              <li>vw ，vh</li>
              <li>calc（）</li>
              <li>media queries 媒体查询</li>
              <li>百分比布局</li>
              <li>flex，grid</li>
              <li>flexible image 弹性图片</li>
            </ul>
          </div>
          <h4>1.设置 Meta 标签</h4>
          <pre>{{blog2.code}}</pre>
          <h4>2.前端单位</h4>
          <ul>
            <li>px</li>
            <li>em：一个m的宽度，就是这样，绝不是一个汉字的宽度</li>
            <li>vw：视口（viewport）宽度</li>
            <li>...</li>
          </ul>
        </div>...
      </article>
      <div class="link">
        <a href="https://zhuanlan.zhihu.com/p/48652245" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
      <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div>
    </div>
    <div class="card card3">
      <h2 class="title">
        <a href="https://zhuanlan.zhihu.com/p/50533420" target="_blank" rel="noopener noreferrer">
          JavaScript函数详解
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhifeiji"></use>
          </svg>
        </a>
      </h2>
      <ul class="keyword flex-wrap">关键词：
        <li>this/arguments</li>
        <li>apply/call/bind</li>
        <li>构造函数</li>
      </ul>
      <article>
        <div>
          <div class="prev">
            <h4>本文目录：</h4>
            <ul>
              <li>函数的 5 种声明</li>
              <li>return</li>
              <li>词法作用域</li>
              <li>执行上下文</li>
              <li>js的变量提升</li>
              <li>this arguments</li>
              <li>不同场景的this指向</li>
              <li>call apply bind</li>
              <li>call stack</li>
              <li>闭包</li>
              <li>柯里化/高阶函数</li>
              <li>回调</li>
              <li>构造函数</li>
            </ul>
          </div>
          <h4>函数的 5 种声明</h4>1.具名函数
        </div>...
      </article>
      <div class="link">
        <a href="https://zhuanlan.zhihu.com/p/50533420" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cc-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    this.init();
    this.onScroll();
  },
  methods: {
    init() {
      $(".container").animate({ scrollTop: 0 }, 500);
      $(".blog .card")
        .first()
        .css({ opaicty: 1 })
        .nextAll(".card")
        .css({ opacity: 0 });
    },
    onScroll() {
      $(".container").on("scroll", () => {
        $(".blog .card").each((i, el) => {
          console.log($(el).offset().top,i);
          console.log($(el).height()/1.5 ,'xxx');
          
          
          if ($(el).offset().top < $(el).height() / 1.5) {
            // this.page = i;
            console.log(i,'ixx');
            
            if ($(el).css("opacity") == 0) {
            console.log(i,'ixx');
              $(el)
                .css({ opacity: 1 })
                .addClass("animated bounceInUp")
                .siblings()
                .removeClass("animated bounceInUp");
            }
          }
        });
      });
    }
  },
  data() {
    return {
      blog1: [
        {
          h4: "1.form发送请求,但是会刷新页面或新开页面",
          content: `<h1>
  你的账户余额
  <span id="amount">&&&amount&&&</span>
</h1>
<form action="/pay" method="post">
  <input type="submit" value="pay $1">
</form>`,
          id: 401
        },
        {
          h4: "2. a 可以发 get 请求，但是也会刷新页面或新开页面",
          content: `<a href="/xxx"></a>`,
          id: 402
        },
        {
          h4: "3. img 可以发 get 请求，但是只能以图片的形式展示",
          content: `let image = document.createElement('img');
image.src = '/pay'; //send a request
image.onload = () => {
...`,
          id: 403
        }
      ],
      blog2: {
        code: `<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.blog {
  color: #fff;
  // margin: 50px;
}

  .card {
    padding: 20px 20px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    position: relative;

    .title {
      cursor: pointer;
      font-size: 19px;
      margin-bottom: 5px;
      a {
        color: inherit;
        .icon {
          width: 25px;
          height: 25px;
        }
      }
    }
    article {
      color: #c1c1c1;
      font-size: 14px;
      .prev {
        h4 {
          margin: 3px 0;
        }
        ul {
          margin-left: 14px;
        }
        margin-bottom: 10px;
      }
      pre {
        font-family: "微软雅黑";
        font-size: 12px;
        font-size: 12px;
        border: 1px solid #696969;
        box-sizing: content-box;
        padding: 5px;
        margin-top: 5px;
        width: 100%;
        overflow: hidden;
      }
      h4 {
        margin: 5px 0;
      }
      ul {
        margin-left: 14px;
      }
    }
    .keyword {
      font-size: 12px;
      margin-bottom: 10px;
      color: #ada5a5;

      li {
        margin-right: 10px;
      }
    }
    .link {
      margin-top: 15px;
      a {
        color: #fff;
        .icon {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
@media screen and (max-width:500px){
.card .title{
  font-size: 16px;
}
}
</style>


