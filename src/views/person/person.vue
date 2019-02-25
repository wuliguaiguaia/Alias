<template>
  <div class="person">
    <div class="section section1 clearfix">
      <div class="pic-wrapper fl animated bounceInLeft">
        <div class="pic" data-tilt>
          <img src="./avator.jpg" alt width="250">
        </div>
      </div>
      <div class="info-wrapper fr animated bounceInRight">
        <div class="info" data-tilt>
          <div class="tem">
            <h1>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-geren9"></use>
              </svg>
              周媛莉
            </h1>
            <hr>
            <dl>
              <dt>应聘职位</dt>
              <dd>前端工程师</dd>
            </dl>
            <dl>
              <dt>年龄</dt>
              <dd>21</dd>
            </dl>
            <dl>
              <dt>政治面貌</dt>
              <dd>中共党员</dd>
            </dl>
            <dl>
              <dt>现住址</dt>
              <dd>陕西西安</dd>
            </dl>
            <dl>
              <dt>英语等级</dt>
              <dd>CET-4</dd>
            </dl>
            <dl>
              <dt>学校</dt>
              <dd>本科 西安石油大学</dd>
            </dl>
            <dl>
              <dt>专业</dt>
              <dd>材料物理</dd>
            </dl>
          </div>
        </div>
      </div>
      <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div>
    </div>
    <div class="section section2">
      <div class="header">
        <h1>School experience</h1>
      </div>
      <div class="content jus-around">
        <div class="item item-left">
          <div class="box process" data-tilt data-tilt-scale="1.1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiaoyujingli"></use>
            </svg>
            <h1>Learning process</h1>
            <p>自学前端开发，学习资源是视频课程，相关书籍以及MDN,从基本的静态页面到响应式页面，熟练弹性布局及移动端页面开发，熟练Vue技术栈，熟悉工程化，模块化，组件化开发，有小程序、移动端开发经验，至此有1年学习经验。</p>
          </div>
        </div>
        <div class="item item-right">
          <div class="box honor" data-tilt data-tilt-scale="1.1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rongyu"></use>
            </svg>
            <h1>Get honor</h1>
            <ol>
              <li>国家励志奖学金</li>
              <li>品学兼优二等奖</li>
              <li>英语四级</li>
              <li>校园歌舞大赛三等奖</li>
              <li>校级优秀社团干部</li>
              <li>优秀共青团员，三好学生</li>
            </ol>
          </div>
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
    this.init();
    if ($(window).width() > 500) {
      this.initVanilaTilt();
    }
    this.initScroll();
    console.log($(".info-wrapper"))
    console.log($);
    
  },
  destroyed() {
    $(".container").animate({ scrollTop: 0 }, 500);
  },
  methods: {
    initVanilaTilt() {
      VanillaTilt.init(document.querySelector(".pic"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".info"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".process"), {
        max: 25,
        speed: 400
      });
      VanillaTilt.init(document.querySelector(".honor"), {
        max: 25,
        speed: 400
      });
    },
    initScroll() {
      $("#app .container").on("scroll", function(e) {
        if ($(e.currentTarget).scrollTop() > 0) {
          $(".section2 .header")
            .addClass("animated bounceInRight")
            .show();
        }
        if ($(e.currentTarget).scrollTop() >= $(".section2 .header").height()) {
          $(".section2 .item-left")
            .addClass("animated bounceInLeft")
            .show();
          $(".section2 .item-right .box").height(
            $(".section2 .item-left .box").height()
          );
          $(".section2 .item-right")
            .addClass("animated bounceInRight")
            .show();
        }
      });
    },
    init() {}
  }
};
</script>
<style lang="scss" scoped>
.person {
  width: 100%;
}
.section {
  position: relative;
}
.section2 {
  .header,
  .item {
    display: none;
  }
}

.section1 {
  // display: flex;
  // justify-content: space-between;
  padding: 10% 15%;
  .pic-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .pic {
    width: 100%;
    border: 1px solid #fff;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 10px solid yellow;
      z-index: -1;
      top: 25px;
      left: -25px;
    }
    img {
      width: 100%;
      padding: 5px;
      background: #000;
    }
  }
  h1 {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  hr {
    margin: 20px 0;
  }
  .info-wrapper {
    margin-top: 70px;
    width: 450px;
    position: relative;
  }

  .info {
    background: #000;
    font-size: 14px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    color: #fff;
    border: 1px solid #fff;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 10px solid #32895b;
      bottom: -28px;
      right: -28px;
      z-index: -5;
    }

    .tem {
      margin: 5px;
      padding: 20px 100px;
      background: #353535;
    }
    dl {
      display: flex;
    }

    dt {
      width: 36%;
      margin-bottom: 14px;
      float: left;
      font-weight: bold;
      color: rgb(157, 160, 167);
    }
  }
}

.section2 {
  padding: 45px;

  .header {
    color: #fff;
    position: relative;
    h1:after {
      content: "";
      position: absolute;
      bottom: -16px;
      width: 154px;
      height: 5px;
      background: #b7b717fa;
      left: 0;
    }
  }
  .content {
    margin-top: 70px;
    .item {
      width: 40%;
      margin-bottom: 30px;
    }
    .box {
      background: rgba(7, 156, 73, 0.6);
      color: #fff;
      min-height: 330px;
      padding: 30px 23px;
      &.honor {
        background: rgba(239, 171, 21, 0.6);
      }
      .icon {
        width: 58px;
        height: 58px;
      }
      h1 {
        margin: 10px 0;
      }
      p,
      ol {
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .section2 {
    .header {
      // margin-top: 50px;
      h1 {
        font-size: 19px;
        border-bottom: 2px solid yellow;
        margin-bottom: 30px;
        margin-left: -20px;
        &:after {
          display: none;
        }
      }
    }
    .content {
      flex-direction: column;
      margin-top: 0;
      .item {
        width: 100%;
        // margin-top: 30px;
        .box {
          min-height: 200px;
          .icon {
            width: 30px;
            height: 30px;
          }
          h1 {
            font-size: 18px;
            margin: 0 0 10px 0;
          }
          ol {
            font-size: 13px;
          }
        }
      }
    }
  }
  .section1 {
    padding: 0 10%;
    .pic-wrapper {
      width: 120px;
      height: 120px;
      margin-top: 20px;
      margin-bottom: 0;
      .pic {
      }
    }
    .info-wrapper {
      width: 220px;
      margin-top: 20px;
      .info {
        .tem {
          padding: 10px;
          h1 {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 20px;
          }

          hr {
            margin: 6px 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section1 .info {
    .tem {
      padding: 20px;
    }
  }
}
</style>


