<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-text class="mx-1">Default</el-text>
        <select >
          <option>更多</option>
          <option><a href="#">1</a></option>
          <option><a href="#">2</a></option>
        </select>
        <span class="p">各个班级做题数目信息</span>
        所属课程:<input id="input1">
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>


<script>




export default {
  name: "MyContainer",

}
</script>

<style scoped>
  el-header{

  }
  el-main{
    background-color: #00a6ff;
  }


</style>