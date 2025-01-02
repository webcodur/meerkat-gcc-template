# Next.js App Router 렌더링 플로우

## 1. 요청 처리 플로우

```ascii
    ┌─────────────────┐
    │   Browser URL   │
    │    Request      │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Root Layout    │
    │  Theme & i18n   │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │ Locale Layout   │
    │  Translation    │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │     Page        │
    │  Components     │
    └─────────────────┘
```

## 2. 단계별 처리 설명

### 미트 레이아웃 단계 (app/layout.tsx)

- HTML lang 속성 설정 (useLocale 훅 사용)
- DaisyUI 테마 설정 (data-theme="light")
- 글로벌 스타일 적용 (globals.css, fonts.css)
- 메타데이터 설정 (title, description)

### 로케일 레이아웃 단계 (app/[locale]/layout.tsx)

```ascii
    ┌───────────────────────┐
    │     Locale Layout     │
    │                       │
    │  ┌─────────────────┐  │
    │  │    Messages     │  │
    │  │   Dictionary    │  │
    │  └─────────────────┘  │
    └───────────────────────┘
```

### 페이지 컴포넌트 단계

```ascii
    ┌─────────────────────────┐
    │      Page Component     │
    │                         │
    │    ┌───────────────┐    │
    │    │  View Comp    │    │
    │    └───────┬───────┘    │
    │            │            │
    │    ┌───────▼───────┐    │
    │    │    UI Comp    │    │
    │    └───────────────┘    │
    └─────────────────────────┘
```

## 3. 컴포넌트 구조

### View 컴포넌트 (components/view/)

- 페이지별 뷰 로직 처리
- 데이터 페칭 및 상태 관리
- UI 컴포넌트 조합

### UI 컴포넌트 (components/ui/)

- MetallicButton
- MetallicCard
- HologramCard
- PaginatedTable

## 4. 데이터 흐름

```ascii
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│     View     │ => │   UI Props   │ => │     UI      │
│  Component   │    │   Transfer   │    │  Component   │
└──────────────┘    └──────────────┘    └──────────────┘
```

## 5. 최시: /ko 접근 시

```ascii
URL: /ko
│
├─► app/layout.tsx
│   └─► 테마 & 글로벌 설정
│
├─► app/[locale]/layout.tsx
│   └─► 한국어 번역 설정
│
└─► page.tsx
    └─► 페이지 컴포넌트
```
