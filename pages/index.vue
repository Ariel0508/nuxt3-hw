<script setup>
const { $useLoading } = useNuxtApp();
const loadingHandler = $useLoading({
  // options
  color: "#02de84",
  loader: "bars",
  "is-full-page": false
});
function openLoading() {
  // 開啟讀取效果
  const loading = loadingHandler.show()
  setTimeout(() => {
    // 關閉讀取效果
    loading.hide()
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
