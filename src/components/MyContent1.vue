<template>
  <div class="top">
    <div id="top1">
      <div id="div1">
        <span class="p">学生整体正确率</span>
        <select >
          <option>更多</option>
          <option><a href="#">1</a></option>
          <option><a href="#">2</a></option>
        </select>
        <hr>
      </div>
      <div id="div2">
        <span class="p">各个班级做题数目信息</span>
        所属课程:<input id="input1">
        <hr>
      </div>
    </div>
    <div id="bottom1">
      <img src="@/assets/img_2.png" id="img1">
    </div>
  </div>
  <div class="left">
    <div class="top1">
      <span>所属课程:</span><input>
      <span>所属班级:</span><input>
    </div>
    <div class="bottom1">
      <span>做题数目统计</span>
      <img src="@/assets/img_1.png">
    </div>
  </div>
  <div class="right">
    <span id="span3">做题数排名:</span>
    <table>
      <tr>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyContent1"
}
</script>

<style scoped>


.top{
  margin: 0;
  float: top;
  width: 100%;
  height:38%;
  background-color: white;

}
.top div{
  margin: 0;
  height: 100%;
}

.left{
  margin-top: 1%;
  margin-bottom: 0;
  margin-right: 1%;
  float: left;
  width: 49%;
  height: 59%;
  background-color: white;

}

.right{
  margin-top: 1%;
  margin-left: 1%;
  float: right;
  width: 49%;
  height: 59%;
  background-color: white;
}
#top1{
  margin: 0;
  width: 100%;
  height: 20%;
}
#bottom1{
  margin-bottom: 0;
  width: 100%;
  height: 70%;
}
#span3{
  margin-left: 3%;
  margin-top: 10px;
}
#img1{
  margin: 0;
  width: 100%;
  height: 60%;
}
#div1{
  float: left;
  width: 40%;
  margin-right: 5%;
  height: 30%;
}
#div2{
  float: left;
  margin-left: 5%;
  width: 40%;
  height: 30%;
}
span{
  margin-top: 5%;
  margin-left: 4%;
  #height: 5%;
}
select{
  margin-left: 5%;
  margin-top: 0;
  float: right;
  border: none;
}
.p{
  font-size: 18px;
  margin-top: 1%;
  margin-right: 2%;
  #padding-top: 1%;
  margin-left: 2%;


}

#input1{
  margin-top: 1%;
  width: 35%;
  height: 100%;
  margin-left: 4%;
  border-color: #009dff ;
  border-radius: 4px;
}

img{
  margin-top:4%;
  width: 98%;
  height: 100%;
  margin-left: 1%;
  margin-right: 1%;
}

input{
  width: 25%;
  height: 20%;
  margin-top: 5%;
  margin-left: 4%;
  border-color: #009dff ;
  border-radius: 4px;
}
table,th,tr,td{
  margin-top: 0%;
  border-bottom:1px solid rgb(222, 222, 222);/* 表格横线 */
  padding:20px;
  text-align: left;
  width: 100%;
}
</style>