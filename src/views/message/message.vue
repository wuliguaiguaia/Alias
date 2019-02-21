<template>
  <div class="message">
    <h1 class="main-title animated bounceInRight">Message</h1>
    <div class="wrapper">
      <div class="form">
        <form class="flex-col">
          <input type="text" placeholder="Enter your name ~" v-model="data.username">
          <textarea name id cols="30" rows="5" v-model="data.message"></textarea>
          <button type="submit" class="submit" @click="submit">Submit</button>
        </form>
        <transition name="wait">
          <div v-show="wait" class="wait"></div>
        </transition>
      </div>
      <div class="info">离开页面不可操作！</div>
      <main class="content">
        <div class="list">
          <div class="item" v-for="item in mesList" :key="item.id">
            <div class="jus-between">
              <div class="name">{{item.username}}:</div>
              <div class="time">{{ getTime(item.time)}}</div>
            </div>
            <div class="mes">{{item.message}}</div>
            <div class="edit" v-show="cur.includes(item.id)">
              <button @click="edit(item)">编辑</button>
              <button @click="delet(item)">删除</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
import AV from "leancloud-storage";
import $ from "jquery";
export default {
  data() {
    return {
      cur: [],
      data: {
        id: "",
        username: "",
        message: "Enter your message ~"
      },
      mesList: [],
      wait: false
    };
  },
  destroyed(){
    $('.container').animate({ scrollTop: 0 }, 500);
  },
  mounted() {
    this.initVanilaTilt();
    this.getAllMes();
  },
  methods: {
    getAllMes() {
      let Messages = new AV.Query("Messages");
      Messages.find().then(res => {
        // 成功
        this.mesList = res.map(r => {
          return {
            id: r.id,
            username: r.attributes.username,
            message: r.attributes.message,
            time: r.updatedAt
          };
        });
        this.orderTime();
      });
    },
    submit(e) {
      e.preventDefault();
      let reg = /^\s+$/;
      if (!reg.test(this.data.username) && !reg.test(this.data.message)) {
        this.wait = true;
        let data = {
          username: this.data.username,
          message: this.data.message
        };
        if (this.data.id) {
          this.update(data);
        } else {
          this.save(data);
        }
      }
    },
    edit(data) {
      this.data = JSON.parse(JSON.stringify(data));
    },
    delet(data) {
      if (window.confirm("确认删除~")) {
        let message = AV.Object.createWithoutData("Messages", data.id);
        message.destroy().then(res => {
          let index = this.mesList.findIndex(item => {
            return item.id == res.id;
          });
          this.mesList.splice(index, 1);
          this.reset();
        });
      }
    },
    reset() {
      this.wait = false;
      this.data = { id: "", username: "", message: "Enter your message ~" };
    },
    save(data) {
      let Messages = AV.Object.extend("Messages");
      let messages = new Messages();
      messages.save(data).then(r => {
        this.mesList.unshift({
          id: r.id,
          username: r.attributes.username,
          message: r.attributes.message,
          time: r.updatedAt
        });
        this.cur.push(r.id);
        this.reset();
      });
    },
    orderTime() {
      this.mesList = this.mesList.sort((item1, item2) => {
        return Date.parse(item2.time) - Date.parse(item1.time);
      });
    },
    update(data) {
      let message = AV.Object.createWithoutData("Messages", this.data.id);
      message.save(data).then(r => {
        let index = this.mesList.findIndex(item => {
          return item.id == this.data.id;
        });
        this.$set(this.mesList, index, {
          id: r.id,
          username: r.attributes.username,
          message: r.attributes.message,
          time: r.updatedAt
        });
        this.orderTime();
        this.reset();
      });
    },
    getTime(time) {
      return (
        time
          .toLocaleDateString()
          .split("/")
          .join("-") +
        "   " +
        time.toLocaleTimeString()
      );
    },
    initVanilaTilt() {
      //   VanillaTilt.init(document.querySelectorAll(".concat dl"), {
      //     max: 50,
      //     speed: 400
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
.wait-enter,
.wait-leave-to {
  opacity: 0;
}
.wait-enter-active,
.wait-leave-active {
  transition: opacity 500ms;
  opacity: 1;
}

.message {
  color: #fff;
  .wrapper {
    max-width: 500px;
    margin: 0 auto;
    width: 90%;
  }
  .info {
    text-align: right;
    font-size: 12px;
    color: #999;
  }
  .form {
    position: relative;
    form {
      background-color: rgba(0, 0, 0, 0.7);
      * {
        padding: 10px;
        background-color: transparent;
        border: none;
        resize: none;
        color: rgb(199, 199, 199);
      }
      input {
        border-bottom: 1px solid rgb(124, 118, 118);
      }
      button {
        border: none;
        background-color: rgba(212, 59, 51, 1);
      }
    }

    .wait {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      &:after {
        content: "waiting ...";
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background-color: #000;
      }
    }
  }
  .content {
    margin-top: 20px;
    .item{
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      margin-bottom: 10px;
    }
    .name {
      color: cornflowerblue;
      font-size: 14px;
    }
    .time {
      color: #999;
      font-size: 13px;
    }
    .mes {
      color: #fff;
      font-size: 15px;
      padding: 10px;
    }

    .edit {
      display: flex;
      justify-content: flex-end;
      button {
        padding: 3px 10px;
        background-color: rgba(212, 59, 51, 1);
        color:#fff;
        font-size: 12px;
      }
      button + button {
        background-color: #fff;
        color: #333;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .message .wrapper {
    .form {
      // *{
      //   padding: 5px
      // }
      textarea {
        height: 50px;
      }
    }
  }
}
</style>


