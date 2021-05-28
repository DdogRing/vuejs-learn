import Vue from 'vue'
// 配置路由相关的信息
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home'
import About from '../components/About'

// 1、通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2、创建VueRouter对象
// 3、将router对象传入到Vue实例中
export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  // 更改为history模式 默认为hash
  mode: "history"
})
