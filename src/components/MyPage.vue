<template>
  <div class="example-pagination-block">
      <el-pagination
          class="pagiantion"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentPage"
          :page-size="pagination.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="pagination.total">
      </el-pagination>
  </div>
</template>

<style scoped>
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>

<script>
import axios from "axios";

export  default {
  name: "MyPage",
  methods: {
    //分页查询
    getAll() {
      //发送异步请求
      axios.get("/getAllStudentsByPage?pageNum="+this.pagination.currentPage+"&pageSize="+this.pagination.pageSize).then((res)=>{
        console.log(res)
        this.pagination.pageSize = res.data.pageSize;
        this.pagination.currentPage = res.data.pageNum;
        this.pagination.total = res.data.total;
        this.$emit("getDataByPage",res.data.list);
      });
    },
    //分页查询
    //切换页码
    handleCurrentChange(currentPage){
      //修改页码值为当前选中的页码值
      this.pagination.currentPage = currentPage;
      //执行查询
      this.getAll();
    },
  },
  created() {
    this.getAll();
    }
  ,
  data() {
    return {
      pagination: {//分页相关模型数据
        currentPage: 1,//当前页码
        pageSize: 4,//每页显示的记录数
        total: 0,//总记录数
      }
    }
  }

}
</script>