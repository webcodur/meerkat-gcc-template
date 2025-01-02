import { Article } from '../types'

// 더미 데이터 생성 (100개)
export const articles: Article[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `작성자${index + 1}`,
  title: `제목 ${index + 1}`,
  content: `내용 ${index + 1}입니다. 이것은 테스트를 위한 더미 데이터입니다.`
})) 