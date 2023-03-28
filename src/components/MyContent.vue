<template>
  <div class="form">
    <form>
      <span>课程</span> <input class="input1">
      <span>班级</span> <input class="input1">
      <span>姓名</span> <input class="input1">
      <input id="in1" type="button" value="提交">
    </form>
  </div>
  <div>
    <table class="tbl">
      <tr class="tr">
        <th class="th">学号</th>
        <th>课程</th>
        <th>班级</th>
        <th>性别</th>
        <th>专业</th>
        <th>做题总数</th>
        <th>正确个数</th>
        <th>正确率</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
      </tr>

    </table>
  </div>
  <div class="page">
    <a href="#">></a>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">></a>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props:{
    message:[
      {name:[1,1,1,1,1,1,1]},
      {name1:[1,1,1,1,1,1,1]},
      {name2:[1,1,1,1,1,1,1]},
      {name3:[1,1,1,1,1,1,1]}
    ]
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