export const columns = [
  { id: 'id', label: '번호', width: '10%' },
  { id: 'name', label: '작성자', width: '20%' },
  { id: 'title', label: '제목', width: '30%' },
  { id: 'content', label: '내용', width: '40%' },
] as const;

export type ColumnId = (typeof columns)[number]['id'];

export interface Article {
  id: number;
  name: string;
  title: string;
  content: string;
}

export interface PaginationProps {
  theme?: 'dark' | 'light';
}

export type GroupMoveDirection = 'first' | 'prev' | 'next' | 'last';
