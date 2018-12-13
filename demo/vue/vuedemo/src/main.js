// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'
import axios from 'axios'
import store from './vuex/index'
import $ from 'jquery'

Vue.prototype.ajaxUrl = "/boot-pub-survey-video";
Vue.prototype.ajax = axios;

Vue.use(ElementUI);
// http请求拦截器 请求接口添加loading
var loadinginstace = ''
axios.interceptors.request.use(config => {
  console.log(config.url)
if(config.url == '/boot-xcx-survey-api//survey_single/v1/query'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
};
  return config
}, error => {
  ElementUI.Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading

  if (loadinginstace) {
    loadinginstace.close()
    loadinginstace = '';
  }
  if (data.data.rescode == 300) {
    router.push('/')
  }
  return data
}, error => {
  console.log(error)
  ElementUI.Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

/*设置为 false 以阻止 vue 在启动时生成生产提示。*/
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
