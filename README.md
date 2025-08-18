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
  │   └── /todos // Todo 관련 컴포넌트
  │   ├── TodoWrite.tsx
  │   ├── TodoList.tsx
  │   ├── TodoItem.tsx
  │   └── todoTypes.ts
  │ ├── Header.tsx
  │ └── Footer.tsx
  │
  ├── /sections // 각 페이지별 섹션 컴포넌트
  │  └── /todo  // Todo 섹션
  │   ├── TodoReadSection.tsx
  │   ├── TodoWriteSection.tsx
  │   ├── TodoEditSection.tsx
  │   └── TodoDetailSection.tsx
  │
  ├── /pages // 페이지 단위 컴포넌트
  │ ├── MainPage.tsx
  │ └── TodoPage.tsx
  │
  │
  ├── /contexts // Context 관리 (테마, 로그인 등)
  │ └── ThemeContext.tsx
  │
  ├── App.css
  ├── App.tsx
  ├── index.tsx
  └── index.css
```

# 4. 주요 기능

1. **Footer**

   - GitHub, 이메일, SNS 링크

2. **메인 페이지**

   - 소개 섹션
   - 프로젝트 요약

3. **Todo 페이지**

   - TodoWrite: 글 작성
   - TodoList: 작성한 목록 표시
   - TodoItem: 아이템 단위 관리 (완료/수정/삭제)
   - todoTypes.ts: Todo 타입 지정한 파일

4. **Footer**
   - GitHub, 이메일, SNS 링크
