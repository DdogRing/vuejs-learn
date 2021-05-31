import Vue from 'vue'
// 配置路由相关的信息
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

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
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          name: 'HomeNews',
          component: HomeNews
        },
        {
          path: 'message',
          name: 'HomeMessage',
          component: HomeMessage
        }
      ],
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 更改为history模式 默认为hash
  mode: "history",
  linkActiveClass: 'active'
})
