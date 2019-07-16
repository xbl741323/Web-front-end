<template>
  <div>
    <h3>这是登陆组件，使用vue文件定义出来的 --- {{msg}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    //注意：组件中的data必须是function
    return {
        msg:"321"
    };
  },
  methods: {
      show(){
          console.log("调用了login.vue中的show方法");
      }
  },
};
</script>

<style>
</style>