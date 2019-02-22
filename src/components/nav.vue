<template>
  <div class="minNav-wrapper">
    <div class="nav">
      <div class="title">
        <h1 class="text-center">Alias's Resume</h1>
      </div>
      <ul class="list">
        <li class="item" v-for="item in list" :key="item.id" @click="go">
          <router-link :to="item.href">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="item.icon"></use>
            </svg>
            {{item.label}}
          </router-link>
        </li>
      </ul>
      <button class="btn-default btnpdf animated swing">
        <a href="https://wuliguaiguaia.github.io/Alias/pdf/pdf.html" target="_blank">查看PDF</a>
        </button>
    </div>
    <div class="nav-top fixed-top">
      <div class="flex-between">
        <h1>Alias's Resume</h1>
        <button class="btn-default animated jello" @click="showNav">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-topBtn"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      touchStartX: "",
      diffX: "",
      navShow: true,
      list: [
        {
          label: "个人  About me",
          href: "/person",
          icon: "#icon-gerenzhongxin",
          id: 1001
        },
        {
          label: "技能 Technology stack",
          href: "/skill",
          icon: "#icon-zhuanyezhishijineng",
          id: 1002
        },
        {
          label: "项目 Portfolio",
          icon: "#icon-xiangmu",
          href: "/portfolio",
          id: 1003
        },
        {
          label: "精选博客 Blog",
          href: "/blog",
          id: 1004
        },
        {
          label: "联系我 Concat me",
          icon: "#icon-call",
          href: "/concat",
          id: 1005
        },
        {
          label: "留言板 Message",
          icon: "#icon-msg",
          href: "/message",
          id: 1006
        }
      ],
      icons: [
        {
          src: "",
          alt: ""
        }
      ]
    };
  },
  mounted() {
    $("#app").on("touchstart", e => {
      this.touchStartX = e.changedTouches[0].clientX;
    });
    $("#app").on("touchend", e => {
      let end = e.changedTouches[0].clientX;
      this.diffX = end - this.touchStartX;
      if (this.diffX < -20) {
        $(".minNav-wrapper .nav").removeClass("show");
      }
    });
    $(".container").on("click", e => {
      console.log(1);
      
      $(".minNav-wrapper .nav").removeClass("show");
    });
  },
  methods: {
    showNav() {
      $(".minNav-wrapper .nav").toggleClass("show");
    },
    go() {
      $(".minNav-wrapper .nav").removeClass("show");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 250px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  min-height: 100vh;
  transition: left 0.5s;
  z-index: 9;
  h1 {
    padding: 20px 10px;
    font-size: 25px;
  }
  .list {
    .item {
      font-size: 15px;
      a {
        padding: 20px;
        display: block;
        color: #e8e8e8;
        border: 1px solid transparent;
        transition: all 500ms;
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
      .router-link-active {
        background-color: #fff;
        color: #d43b33;
      }
    }
  }
}
.nav-top {
  width: 100vw;
  color: #fff;
  background-color: #d43b33;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  display: none;
  h1 {
    font-size: 25px;
  }
  button {
    animation-iteration-count: infinite;
  }
  .icon {
    font-size: 35px;
    font-weight: bold;
    color: #fff;
  }
}
.swing-animate {
}

.btnpdf {
  position: absolute;
  bottom: 30px;
  left: 30px;
  padding: 14px 20px;
  background: #c3b327;
  border-radius: 5px;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  a{
    width: 100%;
    height: 100%;
    display: block;
  color: #fff;

  }
}

.slidenav-enter,
.slidenav-leave-to {
  left: -100%;
}
.slidenav-enter-active,
.slidenav-leave-active {
  transition: left 0.5s;
  left: 0;
}

@media screen and (max-width: 768px) {
  .nav {
    position: fixed;
    left: -100%;
    background-color: #d43b33;
    width: 231px;
    .list {
      .item a {
        padding: 14px 20px;
        .icon {
          margin-right: 5px;
        }
      }
    }

    &.show {
      left: 0;
    }
  }
  .nav-top {
    display: block;
  }
}
</style>
