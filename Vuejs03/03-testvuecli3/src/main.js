import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// createApp的好处 不会共享全局组件 需要用到的组件只需单独注册
/*
new Vue({
    render: h => h(App)
}).$mount('#app')*/

/*
new Vue({
    el: '#app',
    render: h => h(App)
})*/

