import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import "./assets/reset.css";
import "./common/css/common.scss";
import "./common/js/initAV.js";
import "./../node_modules/animate.css/animate.min.css";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
