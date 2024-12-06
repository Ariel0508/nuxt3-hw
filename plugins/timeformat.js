export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    // el：綁定指令的 DOM 元素。binding：指令的參數，包含傳入的值等資訊。
    mounted(el, binding) {
      // binding.value 傳入給指令的值
      const convertTimeFormat = new Date(binding.value)
        .toLocaleString("zh-Hant", {
          hour12: false,
        })
        .replaceAll("/", "-");
      el.innerText = convertTimeFormat;
    },
  });
});
