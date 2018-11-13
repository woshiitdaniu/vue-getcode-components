import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import Mui from 'vue-awesome-mui'
import VueI18n from 'vue-i18n'
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//技巧 同时 use 多个插件 被依赖的插件应放在偏后方
Vue.use(VueAxios, axios, vuex,Mui)
Vue.use(VueI18n)
Vue.config.productionTip = false //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐

FastClick.attach(document.body)

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh',  // 语言标识
    messages: {
        'zh': require('./assets/i18n/zh'),
        'en': require('./assets/i18n/en')
    }
})


new Vue({
        el: '#app',
        router,
        store,
        i18n,
        render: h => h(App)
    })
    // 运行 vue init webpack命令新建项目时 可以选择关闭 ESLint
    // 若新建项目时开启了 ESLint .eslintignore 文件，告诉 ESLint 去忽略特定的文件和目录。
    // .eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测