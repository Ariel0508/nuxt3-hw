import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
// 加入全域輔助函式
const { Modal, Offcanvas } = bootstrap;

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
        // element：傳入的 DOM 元素，用於初始化 Modal。
        // option：傳入的選項，用於配置 Modal。
      bootstrapModal: (element, option) => new Modal(element, option),
      bootstrapOffcanvas: (element, option) => new Offcanvas(element, option)
    },
  };
});
