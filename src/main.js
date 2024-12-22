import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(store).use(router).use(Antd)
app.mount('#app')

// 全局使用图标，遍历引入
const icons = Icons
for (const i in icons) {
    app.component(i, icons[i])
}
