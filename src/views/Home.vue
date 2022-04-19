<template>
  <div class="home">
    <el-button @click="test">123</el-button>
    123
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
const test = () => {
  console.log('123123')
  ElMessage('this is a message.')
}
</script>
<style lang="scss" scoped>
.home {
  color: blue;
}
</style>
