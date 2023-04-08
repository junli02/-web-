<template>

  <div class="app">

    <div class="app left">
      <MyLeft  @MyChange="MyChange"></MyLeft>
    </div>

    <div class="app right">
      <div class="app right top">
        <div id="one">
          <MyTop></MyTop>
        </div>

        <div id="two">
          <span id="i1" :content="message1" >{{message1}}</span>   /   <span id="span2" :content="message2" >{{message2}}</span><br>
          <span id="span3" :content="message2">{{message2}}</span>
        </div>

      </div>

      <div class="app right context">
        <div id="iframe"><router-view></router-view></div>
      </div>
    </div>

  </div>

</template>

<script>

import MyLeft from "@/components/MyLeft.vue";
import MyTop from "@/components/MyTop.vue";


export default {
  name: 'App',
  components: {
    MyLeft,
    MyTop,
  },
  props: {

  },
  data(){
    return {
      message1:"学生管理",
      message2:"详细数据查看"
    }
  },
  methods:{
      MyChange:function (data,data1){
        //console.log(data+"父类");
        this.message1=data;
        this.message2=data1;
      }
  }

}
</script>



<style>

.app{
  margin: 0;
  width: 100%;
  height: 100vh;
}
.app.left{
  margin: 0;
  float: left;
  background-color:blue;
  width:10%;
  height: 100%;
}

.app.right{
  float: left;
  width:90%;
  height: 100%;
}

.app.right.top{
  float: top;
  width: 100%;
  height: 15%;

}

#one{

}


.app.right.context{
  margin: 0;
  width: 100%;
  height: 85%;
  background-color: #00a6ff;
}

MyLeft{
  margin: 0;
}

MyTop{
  height: 50%;
}
#iframe{
  display: block;
  width: 96%;
  height: 95%;
  margin-top: 1%;
  margin-left: 2%;
  margin-right: 2%;
  align-content: center;
  background-color: white;
  border :0;
}


</style>
