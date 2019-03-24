<template>
  <div class="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside style="width: 20%">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}

</script>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  /*line-height: 60px;*/
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}

</style>
