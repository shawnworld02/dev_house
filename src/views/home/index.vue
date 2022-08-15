<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 17:01:31
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-14 23:56:43
 * @FilePath: /my_blog/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home-page">
    <el-tabs
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="推荐"
        name="first"
      >
        <ContentCard />
        <!-- <div class="user-info">
          <img
            src="@/assets/imgs/用户_填充.png"
            alt="头像"
          >
          <div>晚上好<h2>Shawn Liang!</h2></div>
        </div> -->
      </el-tab-pane>
      <el-tab-pane
        label="技术分享"
        name="second"
      >
        技术分享
      </el-tab-pane>
      <el-tab-pane
        label="日常"
        name="third"
      >
        日常
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import ContentCard from '@/components/ContentCard.vue'
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss" scoped>
.home-page{
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-tabs{
  width: 80%;
  position: relative;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #e15f13;
  font-size: 32px;
  font-weight: 600;
}
// .user-info{
//   width: 300px;
//   height: 700px;
//   background-color: #FFFFFF;
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: 0.1);
//   display: flex;
//   img{
//     width: 100px;
//     height: 100px;
//   }
//   flex-direction: column;
//   align-items: center;
//   padding: 30px 0;
// }
</style>
