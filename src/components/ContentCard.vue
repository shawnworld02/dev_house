<!--
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 22:53:45
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-15 00:06:27
 * @FilePath: /my_blog/src/components/ContentCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row>
    <el-col
      span="3"
      v-for="(o) in 6"
      :key="o"
    >
      <el-card>
        <template #header>
          <img
            class="avatar"
            src="@/assets/imgs/用户_填充.png"
          >
        </template>

        <div>
          <div><h3>这是标题</h3></div>
          <div>这是一段描述，点击卡片即可进入文章</div>
        </div>
        <div>
          <p class="created-date">
            创建时间
          </p>
        </div>
        <template #foot>
          <div>创建时间:</div>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.el-row{
  justify-content: center;
}
.avatar{
  border: 1px solid #efeaea;
}
.el-card{
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
  position: relative;
}
.created-date{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  right: 100px;
  bottom: 10px;
}
</style>
