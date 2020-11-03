import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

// 声明变量
const state = {
    token: localStorage.getItem('AuthToken') ? localStorage.getItem('AuthToken') : '',
    code: '',
    lang: localStorage.getItem('locale') || 'zh',
    initFlag: true,
}

const store = {
    namespaced: true, // vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
    state,
    getters, //获取数据
    // actions,// 异步操作
    mutations //处理数据
}

export default store