import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import router from './router'
import store from './store'

import 'virtual:svg-icons-register'
import SvgIcon from './components/svgicon/index.vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus, { size: 'small', zIndex: 3000 , locale: zhCn})
app.use(router)
app.use(store)
app.mount('#app')