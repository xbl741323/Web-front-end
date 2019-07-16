<template>
  <div>
    <h1>这是App组件</h1>
    <!-- 为什么这里叫做mt-button的button能直接使用? 答：因为已经全局导入过了 -->
    <mt-button type="danger" @click="show">default</mt-button>
    <mt-button type="danger" size="large">default</mt-button>
    <mt-button disabled>disabled</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="more">back</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//导入Toast组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      //模拟获取列表的一个Ajax方法
      //在获取数据之前，立即弹出Toast提示用户，正在加载数据
      this.show();
      setTimeout(() => {
        //当3秒后，数据获取回来了，要把Toast移除
        this.toastInstanse.close();
      }, 3000);
    },
    show() {
      this.toastInstanse = Toast({
        message: "加载中...",
        position: "middle",
        duration: -1,
        iconClass: "glyphicon glyphicon-ok",
        className: "mytoast" //自定义Toast的样式，需要自己提供一个类名
      });
    }
  }
};
</script>

<style>
</style>