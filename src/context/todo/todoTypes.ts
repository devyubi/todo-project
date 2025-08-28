export interface TodoType {
  id: number;
  title: string;
  completed: boolean;

  // 추가 카테고리, Date (dayjs 사용), 즐겨찾기
  category?: string;
  dueDate?: string;
  isFavorite?: boolean;
}
