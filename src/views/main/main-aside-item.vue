<template>
  <el-sub-menu v-if="menu.children" :index="menu.id">
    <template #title>
      <el-icon>
        <location/>
      </el-icon>
      <span>{{ menu.name }}</span>
    </template>
    <MainAsideItem v-for="(item, menuIndex ) in menu.children" :key="menuIndex" :menu="item"/>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.id" @click="openMenu(menu)">
    <el-icon>
      <location/>
    </el-icon>
    <template #title>
      <span>{{ menu.name }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import {
  Location,

} from '@element-plus/icons-vue'
import store from "../../store";
import {useRouter} from "vue-router";

const router = useRouter();

defineProps<{
  menu: {
    'id': String,
    'name': String,
    'children': []
  }
}>();

const openMenu = (value: any) => {
  let tabList = store.state.openTabs.map((item: any) => item.name)
  if (tabList.indexOf(value.id) === -1) {
    let tab = {
      title: value.name,
      name: value.id,
      canClose: true,
      content: value.name
    }
    store.commit("addOpenTabs", tab);
  }
  store.commit("changeDefaultTab", value.id)
  router.push({name: value.id})
}

</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

.my-logo-div {
  height: 45px;
}

.my-logo {
  height: 40px;
  width: 40px;
  margin-top: 6px;
}

.my-title {
  color: white;
  height: 45px
}

.my-title-div {
  top: 10px;
  font-size: 30px;
}
</style>