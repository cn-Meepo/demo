<template>
  <el-menu
      :default-active="store.state.defaultTab"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened=true
      :background-color="systemColor"
      text-color="#FFFFFF"
      active-text-color="#409eff"
      style="height: 100%"
      :collapse-transition="true">
    <div v-if="isCollapse" class="my-logo-div">
      <img src="@/assets/png/logo.png" class="my-logo" alt="logo"/>
    </div>
    <div class="my-title" v-else>
      <el-row class="my-title-div">
        <el-col :span="24">
          <div class="grid-content ep-bg-purple-dark">MEEPO</div>
        </el-col>
      </el-row>
    </div>
    <MainAsideItem v-for="(menu,menuIndex) in menus" :key="menuIndex" :menu="menu"/>
  </el-menu>
</template>

<script lang="ts" setup>
import MainAsideItem from './main-aside-item.vue'
import store from "../../store";
import { computed } from 'vue'

const isCollapse = computed(() => {
  return store.state.isCollapse;
})



const systemColor =  computed(() => {
  return store.state.color;
})

const menus = computed(() => {
  return store.state.menus;
})

</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

.my-logo-div{
  height: 40px;
}
.my-logo{
  height: 40px;
  width: 40px;
  margin-top: 6px;
}
.my-title{
  color: white;
  height: 40px
}
.my-title-div{
  font-size: 30px;
}
</style>