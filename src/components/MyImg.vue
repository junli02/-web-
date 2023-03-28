<template>
  <div class="demo-type">
    <div>
      <el-avatar
          :src="avatarURL"
      />
    </div>
  </div>
</template>


<script>
import img from "@/assets/img.png"
export default {
  name: "MyImg",
  props: {},
  data() {
    return {
      avatarURL: img
    }

  }
}
</script>

<style scoped>
.demo-type {
  margin-top: 1%;
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>
