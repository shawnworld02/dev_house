/*
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 17:00:44
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-10 17:21:40
 * @FilePath: /my_blog/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
