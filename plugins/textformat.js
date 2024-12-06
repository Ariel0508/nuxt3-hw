export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", (el, binding) => {
    const convertTextFormat = {
      // binding.value 傳入給指令的值
      lowercase: binding.value.toLowerCase(),
      uppercase: binding.value.toUpperCase(),
    };
    // arg   => 傳入給指令的參數
    el.innerText = convertTextFormat[binding.arg];
  });
});
