# JavaScript 이벤트 루프와 실행 순서

## 개요

JavaScript의 이벤트 루프는 비동기 작업을 처리하는 핵심 메커니즘입니다. 이벤트 루프는 여러 개의 큐를 관리하며, 각 큐의 우선순위에 따라 작업을 실행합니다.

## 실행 큐의 종류

### 1. 매크로태스크 큐 (Macrotask Queue)

- 일반적인 이벤트 콜백들이 처리되는 큐
- 우선순위가 가장 낮음
- 대표적인 예:
  - setTimeout
  - setInterval
  - UI 이벤트 (click, scroll 등)
  - requestAnimationFrame

```javascript
setTimeout(() => {
  console.log('매크로태스크 실행');
}, 0);
```

### 2. 마이크로태스크 큐 (Microtask Queue)

- Promise 관련 콜백이 처리되는 큐
- 매크로태스크보다 우선순위가 높음
- 대표적인 예:
  - Promise.then/catch/finally
  - process.nextTick (Node.js)
  - queueMicrotask
  - MutationObserver

```javascript
Promise.resolve().then(() => {
  console.log('마이크로태스크 실행');
});
```

### 3. 렌더링 큐 (Rendering Queue)

- UI 업데이트를 처리하는 큐
- 마이크로태스크 이후, 매크로태스크 이전에 실행
- 브라우저의 화면 갱신과 관련된 작업 처리

## 실행 우선순위

1. 동기 코드 (Call Stack)
2. 마이크로태스크 큐
3. 렌더링 큐
4. 매크로태스크 큐

## 실행 예제

```javascript
console.log('1: 동기 코드 시작');

setTimeout(() => {
  console.log('4: 매크로태스크');
}, 0);

Promise.resolve().then(() => {
  console.log('2: 마이크로태스크');
});

console.log('3: 동기 코드 종료');

// 출력 순서:
// 1: 동기 코드 시작
// 3: 동기 코드 종료
// 2: 마이크로태스크
// 4: 매크로태스크
```

## 실제 활용 사례

### 페이지 로딩 완료 감지

Next.js 애플리케이션에서 페이지 렌더링 완료를 정확하게 감지하기 위해 마이크로태스크를 활용할 수 있습니다:

```typescript
useEffect(() => {
  setIsNavigating(true); // 1. 상태 업데이트 (동기)

  Promise.resolve().then(() => {
    // 3. 마이크로태스크로 실행 (렌더링 완료 후)
    setIsNavigating(false);
    console.log('페이지 로딩 완료');
  });
  // 2. React 렌더링 발생
}, [pathname, searchParams]);
```

이 방식의 장점:

- 렌더링 완료 시점을 정확하게 포착
- 불필요한 지연 없이 즉시 실행
- 렌더링 이후 실행 보장

## 주의사항

1. 마이크로태스크는 매크로태스크보다 항상 먼저 실행됩니다.
2. 마이크로태스크 큐는 비워질 때까지 계속 실행됩니다.
3. 무한 루프나 과도한 마이크로태스크 생성은 성능 저하를 일으킬 수 있습니다.
4. 브라우저는 렌더링을 위해 이벤트 루프의 틈을 필요로 합니다.
