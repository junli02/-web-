<template>
  <div id="main"></div>
<!--  <input type="button" value="12" @click="data">-->
</template>


<script>
import * as echarts from 'echarts'

import axios from "axios";
import {onMounted} from "vue";
export default {
  name:"MyContent11",
  setup() {
    /*onMounted(() => {
      // 获取DOM元素并且进行初始化
      const myChart = echarts.init(document.getElementById('main'));
      // 创建图标
      myChart.setOption({
        title: {
          //text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
        },
        yAxis: {},
        series: [
          {
            name: "做题数目",
            type: 'bar',
            data: [270,750,990,500,120,510,260,350,760,510,250,380]
          }
        ]
      })
    })*/
    //this.initChart();
  },
  data(){
    return {
      trData:['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月'],
      trData1:['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
    }
  },
 created() {
    this.trData1=['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月'];
   onMounted(() => {
     // 获取DOM元素并且进行初始化
     const myChart = echarts.init(document.getElementById('main'));
     // 创建图标
     myChart.setOption({
       title: {
         //text: 'ECharts 入门示例'
       },
       tooltip: {},
       xAxis: {
         data: ['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
       },
       yAxis: {},
       series: [
         {
           name: "做题数目",
           type: 'bar',
           data:[270,750,990,500,120,510,260,350,760,510,250,380]
         }
       ]
     });
   })
 }
  ,
  methods:{
    initChart:function (){
      const myChart = echarts.init(document.getElementById('main'));
      // 创建图标
      myChart.setOption({
        title: {
          //text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
        },
        yAxis: {},
        series: [
          {
            name: "做题数目",
            type: 'bar',
            data:[270,750,990,500,120,510,260,350,760,510,250,380]
          }
        ]
      });
      axios({
        method:"get",
        url:"getChartData"
      }).then(res=>{
        console.log(res);
        console.log(res.data);
        this.trData1=res.data[0];
        console.log(this.trData1)
      });
      myChart.setOption({

        /*title: {
          //text: 'ECharts 入门示例'
        },*/
        /*tooltip: {},*/
        xAxis: {
          data: ['10月', '11月','12月','01月','02月','03月','04月','05月','06月','07月','08月','09月']
        },
        /*yAxis: {},*/
        series: [
          {
            name: "做题数目",
            type: 'bar',
            data: []
          }
        ]
      })
    }
  }
}
</script>

<style>
#main{
   height: 260px;
   width: 100%;
}
</style>