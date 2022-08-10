/*
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 16:29:38
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-10 17:04:19
 * @FilePath: /my_blog/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    eslintPlugin({
      cache: false
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
