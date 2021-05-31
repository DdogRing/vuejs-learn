<template>
  <div id="app">
<!--    <img src="./assets/logo.png">
    <h2>我是APP组件</h2>
    <router-view />
    <h2>HelloWorld</h2>
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + user.username">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}">档案</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        username: 'lisi'
      }
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // this.$router.push('/home')
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick() {
      // this.$router.push('/about')
      // this.$router.replace('/about')
      console.log('aboutClick')
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style>
  .active {
    color: #f00;
  }
</style>
