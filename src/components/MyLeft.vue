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
        <span> 教师管理系统 </span>
        <hr>
          <el-sub-menu index="1">
            <template #title>{{title[0].name}}</template>
            <el-menu-item index="1-4-1" route="/myContent11" @click="change1(title[0].name , title[0].index1)">{{title[0].index1}}</el-menu-item>
            <el-menu-item index="1-4-2" route="/myContent12" @click="change1(title[0].name , title[0].index2)">{{title[0].index2}}</el-menu-item>
          </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>{{title[1].name}}</template>
          <el-menu-item index="2-4-1" route="/myContent21" @click="change1(title[1].name , title[1].index1)">{{title[1].index1}}</el-menu-item>
          <el-menu-item index="2-4-2" route="/myContent22" @click="change1(title[1].name , title[1].index2)">{{title[1].index2}}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>{{title[2].name}}</template>
          <el-menu-item index="3-4-1" route="/myContent" @click="change1(title[2].name , title[2].index1)">{{title[2].index1}}</el-menu-item>
          <el-menu-item index="3-4-2" route="/myContent1" @click="change1(title[2].name , title[2].index2)">{{title[2].index2}}</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>{{title[3].name}}</template>
          <el-menu-item index="4-4-1" route="/myContent41" @click="change1(title[3].name , title[3].index1)">{{title[3].index1}}</el-menu-item>
          <el-menu-item index="4-4-2" route="/myContent42" @click="change1(title[3].name , title[3].index2)">{{title[3].index2}}</el-menu-item>
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
    change1:function (data,data1){
      //console.log(data+"子类");
      this.$emit('MyChange',data,data1);
    },
    getData:function (){

    }
  },
  data(){
    return {
      title:[{name:"个人信息管理",index1:"个人资料",index2:"我的课程组"},
        {name:"题目管理",index1:"题目列表",index2:"批量导入"},
        {name:"学生管理",index1:"总体数据查看",index2:"详细数据查看"},
        {name:"试卷管理",index1:"试卷列表",index2:"手动生成试卷"}
            ]
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