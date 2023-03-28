<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作台</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <MyImg></MyImg>
  </el-menu>

</template>

<script>
import MyImg from "@/components/MyImg.vue";

export default {
  name: 'MyTop',
  components: {MyImg},
  props: {

  }
}
</script>

<style>
.el-menu-demo{

}
MyImg{
    margin-left: 90%;
}

.flex-grow {
  flex-grow: 1;
}
</style>
