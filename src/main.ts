/*
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 16:29:38
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-15 00:09:02
 * @FilePath: /my_blog/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import router from './router'

import store from './store'
import App from './App.vue'

import './styles/index.scss'
import 'normalize.css'
import
{
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElTabs,
  ElTabPane,
  ElDrawer
} from 'element-plus'

const app = createApp(App)
app.use(store)
app.use(router)
// element plus

// element plus注册
app.use(ElButton)
app.use(ElContainer)
app.use(ElHeader)
app.use(ElMain)
app.use(ElFooter)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElSubMenu)
app.use(ElTabs)
app.use(ElTabPane)
app.use(ElDrawer)

app.mount('#app')
