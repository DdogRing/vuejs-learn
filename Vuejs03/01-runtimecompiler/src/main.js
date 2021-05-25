// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function (createElement) {
    // 1、普通用法：createElement('标签', {标签的属性}, ['内容n'])
    /*return createElement('h2',
      {class: 'box'},
      ['Hello World',
        createElement('button',
          {class: 'button'},
          ['aaa'])
      ]
    )*/

    // 2、传入组件对象
    // return createElement(cpn)
    return createElement(App)
  }
})

// runtime-compiler
// template -> ast -> render -> vdom -> ui

// runtime-only(1、性能更高 2、下面的代码量更少)
// render -> vdom -> ui
