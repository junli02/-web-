<template>
  <div class="form">
    <form >
      <span>课程</span> <input class="input1"  v-model="formData.course">
      <span>班级</span> <input class="input1" v-model="formData.class1">
      <span>姓名</span> <input class="input1" v-model="formData.name">
      <input id="in1" type="button" value="提交" @click="getData">
    </form>
  </div>
  <div>
    <table class="tbl">
      <tr class="tr">
        <th class="th">学号</th>
        <th>课程</th>
        <th>班级</th>
        <th>姓名</th>
        <th>性别</th>
        <th>专业</th>
        <th>做题总数</th>
        <th>正确个数</th>
        <th>正确率</th>
      </tr>
      <tr v-for="data in trData" :key="data">
        <td>{{data.studentId}}</td>
        <td>{{data.course.course}}</td>
        <td>{{data.name}}</td>
        <td>{{data.class1}}</td>
        <td>{{data.sex}}</td>
        <td>{{data.major}}</td>
        <td>{{data.course.questionNumber}}</td>
        <td>{{data.course.rightNumber}}</td>
        <td>{{data.course.rightRate}}</td>
      </tr>

    </table>
  </div>
  <div class="page">
    <MyPage @getDataByPage="getDataByPage"></MyPage>
  </div>
</template>

<script>
import MyPage from "@/components/MyPage.vue";
import axios from "axios";

export default {
  name: "MyContent",
  components: {MyPage},
  props:{

  },
  created() {
    /*axios({
      method:"get",
      url: '//getData?page=1&pageSize=2',
    }).then(response =>{
      console.log(response);
      this.trData=response.data;
    })*/
  },
  data(){
    return {
      trData:[
        /*{studentId:1,course:"高级web",class:"大数据一班",sex:"男",major:"大数据",questionNumber:"10",rightNumber:"7",rightRate:"70%"},
        {studentId:2,course:"高级web",class:"大数据一班",sex:"男",major:"大数据",questionNumber:"10",rightNumber:"6",rightRate:"60%"},
        {studentId:3,course:"高级web",class:"大数据一班",sex:"男",major:"大数据",questionNumber:"10",rightNumber:"5",rightRate:"50%"},
        {studentId:4,course:"高级web",class:"大数据一班",sex:"男",major:"大数据",questionNumber:"10",rightNumber:"5",rightRate:"50%"},*/
      ],
      formData:{course:"",class1:"",name:""}
    }
  },
  methods:{
    getData:function (){
      axios({
        method:"post",
        url:'/selectStudent',
        params:this.formData
      }).then(res=>{
        this.trData=res.data.list;
      })
    },
    getDataByPage:function (data){
      this.trData=data;
    }
  }
}
</script>

<style scoped>
span{
  margin-right: 2%;
  margin-left:2%;
}
.input1{
  width: 150px;
  height: 25px;
  margin-top: 2%;
  margin-right: 7%;
  margin-bottom: 5%;
  border-radius: 3px;/*圆角设置*/
}
#in1{
  width: 50px;
  height: 25px;
  background-color: #3333cc;
  color: #d1dff3;
  border-radius: 7px;
}

table{
  width:90%;
  #box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);/* 阴影 */
  border-collapse:collapse;/* 取消表格边框 */
  letter-spacing:1px;/* 文字缩进 */
  margin-bottom: 20px;
}
table,th,tr,td{
  border-bottom:1px solid #dedede;/* 表格横线 */
  padding:20px;
  text-align: center;
}
.page {
  margin-left: 30%;
  margin-top: 2%;
  text-align: center;
  display: inline-block;
}

.page a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

</style>