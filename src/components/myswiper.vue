<template>
  <div class="wrapper">
    <div class="content">
      <transition-group name="toLeft" tag="div">
        <div class="item" v-show="index === curIndex" v-for="(list,index) in  lists" :key="index">
          <img :src="list.img" alt>
        </div>
      </transition-group>
    </div>
    <div class="dot">
      <span :class="{active:index === curIndex}" v-for="(item,index) in  number" :key="index"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lists: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      number: this.lists.length,
      curIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.autoMove();
  },
  methods: {
    autoMove() {
      this.timer = setInterval(() => {
        this.gotoLeft();
      }, 2000);
    },
    gotoLeft() {
      this.curIndex++;
      if (this.curIndex === this.number) {
        this.curIndex = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    height: 100%;
    .item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ccc;
      font-size: 5rem;
      text-align: center;
      line-height: 30vh;
    }
  }
  .dot {
    // width: 30%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(0,0,0,.3);
      color: #fff;
      text-align: center;
      transition: background-color 1s, color 1s;
      margin:5px;
      &.active {
        background-color: rgb(0, 162, 255);
        color: #fff;
      }
    }
  }
} 
/* left */
.toLeft-enter {
  transform: translateX(100%);
}

.toLeft-enter-to {
  transform: translateX(0);
  transition: transform 500ms;
}

.toLeft-leave {
  transform: translateX(0);
}

.toLeft-leave-to {
  transform: translateX(-100%);
  transition: transform 500ms;
}
 
</style>


