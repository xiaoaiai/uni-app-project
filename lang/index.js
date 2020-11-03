import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'
Vue.use(VueI18n)

const messages = {
    enUS,
    zhCN
}

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'enUS',
	messages
})

export default i18n