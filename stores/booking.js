// 建立名稱為 useBookingStore 的 store

export const useBookingStore = defineStore("booking", () => {
  // 訂單資訊的格式
  const bookingResult = ref({});
  // 建立訂單
  // createReservation 該函式用於更新 bookingResult 的值。
  // 它接受一個參數 reservationInfos，將其賦值給 bookingResult.value，從而改變 Store 的狀態。
  const createReservation = (reservationInfos) => {
    bookingResult.value = reservationInfos;
  };
  return {
    bookingResult,
    createReservation
  }
});
