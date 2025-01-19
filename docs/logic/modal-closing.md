# 모달 닫힘 동작 가이드

## 개요

이 문서는 프로젝트의 모달 컴포넌트(MetallicModal)에서 구현된 닫힘 동작의 표준 패턴을 설명합니다.

## 닫힘 트리거 방식

모달은 다음 세 가지 방식으로 닫을 수 있습니다:

### 1. ESC 키 입력

- `useEffect` 훅을 사용하여 전역 키보드 이벤트 리스너 등록
- ESC 키 입력 시 `onClose` 콜백 호출
- 컴포넌트 언마운트 시 이벤트 리스너 정리

### 2. 모달 외부 영역 클릭

- `MetallicModal` 컴포넌트에서 처리
- 오버레이 영역 클릭 시 `onClose` 콜백 호출

### 3. 닫기 버튼 클릭

- 모달 헤더의 닫기 버튼 클릭 시 `onClose` 콜백 호출

## 구현 예시

```tsx
// ESC 키 이벤트 처리
useEffect(() => {
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  window.addEventListener('keydown', handleEscKey);
  return () => window.removeEventListener('keydown', handleEscKey);
}, [isOpen, onClose]);
```

## 주의사항

### 1. 이벤트 리스너 정리

- 메모리 누수 방지를 위해 반드시 cleanup 함수에서 이벤트 리스너 제거

### 2. 조건부 처리

- `isOpen` 상태가 true일 때만 닫기 동작 실행
- 불필요한 상태 업데이트 방지

### 3. 접근성

- 키보드 접근성 보장 (ESC 키)
- 스크린 리더 사용자를 위한 적절한 ARIA 속성 제공

## 사용 예시

```tsx
<MetallicModal isOpen={isOpen} onClose={onClose} title="모달 제목">
  모달 내용
</MetallicModal>
```
