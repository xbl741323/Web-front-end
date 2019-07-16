<template>
  <div>
    <h3>这是Account组件</h3>
    <router-link to="/account/login">登陆</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
/*普通的style标签只支持普通的样式，如果想要启用scss或less,需要为style元素，设置lang属性*/
//只要咱们的style标签，是在.vue组件中定义的，那么，推荐都为style开启scoped作用域属性
body {
  div {
    font-style: italic;
  }
}
</style>
