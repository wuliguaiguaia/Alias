<template>
  <div id="app">
    <div class="flex wrapper">
      <mainNav></mainNav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <particle></particle>
  </div>
</template>

<script>
import mainNav from "@/components/nav";
import particle from "@/components/particle";
export default {
  name: "app",
  components: {
    mainNav,
    particle
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-size: 0;
}
.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-size: 16px;
}
.bg-hello {
  font-size: 15em;
  color: rgba(255, 255, 255, 0.05);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
}
.container {
  height: 100%;
  width: calc(100% - 250px);
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
  & > div {
    padding: 50px 50px 0 50px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    padding-top: 50px;
    width: 100vw;
    & > div {
      padding: 10px 10px 0 10px;
    }
  }
} 
</style>
