<template>
  <div class="portfolio" @touchstart="touchStart" @touchend="touchEnd">
    <h1 class="main-title animated bounceInRight">Portfolio</h1>
    <!-- <transition name="proslide"> -->
    <section class="section1 item-wrapper animated bounceInUp">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(0,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>网易云音乐</h2>
                </div>
                <div class="desc">仿移动端网易云音乐，包含后台管理系统，支持上传歌曲，歌词，编辑歌曲，删除等，支持定制歌单。可在线听歌，查看歌词等。</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>使用语言：html + css + sass + javascript + jquery</li>
                    <li>使用 flex/vw/vh 进行移动端适配，并定制全局 reset.css</li>
                    <li>使用 localStorage 存储用户搜索历史</li>
                    <li>仿 vueJs 构建 MVC 设计模式,编写 eventHub 发布订阅模式进行各模块间逻辑交互</li>
                    <li>learnCloud 进行数据库存储,七牛云文件上传</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wuliguaiguaia/netease-music"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href="https://wuliguaiguaia.github.io/netease-music/src/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <transition name="rightMove">
            <div class="right" v-show="show(0,'showRight')">
              <div class="pic">
                <myswiper :lists="musicList"></myswiper>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div> -->
    </section>
    <!-- </transition> -->
    <!-- <transition name="proslide"> -->
    <section class="section2 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(1,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>有赞商城</h2>
                </div>
                <div class="desc">仿移动端有赞商城，使用mock数据，支持地址编辑，购物车结算，查看商品，搜索商品及店铺等功能。</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>使用语言：vue + axios + vuex + vue-router + sass + eslint + es6</li>
                    <li>使用 vue-cli3 进行原型开发并配置 vue.config.js</li>
                    <li>使用 vuex 进行地址状态管理，支持增删改查</li>
                    <li>使用 axios + promise 异步请求</li>
                    <li>使用 easy-mock 接口管理平台，使用 mock.js 进行数据模拟</li>
                    <li>使用 mint-ui + velocity-animate 插件</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wuliguaiguaia/vue_youzan"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href=" https://wuliguaiguaia.github.io/vue_youzan/dist/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <transition name="rightMove">
            <div class="right" v-show="show(1,'showRight')">
              <div class="pic">
                <myswiper :lists="mallList"></myswiper>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- <div id="bottomIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuangjiantouxia"></use>
        </svg>
      </div> -->
    </section>
    <!-- </transition> -->
    <!-- <transition name="proslide"> -->
    <section class="section3 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(2,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>猿译 for fun</h2>
                </div>
                <div class="desc">一款多功能翻译小程序，支持多语言，历史，收藏，留言等功能，使用云开发与本地存储。</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>使用web存储用户搜索，用户便于查看翻译记录</li>
                    <li>使用云开发做用户收藏，用数据库进行永久存储</li>
                    <li>历史页面与收藏页面关联，可随时控制是否收藏</li>
                    <li>留言页面详细记录用户信息且用户可删除</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wuliguaiguaia/miniprogram-translate"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href="https://i.loli.net/2019/02/22/5c6ecf52dcd38.jpg"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <transition name="rightMove">
            <div class="right" v-show="show(2,'showRight')">
              <div class="pic">
                <myswiper :lists="transList"></myswiper>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section class="section3 item-wrapper">
      <div class="item">
        <div class="content flex">
          <transition name="leftMove">
            <div class="left jusCenter-alignCenter" v-show="show(2,'showLeft')">
              <!-- -->
              <div class="tem">
                <div class="title">
                  <h2>调皮的机器猫</h2>
                </div>
                <div class="desc">这是一个用css3向画面绘制机器猫的项目，亮点在于添加文本与绘制图形同步进行，让用户直观看到整个绘制过程。</div>
                <div class="info">
                  <ol class="showStyle">
                    <li>可选择重新绘制将整个画面重置</li>
                    <li>可加速减速控制绘制节奏</li>
                    <li>可随时暂停或直接跳过观看结果</li>
                    <li>learnCloud添加留言功能</li>
                  </ol>
                </div>
                <div class="link">
                  <button class>
                    <a
                      class="btn-default"
                      href="https://github.com/wuliguaiguaia/animation-Doraemon"
                      target="_blank"
                    >项目源码</a>
                  </button>
                  <button class>
                    <a
                      class="btn-default"
                      href="https://wuliguaiguaia.github.io/animation-Doraemon/index.html"
                      target="_blank"
                    >项目预览</a>
                  </button>
                </div>
                <div class="slide-icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuoyouhuadong"></use>
                  </svg>
                </div>
              </div>
            </div>
          </transition>
          <transition name="rightMove">
            <div class="right" v-show="show(3,'showRight')">
              <div class="pic">
                <myswiper :lists="DoraemonList"></myswiper>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <!-- </transition> -->
  </div>
</template>
<script>
import myswiper from "@/components/myswiper";
import $ from "jquery";

export default {
  data() {
    return {
      len: 3,
      touchStartX: 0,
      touchDiffX: 0,
      page: 0,
      dir: "hor",
      status: "showLeft",
      media: "",
      musicList: [
        { img: require("./music/page1.jpg") },
        { img: require("./music/page2.jpg") },
        { img: require("./music/page3.jpg") },
        { img: require("./music/page4.jpg") },
        { img: require("./music/page5.jpg") }
      ],
      transList: [
        { img: require("./translate/page1.jpg") },
        { img: require("./translate/page2.jpg") },
        { img: require("./translate/page3.jpg") },
        { img: require("./translate/page5.jpg") },
        { img: require("./translate/page4.jpg") }
      ],
      mallList: [
        { img: require("./mall/page1.jpg") },
        { img: require("./mall/page2.jpg") },
        { img: require("./mall/page3.jpg") },
        { img: require("./mall/page5.jpg") },
        { img: require("./mall/page4.jpg") }
      ],
      DoraemonList: [
        { img: require("./Doraemon/1.jpg") },
        { img: require("./Doraemon/2.jpg") }
      ],
    };
  },
  mounted() {
    $(".container").animate({ scrollTop: 0 }, 500);
    this.init();
    this.onScroll();
  },
  components: { myswiper },
  watch: {
    touchDiffX(val) {
      if (val > 100) {
        this.status = "showLeft";
        this.dir = "hor";
      }
      if (val < -100) {
        this.status = "showRight";
        this.dir = "hor";
      }
    }
    // touchDiffY(val) {
    //   if (val > 100) {
    //     this.dir = "ver";
    //     if (this.page > 0) {
    //       this.page--;
    //     }
    //   } else if (val < -100) {
    //     this.dir = "ver";
    //     if (this.page < this.len - 1) {
    //       this.page++;
    //     }
    //   }
    // }
  },
  methods: {
    init() {
      this.media = this.resize();
      $(".portfolio section")
        .first()
        .css({ opaicty: 1 })
        .nextAll(".item-wrapper")
        .css({ opacity: 0 });
    },
    show(page, dir) {
      if (this.media === "pc") {
        return true;
      } else {
        if (!dir) {
        } else {
          if (dir == "showLeft") {
            if (this.dir !== "hor") {
              return true;
            } else {
              return this.status === dir ? true : false;
            }
          } else {
            return page === this.page && this.status === dir ? true : false;
          }
        }
      }
    },
    onScroll() {
      $(".container").on("scroll", () => {
        $(".portfolio .item-wrapper").each((i, el) => {
          if ($(el).offset().top < $(el).height() / 1.2) {
            this.page = i;
            if ($(el).css("opacity") == 0) {
              $(".portfolio section")
                .eq(i)
                .addClass("animated bounceInUp")
                .css({ opacity: 1 })
                .siblings()
                .removeClass("animated bounceInUp");
            }
          }
        });
      });
    },
    resize() {
      if ($(window).width() > 500) {
        return "pc";
      } else {
        return "phone";
      }
    },
    touchStart(e) {
      this.touchStartX = e.changedTouches[0].clientX;
      // this.touchStartY = e.changedTouches[0].clientY;
    },
    touchEnd(e) {
      if (this.media === "phone") {
        let endX = e.changedTouches[0].clientX;
        this.touchDiffX = endX - this.touchStartX;
      }
      // let endY = e.changedTouches[0].clientY;
      // this.touchDiffY = endY - this.touchStartY;
      // console.log("xxxxx");
    }
  }
};
</script>
<style lang="scss" scoped>
.leftMove-enter,
.leftMove-leave-to {
  transform: translateX(-100%);
}
.leftMove-enter-active,
.leftMove-leave-active {
  transition: transform 1s;
}
.leftMove-enter-to,
.leftMove-leave {
  transform: translateX(0);
}

.rightMove-enter,
.rightMove-leave-to {
  transform: translateX(100%);
}
.rightMove-enter-active,
.rightMove-leave-active {
  transition: transform 1s;
}
.rightMove-enter-to,
.rightMove-leave {
  transform: translateX(0);
}

.proslide-enter {
  transform: translateY(100%);
}
.proslide-leave-to {
  transform: translateY(-100%);
}
.proslide-enter-active,
.proslide-leave-active {
  transition: transform 1s;
}
.proslide-enter-to,
.proslide-leave {
  transform: translateY(0);
}

ol.showStyle{
  li::before{
    content: "*";
    margin-right:7px;
  }
}
.portfolio {
  color: #fff;
  width: 100%;
}
.item-wrapper {
  overflow: hidden;
  height: calc(100vh - 50px);
  transition: transform 0.5s;
  position:relative;
  .item {
    width: 100%;
  }
  &.offsetTop {
    transform: translateY(-100%);
  }
  
}

.item-wrapper .content {
  overflow: scroll;
  .left {
    width: calc(100% - 317px);
    min-width: 357px;
    height: 537px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    position: relative;
    .title {
      h2 {
        position: relative;
        font-size: 25px;
        color: rgba(255, 255, 255, 0.6);
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 80%;
          height: 2px;
          background-color: rgba(212, 59, 51, 1);
        }
      }
    }
    .desc {
      margin-top: 20px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    .info {
      width: 88%;
      border: 1px solid #fff;
      color: rgba(199, 187, 187, 1);
      margin: 14px;
      font-size: 13px;

      ol {
        padding: 10px;
        margin: 10px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .link {
      float: right;
      button {
        padding: 10px 20px;
        background-color: rgb(212, 59, 51);
        margin-right: 10px;
        a {
          color: #fff;
        }
      }
    }
    .slide-icon {
      position: absolute;
      bottom: 0px;
      right: -5px;
      display: none;
      .icon {
        width: 50px;
        height: 50px;
      }
    }
  }
  .right {
    .pic {
      width: 317px;
      height: 537px;
      overflow: hidden;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        z-index: 1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .item-wrapper .content .left .slide-icon {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .container .portfolio {
    padding: 0;
    overflow: hidden;
    font-size: 0;
  }
  .item-wrapper {
    height: calc(100vh - 50px);
    .item {
      height: 100%;
    }
    .content {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      .left {
        position: absolute;
        left: 0;
        background-color: transparent;
        height: 100%;
        width: 100%;
        min-width: 100%;
        padding: 35px;
        overflow: hidden;
        .title h2 {
          font-size: 15px;
          &:after {
            width: 80%;
          }
        }
        .tem {
          padding: 20px;
          background: rgba(0, 0, 0, 0.7);
          position: relative;
        }
        .info {
          margin: 16px 0;
          width: 100%;
          font-size: 14px;
          ol {
            margin: 5px;
          }
        }
        .desc {
          font-size: 12px;
        }
        .link {
          float: none;
          button {
          }
        }
      }
      .right {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        &:after {
          // content: "";
          // position: absolute;
          // left: 0;
          // top: 0;
          // width: 100%;
          // height: 100%;
          // background-color: transparent;
          // z-index: 2;
        }
        .pic {
          position: relative;
        }
      }
    }
  }
}
</style>


