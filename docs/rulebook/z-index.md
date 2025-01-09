# Z-Index Book

이 문서는 프로젝트에서 사용되는 z-index 값들의 체계적인 관리를 위한 가이드입니다.

## Z-Index 레이어 구조

### `z-0`: 최하단 레이어

- 배경 패턴 (`MetallicPatternVertical`)

### `z-10`: 컨텐츠 위 레이어

- 브레드크럼 (`Breadcrumb`) - 메인 컨텐츠 위에 떠있는 네비게이션

### `z-30`: 모달 오버레이

- 모달 오버레이 (`MetallicModal`)
- 모달 내부 Select (`SettingModal`) - 모달 밖으로 튀어나왔을 때 오버레이 위에 위치하기 위해

### `z-50`: 오버레이 위 배치 대상

- 사이드바 (`Sidebar`)
- 모달 호출 버튼: 언어 (`LanguageButton`)
- 모달 호출 버튼: 설정 (`SettingsButton`)

### `z-[100]`

- 최상위 UI 요소
  - 서브메뉴 (`SubMenu`)
  - 사이드바 토글 버튼 (`SidebarToggle`)
