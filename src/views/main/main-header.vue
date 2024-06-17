<template>
  <el-header class="header" :style="'background-color: ' + color" height="50px">
    <el-row>
      <el-col :span="12">
        <svg-icon v-if="store.state.isCollapse" class-name="zd-open" icon-class="zd-close" @click="openMenu"/>
        <svg-icon v-else class-name="zd-open" icon-class="zd-open" @click="openMenu"/>
       </el-col>
      <el-col :span="12">
        <div class="color-piker" @click="openColor">
          <el-color-picker v-model="color" show-alpha :predefine="predefineColors"
                           @change="colorChange"/>
        </div>
        <el-avatar class="my-avatar" size="default" :src="circleUrl"/>
      </el-col>
    </el-row>
  </el-header>
</template>
<script lang="ts" setup>
const store = useStore();

const openColor = () => {
  const obj = document.querySelector(".el-color-dropdown__link-btn");
  if (obj) {
    obj.className = "el-color-dropdown__link-btn-perform";
  }
}
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');

const color = ref(store.state.color);

const systemColor =  computed(() => {
  return store.state.color;
})
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const openMenu = () => {
  store.commit('changeCollapse', !store.state.isCollapse)
}

const colorChange = () => {
  store.commit('changeColor', color.value)
}
</script>

<style lang="less" >
.color-piker {
  position: absolute;
  top: 15px;
  right: 70px;
}

.open-btn {
  cursor: pointer;
  margin: 15px 0;
}

.my-avatar {
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
}

.el-header {
  --el-header-padding: 0;
}

.header {
  width: 100%;
  text-align: left;
  margin: 0;
}

.zd-open {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 13px 0;
}
</style>