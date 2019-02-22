<template>
  <div class="blog">
    <h1 class="main-title animated bounceInRight">Blog</h1>
    <div class="card">
      <a href="https://zhuanlan.zhihu.com/p/50813566" target="_blank">
        <h2 class="title">浏览器发送请求的前世今生</h2>
        <ul class="keyword">
          关键词：
            <li>SRJ</li>
            <li>jsonp</li>
            <li>ajax</li>
            <li>CORS</li>
        </ul>
        <article>
          <div v-for="item in blog1" :key="item.id">
            <h4>{{item.h4}}</h4>
            <pre>{{item.content}}</pre>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>
<script>
export default {
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
            id:401
        },
        {
          h4: "2. a 可以发 get 请求，但是也会刷新页面或新开页面",
          content: `<a href="/xxx"></a>`,
          id:402
        },
        {
          h4: "3. img 可以发 get 请求，但是只能以图片的形式展示",
          content: `let image = document.createElement('img');
image.src = '/pay'; //send a request
image.onload = () => {
    alert('request success');
    amount.innerText = amount.innerText - 1;
}
image.onerror = () => {
    alert("request error");
}`,
            id:403
        },
        {
          h4: "4. script 发送get请求（SRJ > Server Rendered JavaScript ），但是只能以脚本的形式运行",
          content: `...`,
            id:404
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.blog {
  color: #fff;
  // margin: 50px;
}
</style>


