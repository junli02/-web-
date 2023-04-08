<template>
  <div id="main4"></div>
  <!--  <input type="button" value="12" @click="data">-->
</template>


<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  name:"MyContent42",
  setup() {
    onMounted(() => {
      // 获取DOM元素并且进行初始化
      const myChart = echarts.init(document.getElementById('main4'));
      // 创建图标
      myChart.setOption({
        series:[
          {
            type:'pie',
            label: {
              show: true,
              position: 'center'
            },
            data:[
              {value:7,name:'线性代数 70%'},
              {value:3,name: ''}
            ],
            radius:['25%','50%']
          }
        ]
      })
    })
  },
  data(){
    return {
      trData:['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
    }
  },
  methods:{
    data:function (){
    }
  }
}
</script>

<style>
#main4{
  float: left;
  height: 150px;
  width: 150px;
  margin-left: 10px;
}
</style>