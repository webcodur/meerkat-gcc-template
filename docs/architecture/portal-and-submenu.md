# Portal & RenderSubMenu 아키텍처

## 1. Portal 개요

Portal은 React의 `createPortal` API를 사용하여 DOM 계층 구조 외부에 컴포넌트를 렌더링하는 메커니즘입니다.

### 1.1 사용 목적

- CSS `z-index` 제약 해결
- 오버레이/모달 구현
- 스타일 상속 문제 해결
- 이벤트 버블링 제어

### 1.2 주요 특징

```typescript
createPortal(child, container);
```

- `child`: 렌더링할 React 엘리먼트
- `container`: 렌더링 대상 DOM 노드 (일반적으로 document.body)

## 2. RenderSubMenu 아키텍처

### 2.1 구조도

```plaintext
MenuItem
└── renderSubMenu
    ├── Conditional Rendering Logic
    ├── Portal Container
    │   └── SubMenu Container
    │       └── SubMenuItem List
    └── Event Handlers
```

### 2.2 핵심 컴포넌트

#### 2.2.1 렌더링 조건

```typescript
if (!submenu.isOpen || !submenu.position || expandedMenu !== item.title) return null;
```

- `submenu.isOpen`: 서브메뉴 표시 여부
- `submenu.position`: 위치 정보 존재 여부
- `expandedMenu`: 현재 확장된 메뉴 상태

#### 2.2.2 위치 계산

```typescript
style={{
    top: submenu.position.top,
    [dir === 'rtl' ? 'right' : 'left']: submenu.position.start,
}}
```

- 동적 위치 계산
- RTL/LTR 레이아웃 지원

### 2.3 상태 관리

#### 2.3.1 Jotai Atoms

```typescript
const [submenu, setSubmenu] = useAtom(submenuAtom);
const [expandedMenu, setExpandedMenu] = useAtom(expandedMenuAtom);
const [dir] = useAtom(dirAtom);
```

#### 2.3.2 상태 구조

```typescript
interface SubmenuState {
  isOpen: boolean;
  items: MenuItem[];
  position: {
    top: number;
    start: number;
  } | null;
}
```

### 2.4 이벤트 처리

#### 2.4.1 외부 클릭 감지

```typescript
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    // 서브메뉴 외부 클릭 시 닫기 로직
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
```

### 2.5 스타일링 아키텍처

#### 2.5.1 레이어 구조

```plaintext
z-index 계층:
9999: 서브메뉴 (최상위)
1000: 모달
100: 헤더
```

#### 2.5.2 반응형 디자인

- 최소 너비: 200px
- 백드롭 블러 효과
- 반투명 배경
- 그림자 효과

## 3. 성능 최적화

### 3.1 메모이제이션

```typescript
export default memo(MenuItem);
```

### 3.2 조건부 렌더링

- 불필요한 렌더링 방지
- Portal 생성/제거 최적화

## 4. 접근성 (A11y)

### 4.1 키보드 네비게이션

- 방향키 지원 필요
- 포커스 관리
- ARIA 속성 추가 필요

### 4.2 스크린 리더 지원

- 적절한 ARIA 레이블
- 상태 변경 알림

## 5. 향후 개선사항

### 5.1 단기 개선점

- 키보드 네비게이션 구현
- ARIA 속성 추가
- 애니메이션 효과 개선

### 5.2 장기 개선점

- 가상 스크롤링 도입 검토
- 성능 모니터링 도구 통합
- 테스트 커버리지 확대
