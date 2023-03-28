<template>
  <el-row class="tac">
    <el-col >
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="blue"
          text-color="white"
          router="router"
          id="el"
      >
        <span >教师管理系统</span>
        <hr>
          <el-sub-menu index="1">
            <template #title>个人信息管理</template>
            <el-menu-item index="1-4-1">个人资料</el-menu-item>
            <el-menu-item index="1-4-1">我的课程组</el-menu-item>
          </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>题目管理</template>
          <el-menu-item index="1-4-1">题目列表</el-menu-item>
          <el-menu-item index="1-4-1">批量导入</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>学生管理</template>
          <el-menu-item index="3-4-1" route="/myContent" @click="change1('总体数据查看')">总体数据查看</el-menu-item>
          <el-menu-item index="3-4-2" route="/myContent1" @click="change1('详细数据查看')">详细数据查看</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>试卷管理</template>
          <el-menu-item index="1-4-1">试卷列表</el-menu-item>
          <el-menu-item index="1-4-1">手动生成试卷</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>


export default {

  name: 'MyLeft',
  props: {

  },
  methods:{
    change1:function (data){
      console.log(data+"子类");
      this.$emit('MyChange',data);
    }
  }
}

</script>


<style scoped>
span{
  margin-left: 10%;
  font-size: 17px;
  text-align: center;
  color: #FFFFFF98;
  border-bottom:  black;
}
a{
  text-decoration: none;/*去掉下划线*/
  color: rgba(255, 255, 255, 0.71);
}

#el{
  border-right: 0;
}

</style>