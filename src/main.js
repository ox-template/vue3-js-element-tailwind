import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import globalComponents from '@/components/global/register'
import store from 'store/index'
import 'assets/style/index.scss'

let app = createApp(App)
globalComponents(app) // 全局注册组件
app.use(router)
app.use(store)
app.mount('#app')
