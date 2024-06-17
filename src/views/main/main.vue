<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}
.common-layout {
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
.el-container {
  height: 100%;
}
</style>
<template>
  <div class="common-layout">
    <el-container>
      <Aside/>
      <el-container>
        <el-header height="40px">
          <Header/>
        </el-header>
        <Body/>
        <Footer/>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from './main-header.vue';
import Aside from './main-aside.vue';
import Body from './main-body.vue';
import Footer from './main-footer.vue'
</script>

