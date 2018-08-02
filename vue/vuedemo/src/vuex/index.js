import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//Vue.use的作用其实就是执行一个plugin函数或者执行pluign的install方法进行插件注册，
//并且向plugin或其install方法传入Vue对象作为第一个参数，use的其他参数作为plugin或install的其他参数。
//axios没有install方法所以不需要使用Vue.use
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

export default store