<!--
 * @Author: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @Date: 2022-08-10 21:45:40
 * @LastEditors: Shawn_Liang 102449877+shawnworld02@users.noreply.github.com
 * @LastEditTime: 2022-08-15 00:10:32
 * @FilePath: /my_blog/src/components/NavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="logo">
      <router-link to="/">
        <img
          class="logo-img"
          src="@/assets/logo.png"
          alt="DevHouse"
        >
      </router-link>
    </div>
    <el-menu-item index="0">
      <router-link
        class="title-link"
        to="/"
      >
        <h1 class="title">
          DEVHOUSE
        </h1>
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <router-link
        class="nav-link"
        to="/"
      >
        首页
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link
        class="nav-link"
        to="/columns"
      >
        专题
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      Story Book
    </el-menu-item>
    <el-menu-item index="4">
      关于
    </el-menu-item>
    <el-button
      v-if="isLogin === false"
      type="primary"
    >
      登录
    </el-button>
    <el-menu-item
      v-else
      index="5"
      @click="drawer = true"
    >
      你好 Shawn Liang!
    </el-menu-item>
  </el-menu>
  <el-drawer
    v-model="drawer"
    title="I am the title"
    :with-header="false"
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 是否登陆的状态
const isLogin = ref(true)

// Drawer展开
const drawer = ref(false)

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
.flex-grow {
  flex-grow: 1;
}
.el-menu{
height: 100px;
justify-content: center;
align-items: center;
}
.logo{
  display: flex;
}
.logo-img{
  width: 80px;
  margin-right: 20px;
  padding: 5px;
}
.title{
font-family: 'Oleo Script Swash Caps', cursive;

}
.nav-link{
  text-decoration: none;
}
.title-link{
text-decoration: none;
}

</style>
