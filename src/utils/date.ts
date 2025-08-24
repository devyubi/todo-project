import dayjs from 'dayjs';

// 오늘 / 이번주 / 이번달 범위 값 구함
export const isToday = (date: string) => {
  return dayjs(date).isSame(dayjs(), 'day');
};

export const isThisWeek = (date: string) => {
  return dayjs(date).isSame(dayjs(), 'week');
};

export const isThisMonth = (date: string) => {
  return dayjs(date).isSame(dayjs(), 'month');
};

// D-day 계산
export const getDDay = (dueDate?: string) => {
  if (!dueDate) return null;
  const diff = dayjs(dueDate).diff(dayjs(), 'day');
  if (diff < 0) return `D+${Math.abs(diff)}`; // 마감 지남
  if (diff === 0) return 'D-DAY';
  return `D-${diff}`;
};
