<script setup>
const message = ref("A1B2c3deFGhijk");
const time = ref(1730427600000);
</script>

<template>
  <div class="container py-3">
    <h2>自訂英文文字大小寫轉換指令</h2>
    <!-- 使用 plugins/textformat.js 建立的指令，將變數 message 的字串帶入 -->

    <!-- 大寫轉小寫格式之後，將結果寫入元素 -->
    <p v-textformat:lowercase="message"></p>
    <!-- 小寫轉大寫格式之後，將結果寫入元素 -->
    <p v-textformat:uppercase="message"></p>

    <h2>自訂時間轉換指令</h2>
    <!-- 使用 plugins/timeformat.js 建立的指令，將變數 time 的時間戳帶入 -->
    <!-- 轉換成 yyyy-mm-dd hh:mm:ss 格式之後將結果寫入元素 -->
    <!-- 1730427600000 => 轉換成 yyyy-mm-dd hh:mm:ss  -->
    <p v-timeformat="time"></p>
  </div>
</template>

<style scoped>
p {
  font-size: 20px;
}
</style>
