# RTL/LTR 스크롤바 구현 가이드

## 개요

본 문서는 웹 애플리케이션에서 RTL(Right-to-Left) 및 LTR(Left-to-Right) 언어를 지원하는 스크롤바 구현 방법을 설명한다. 이 구현은 Next.js와 Tailwind CSS 환경을 기반으로 하며, 크로스 브라우저 호환성을 고려한다.

## 구현 원리

### 기본 개념

스크롤바의 위치 제어는 CSS의 `direction` 속성을 활용한다. RTL 모드에서는 스크롤바가 좌측에, LTR 모드에서는 우측에 위치하게 된다. 이는 다음과 같은 계층 구조로 구현된다:

1. 최상위 컨테이너: direction 속성 제어
2. 내부 컨테이너: 콘텐츠의 방향 재설정
3. 스크롤바 스타일: 모든 방향에서 일관된 디자인 유지

### 핵심 구성요소

#### 1. 전역 스크롤바 스타일 (globals.css)

``` css
/* 공통 스크롤바 스타일 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.5);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(107, 114, 128, 0.7);
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) rgba(0, 0, 0, 0.05);
}

/* RTL 스크롤바 위치 제어 */
[dir="rtl"] .overflow-y-auto {
    direction: rtl;
}

[dir="rtl"] .overflow-y-auto > * {
    direction: ltr;
}
```

#### 2. 메인 콘텐츠 컴포넌트 구조

```tsx
<main dir={dir} className="relative flex-1 w-full transition-all duration-200">
    <div className="absolute inset-0 px-6 overflow-y-auto">
        {children}
    </div>
</main>
```

## 작동 방식

1. **방향 설정**
   - `dir` 속성을 통해 문서의 기본 방향을 설정
   - RTL 모드에서는 `dir="rtl"`, LTR 모드에서는 `dir="ltr"` 적용

2. **스크롤바 위치 제어**
   - RTL 모드: 스크롤바가 좌측에 위치
   - LTR 모드: 스크롤바가 우측에 위치
   - 이는 `direction` CSS 속성을 통해 자동으로 처리됨

3. **콘텐츠 방향 유지**
   - 스크롤바 위치와 관계없이 콘텐츠는 올바른 방향 유지
   - RTL 모드에서도 내부 콘텐츠는 LTR 방향으로 표시 가능

## 주의사항

1. **브라우저 호환성**
   - Firefox: `scrollbar-width`와 `scrollbar-color` 속성 사용
   - Webkit 기반: `::-webkit-scrollbar` 관련 속성 사용
   - 두 가지 방식을 모두 구현하여 크로스 브라우저 지원

2. **레이아웃 고려사항**
   - 스크롤바로 인한 콘텐츠 밀림 현상 방지
   - `overflow-y-auto`를 사용하여 필요한 경우에만 스크롤바 표시

3. **성능 최적화**
   - 불필요한 리렌더링 방지를 위해 방향 전환 시 트랜지션 효과 적용
   - 스크롤 이벤트 최적화를 위한 가상화 고려

## 참고 사항

본 구현은 다음과 같은 기술 스택을 기반으로 한다:

- Next.js (App Router)
- Tailwind CSS
- Jotai (상태 관리)

## 관련 항목

- CSS Writing Mode
- RTL/LTR 레이아웃 시스템
- 웹 접근성 가이드라인
