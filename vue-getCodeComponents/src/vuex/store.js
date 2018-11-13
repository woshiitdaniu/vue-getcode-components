import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
    // 统一管理接口域名 

const state = {
   //在这里初始化仓库值
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})