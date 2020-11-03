import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import splitModule from './modules/splitModules/index'

Vue.use(Vuex)
// 声明变量
const state = {
    token: localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : '',
    code: '',
    lang: localStorage.getItem('locale') || 'zh',
    initFlag: true,
}

const store = new Vuex.Store({
    state,
    getters, //获取数据
    // actions,// 异步操作
    mutations, //处理数据
	modules:{
		splitModule
	}
})

export default store