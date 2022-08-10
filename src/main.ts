/*
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 16:29:38
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-10 17:18:16
 * @FilePath: /my_blog/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import router from './router'

import store from './store'
import App from './App.vue'

import './styles/index.scss'
createApp(App).use(router).use(store).mount('#app')
