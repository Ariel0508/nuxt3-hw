export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp();
  // 避免重複執行
  const { $swal, isHydrating, payload } = useNuxtApp();
  if (
    import.meta.client &&
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered
  ) {
    return;
  }
  // 通過 Cookie 存儲的 Token 判斷用戶是否有有效的登入狀態。
  const token = useCookie("auth");
  if (!token.value) return navigateTo("/login");

  try {
    await $fetch("/user/check", {
      baseURL: "https://nuxr3.zeabur.app/api/v1",
      method: "GET",
      headers: {
        Authorization: token.value,
      },
    });
  } catch (error) {
    token.value = null;
    return navigateTo("/login");
  }
});
