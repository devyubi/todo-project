# yubi's Todo 앱 (개인 프로젝트 TODO)

- 첫 화면
- GitHub 자유롭게
- useState (id, title, completed)
- CRUD (추가, 수정, 삭제, 목록)
- [ { id, title, completed } ]

# 1. 목표

- React + TypeScript 로 Todo 앱 제작
- Todo 페이지로 간단한 기능 페이지 구현 (LocalStorage 저장 → 추후 DB 연동 예정)
- Vercel에 자동 배포 (깃허브 연결)

# 2. 기술 스택

- React + TypeScript
- Tailwind
- react-router-dom
- Context API (Theme, 로그인 등)

※ CRA 로 먼저 코딩 후 추후 Vite 로 수정 ※

# 3. 프로젝트 구조 (아직 만드는 중, 추후 변동될 수 있음)

```text
  /src
  ├── /components // 공통으로 재사용할 컴포넌트
  │  └── /todos // Todo 관련 컴포넌트
  │    ├── TodoItem.tsx
  │    ├── TodoList.tsx
  │    └── TodoWrite.tsx
  │  ├── ConfirmModal.tsx   // 전체 삭제 컴포넌트
  │  ├── StatsPie.tsx   // 파이차트 컴포넌트
  │  ├── Footer.tsx
  │  └── Header.tsx
  │
  ├── /contexts // Context 관리 (테마, 로그인 등)
  │  └── /todo  // Todo 섹션
  │    ├── actions.ts
  │    ├── useTodos.ts
  │    ├── reducer.ts
  │    ├── TodoContext.tsx
  │    ├── TodoProvider.tsx
  │    └── todoTypes.ts
  │  └── ThemeContext.tsx
  │
  ├── /pages // 페이지 단위 컴포넌트
  │  ├── NotFound.tsx   // 404
  │  ├── Settings.tsx   // header에 갖다 붙일 세팅s
  │  └── TodoPage.tsx
  │
  ├── /sections // 각 페이지별 섹션 컴포넌트
  │  └── /todo  // Todo 섹션
  │    ├── TodoReadSection.tsx
  │    ├── TodoWriteSection.tsx
  │    ├── TodoEditSection.tsx
  │    └── TodoDetailSection.
  │
  ├── /utils  // npm 함수들
  │  ├── state.ts  // nivo-pie 차트 계산 함수들
  │  └── date.ts   // dayjs 날짜
  │
  ├── App.css
  ├── App.tsx
  ├── index.tsx
  └── index.css
```

# 4. 주요 기능

1. **Header**
   - 테마

2. **메인 페이지**
   - Todo 화면 출력

3. **Todo 페이지**
   - TodoWrite: 글 작성
   - TodoList: 작성한 목록 표시
   - TodoItem: 아이템 단위 관리 (완료/수정/삭제)
   - todoTypes.ts: Todo 타입 지정한 파일

4. **Footer**
   - GitHub, 이메일, SNS 링크

---

# 사용 라이브러리

- Frame Motion
- Dayjs
- Nivo Chart (Pie 차트 사용)

# 추가 기능 구현

1. 완료율 통계 오늘/이번주/이번달 완료율 (%) 보여주기

- 例: 이번주 할 일 10개 중 7개 완료 → 70%

2. 카테고리/태그 기능 `공부 📚`, `운동 🏃`, `일 💼` 등

3. 마감일(D-day) 알림

- 할 일에 마감일 추가 D-3, D-1 같은 표시
- 마감 지난 할 일은 빨간색 표시

4. 즐겨찾기(중요 표시) ⭐ (즐겨찾기 버튼) 눌러서 중요 Todo를 맨 위에 띄우기

5. 간단한 애니메이션

- 완료 체크 시 "체크 효과"
- 삭제 시 슬라이드 아웃 효과 (과하지 않게)

6. 검색/필터 기능

- 제목이나 태그로 검색
- "완료된 것만 보기" / "미완료만 보기"
