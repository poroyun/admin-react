# Admin React

React + TypeScript 기반의 관리자 페이지 프로젝트입니다.

로그인 및 세션 처리, 사용자 관리, 코드 관리 기능을 구현하며
React의 컴포넌트 구조와 Redux Toolkit을 활용한 상태 관리,
Axios를 활용한 API 통신 구조를 적용합니다.

## Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Axios
- JSON Server
- ESLint
- Prettier

### 예정

- Tailwind CSS

## 주요 기능

### 인증

- 로그인
- 로그인 상태 Redux 관리
- sessionStorage를 이용한 로그인 세션 유지
- 로그아웃
- 비로그인 사용자 Admin 페이지 접근 제어

### 사용자 관리

- 사용자 목록 조회
- 사용자 상세 조회
- 사용자 등록 및 수정

### 코드 관리

- 코드 목록 조회
- 코드 트리
- 코드 상세 조회
- 코드 등록 및 수정

## 프로젝트 구조

```text
src/
├── api/          # API 요청 및 API 관련 설정
├── components/   # 화면 UI 컴포넌트
├── pages/        # 페이지 및 비즈니스 로직
├── store/        # Redux Store 및 Slice
└── types/        # TypeScript 타입 정의
```

## 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. Frontend 실행

```bash
npm run dev
```

개발 서버:

```text
http://localhost:5173
```

### 3. Mock API Server 실행

별도의 터미널에서 실행합니다.

```bash
npm run server
```

Mock API Server:

```text
http://localhost:3000
```

개발 시 Frontend와 Mock API Server를 각각 실행해야 합니다.

## 개발 구조

### Import Alias

`src` 내부의 다른 디렉터리를 참조할 때 `@` alias를 사용합니다.

```tsx
import LoginForm from '@/components/login/LoginForm'
import type { RootState } from '@/store/store'
```

동일 디렉터리 또는 하위 경로는 상대 경로를 사용할 수 있습니다.

```tsx
import { API_BASE_URL } from './apiConfig'
```

### Page / Component

페이지에서는 상태 관리, API 호출, 페이지 이동 등의 로직을 담당하고
화면에 표시되는 UI는 별도의 컴포넌트로 분리합니다.

```text
Login.tsx
   │
   │ props
   ▼
LoginForm.tsx
```

### API

API 요청에 사용되는 타입은 별도의 타입 파일에서 관리합니다.

```text
types/auth.ts
     │
     ▼
api/authApi.ts
```

API 기본 URL은 API 설정 파일에서 관리합니다.

```text
api/apiConfig.ts
```

## 로그인 처리 흐름

```text
Login
  │
  ▼
로그인 API 요청
  │
  ▼
Redux 로그인 상태 저장
  │
  ▼
sessionStorage 사용자 정보 저장
  │
  ▼
Admin 페이지 이동
```

페이지 새로고침 시 `sessionStorage`의 사용자 정보를 이용하여
Redux 로그인 상태를 복원합니다.

## 개발 진행 상태

- [x] React + TypeScript + Vite 개발 환경 구성
- [x] ESLint / Prettier 설정
- [x] React Router 구성
- [x] Redux Toolkit 구성
- [x] Axios 및 Mock API 구성
- [x] 로그인 API 연동
- [x] 로그인 상태 관리
- [x] 로그인 세션 유지
- [x] 로그아웃
- [x] 페이지 접근 제어
- [x] API 타입 및 기본 URL 설정 분리
- [x] Import Alias 설정
- [x] 페이지 UI 컴포넌트 분리
- [ ] Tailwind CSS 적용
- [ ] 캘린더
- [ ] 사용자 관리
- [ ] 코드 관리
- [ ] 전체 기능 테스트 및 코드 정리