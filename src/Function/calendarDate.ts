

export const calendarDate = (nowDate: Date) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  // 요일의 값을 가져옴 ( 달의 시작의 요일, 달의 마지막의 요일 )
  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 1).getDay();

  const result = [];
  const previousMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, previousMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    if(dayLastWeek !== 0){
      result.push(new Date(nowYear, nowMonth + 1, i));
    }
  }
  return result;
};
