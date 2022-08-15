<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 17:01:31
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-10 22:37:11
 * @FilePath: /my_blog/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout homepage">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <div>
          <h4>DEV_HOUSE ©️Shawn Liang</h4>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
// 引入组件
import NavBar from '@/components/NavBar.vue'
</script>
<style lang="scss" scoped>
.el-footer{
  width: 100%;
  height: 100px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    color: rgba($color: #000000, $alpha: 0.4);
  }
}

</style>
