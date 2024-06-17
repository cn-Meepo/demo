<template>
  <el-main>
    <!--    <el-tabs-->
    <!--        v-model="editableTabsValue"-->
    <!--        type="card"-->
    <!--        editable-->
    <!--        class="demo-tabs"-->

    <!--    >-->
    <!--      <el-tab-pane-->
    <!--          v-for="item in store.state.openTabs"-->
    <!--          :key="item.name"-->
    <!--          :label="item.title"-->
    <!--          :name="item.name"-->
    <!--      >-->
    <!--       <RouterView v-if="editableTabsValue == item.name"/>-->
    <!--      </el-tab-pane>-->
    <!--    </el-tabs>-->
    <el-tabs v-model="editableTabsValue" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="首页" name="home">
        <div v-if="editableTabsValue == 'home'">
          <RouterView/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="菜单" name="menu">
        <div v-if="editableTabsValue == 'menu'">
          <RouterView/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="权限" name="permission">
        <div v-if="editableTabsValue == 'permission'">
          <RouterView/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="角色" name="role">
        <div v-if="editableTabsValue == 'role'">
          <RouterView/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import store from '../../store';
import router from "../../router";

const editableTabsValue = ref('home')

// const tabSelectedHandle = (tab: any,va:any) => {
//   debugger
//   console.log(tab)
//   console.log(va)
//   tab = store.state.openTabs.filter((item: { name: any }) => item.name === tab.props.name)[0]
//   if (tab) {
//     router.push({
//       name: tab.name
//     })
//   }
// }
const handleClick = (tab: any, event: Event) => {
  router.push({
    name: tab.props.name
  })
}
</script>

<style scoped>

</style>