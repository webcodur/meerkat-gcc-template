# 페이지네이션 로직 설명서

## 핵심 변수 설명

### 1. 페이지네이션 설정 상수

- `ARTICLES_PER_PAGE`: 한 페이지에 표시될 게시글 수
- `VISIBLE_BUTTON_COUNT`: 화면에 표시될 페이지 버튼의 개수

### 2. 페이지 상태 관리

- `activePageNumber`: 현재 활성화된 페이지 번호
- `totalPageCount`: 전체 페이지 수 (= Math.ceil(전체 게시글 수 / ARTICLES_PER_PAGE))

### 3. 게시글 표시 범위

- `firstArticleIndex`: 현재 페이지에서 첫 번째 게시글의 인덱스
- `lastArticleIndex`: 현재 페이지에서 마지막 게시글의 인덱스
- `displayedArticles`: 현재 페이지에 표시될 게시글 배열

### 4. 페이지 버튼 그룹 관리

- `activeButtonGroupIndex`: 현재 활성화된 버튼 그룹의 인덱스
- `totalButtonGroupCount`: 전체 버튼 그룹의 수
- `displayedPageNumbers`: 화면에 표시될 페이지 버튼 번호 배열

## 페이지 이동 로직

### 1. 일반 페이지 이동

- `handlePageChange`: 특정 페이지 번호로 직접 이동
  - 파라미터: `targetPageNumber` (이동할 페이지 번호)

### 2. 그룹 단위 이동

- `handleGroupMove`: 페이지 그룹 단위로 이동
  - 파라미터: `direction` ('first' | 'prev' | 'next' | 'last')

#### 이동 방향별 동작

1. `first`: 첫 페이지(1)로 이동
2. `prev`: 이전 그룹의 첫 페이지로 이동
   - `previousGroupFirstPage` = max(((activeButtonGroupIndex - 2) \* VISIBLE_BUTTON_COUNT) + 1, 1)
3. `next`: 다음 그룹의 첫 페이지로 이동
   - `nextGroupFirstPage` = min(activeButtonGroupIndex \* VISIBLE_BUTTON_COUNT + 1, totalPageCount)
4. `last`: 마지막 그룹의 첫 페이지로 이동
   - `lastGroupFirstPage` = (totalButtonGroupCount - 1) \* VISIBLE_BUTTON_COUNT + 1

## 예시

### 페이지 표시 예시

```plaintext
총 게시글: 100개
ARTICLES_PER_PAGE: 10
totalPageCount: 10페이지

현재 activePageNumber가 3일 때:
- firstArticleIndex: 21
- lastArticleIndex: 30
- displayedArticles: [21번째 ~ 30번째 게시글]
```

### 버튼 그룹 표시 예시

```plaintext
VISIBLE_BUTTON_COUNT: 5
totalButtonGroupCount: 2

첫 번째 그룹 (activeButtonGroupIndex: 1)
displayedPageNumbers: [1, 2, 3, 4, 5]

두 번째 그룹 (activeButtonGroupIndex: 2)
displayedPageNumbers: [6, 7, 8, 9, 10]
```
