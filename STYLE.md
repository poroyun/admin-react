# Admin UI Style Guide

이 문서는 `admin-react` 프로젝트의 공통 UI 스타일 가이드이다.

UI 스타일링 작업 시 이 문서를 기준으로 하며,
기존 화면과의 시각적 일관성을 유지한다.

스타일링을 이유로 기존 기능 로직이나 컴포넌트 구조를
불필요하게 변경하지 않는다.

## 1. Styling

- Tailwind CSS v4를 사용한다.
- Tailwind utility class를 JSX의 `className`에 직접 사용하는 방식을 우선한다.
- 불필요한 별도 CSS 파일이나 커스텀 클래스를 만들지 않는다.
- arbitrary value는 꼭 필요한 경우에만 사용한다.
- 동일한 역할의 UI에 서로 다른 임의의 spacing/color 값을 반복해서 만들지 않는다.
- Pretendard 폰트는 프로젝트 전역에 이미 적용되어 있으므로 관련 설정을 임의로 변경하지 않는다.
- Tailwind 설정 및 `src/index.css`의 기존 설정을 작업 목적 없이 변경하지 않는다.

## 2. Design Tone

Admin UI의 기본 디자인 톤은 다음과 같다.

- 밝고 깔끔한 사내 Admin UI
- slate 계열을 기본 색상으로 사용
- violet 계열을 포인트 컬러로 사용
- violet 컬러를 과도하게 사용하지 않는다.
- 흰색 카드 UI를 기본으로 사용한다.
- 은은한 border와 shadow를 사용한다.
- 적절한 rounded를 사용한다.
- 과도한 애니메이션이나 장식은 피한다.
- 기존 Login 화면과 시각적 일관성을 유지한다.

## 3. Colors

### Neutral

- 페이지 배경: `slate-50`, `white`
- 기본 텍스트: `slate-900`
- 보조 텍스트: `slate-500`
- Label: `slate-700`
- Border: `slate-200`, `slate-300`

### Primary

프로젝트의 Primary Color는 violet이다.

- Primary: `violet-500`
- Hover: `violet-600`
- Light: `violet-50`, `violet-100`

별도의 Secondary Color는 정의하지 않는다.
보조 UI와 Secondary Action에는 slate 계열의 Neutral Color를 사용한다.

## 4. Page Layout

페이지는 충분한 여백을 두고 콘텐츠를 배치한다.

### Page Title

- `text-2xl` ~ `text-3xl`
- `font-bold`
- `text-slate-900`

### Page Description

- 제목 아래 배치
- `text-sm`
- `text-slate-500`

페이지마다 제목, 설명, 콘텐츠의 배치와 간격을 가능한 한 일관되게 유지한다.

## 5. Card

폼, 테이블 등 주요 콘텐츠는 흰색 카드 안에 배치하는 것을 기본으로 한다.

대표적인 스타일:

- `bg-white`
- `border border-slate-200`
- `rounded-2xl` 또는 `rounded-3xl`
- 부드러운 shadow
- 충분한 내부 padding

기존 Login 화면에서 사용하는 대표적인 디자인 요소:

```text
bg-gradient-to-br from-slate-50 via-white to-violet-50
bg-white
border-slate-200
rounded-3xl
shadow-xl
shadow-violet-100/50
```

단, 모든 카드에 강한 `shadow-xl`을 반복하지 않는다.
화면의 중요도에 따라 border와 subtle shadow를 적절히 사용한다.

## 6. Component Size

Input과 Button은 Small / Medium / Large 크기를 기준으로 사용한다.

| Size | Height | Tailwind |
| --- | --- | --- |
| Small | 32px | `h-8` |
| Medium | 40px | `h-10` |
| Large | 48px | `h-12` |

크기는 화면의 중요도와 사용 위치에 따라 선택한다.
같은 역할의 컴포넌트는 동일한 Size 규격을 유지한다.

### Input

- Small: `h-8`
- Medium: `h-10`
- Large: `h-12`
- 기본 Form Input은 Large(`h-12`)를 사용한다.

### Button

- Small: `h-8`
- Medium: `h-10`
- Large: `h-12`
- 목록 Toolbar 등 작은 액션은 Small을 사용할 수 있다.
- 일반적인 Form Action은 Medium을 기본으로 사용한다.
- Large는 강조가 필요한 주요 액션에 제한적으로 사용한다.

## 7. Form

등록/수정 등 Form UI는 프로젝트 전체에서 동일한 스타일을 유지한다.

### Label

- `text-sm`
- `font-medium` 또는 `font-semibold`
- `text-slate-700`
- Input과 일정한 간격 유지

### Input

기본 방향:

```text
rounded-xl
border border-slate-300
text-slate-900
placeholder:text-slate-300
outline-none
transition
focus:border-violet-500
focus:ring-4
focus:ring-violet-100
```

Input 높이와 padding은 같은 Form 안에서 통일한다.

### Disabled Input

수정할 수 없는 값이라는 것이 시각적으로 명확해야 한다.

기본 방향:

```text
disabled:bg-slate-100
disabled:text-slate-500
disabled:cursor-not-allowed
```

Disabled 상태를 단순히 기능적으로만 막지 않고
사용자가 수정할 수 없는 필드임을 쉽게 인지할 수 있도록 표현한다.

## 8. Buttons

버튼은 역할에 따라 Primary / Secondary 스타일을 구분한다.

### Primary Button

등록, 수정, 저장, 로그인 등 주요 액션에 사용한다.

기본 방향:

```text
bg-violet-500
text-white
font-semibold
rounded-xl
transition-colors
hover:bg-violet-600
cursor-pointer
```

### Secondary Button

취소, 뒤로가기 등 보조 액션에 사용한다.

기본 방향:

```text
bg-white
border border-slate-300
text-slate-700
rounded-xl
hover:bg-slate-50
cursor-pointer
```

Secondary 버튼은 Primary 버튼보다 시각적으로 강하게 표현하지 않는다.

## 9. Table

사용자 목록 등 Table UI는 가능하면 Card 내부에 배치한다.

- Header와 Body를 명확하게 구분한다.
- Header에는 연한 slate 배경을 사용할 수 있다.
- Header 텍스트는 본문보다 약간 강조한다.
- Row 간격은 답답하지 않도록 유지한다.
- 과도한 border 사용은 피한다.
- 데이터 정렬과 column 간격을 일정하게 유지한다.

클릭 가능한 Row:

```text
cursor-pointer
transition-colors
hover:bg-slate-50
```

클릭 가능한 영역임을 자연스럽게 인지할 수 있도록 hover 상태를 제공한다.

## 10. Icons

- 아이콘이 필요한 경우 기존에 설치된 `lucide-react`를 사용한다.
- 새로운 아이콘 라이브러리를 추가하지 않는다.
- 아이콘을 과도하게 사용하지 않는다.
- 단순 장식보다는 정보 전달을 우선한다.
- 기존 프로젝트에서 사용하는 아이콘 스타일과 크기를 가능한 한 유지한다.
- 같은 역할의 아이콘은 화면마다 동일한 아이콘을 사용한다.
- 아이콘과 텍스트를 함께 사용할 경우 적절한 간격을 유지한다.

## 11. Layout Consistency

같은 역할의 UI는 화면마다 동일한 스타일을 사용한다.

예:

- Page title
- Page description
- Card
- Input
- Label
- Primary button
- Secondary button
- Table
- Disabled state

공통 컴포넌트가 존재하면 페이지마다 별도 스타일을 만들지 않고
공통 컴포넌트의 스타일을 재사용한다.

예를 들어 `UserForm`을 등록과 수정 화면에서 함께 사용하는 경우,
각 페이지에서 별도의 Form 스타일을 만들지 않는다.

## 12. Responsive UI

- 기본적으로 mobile-first 방식의 Tailwind breakpoint를 사용한다.
- 작은 화면에서도 콘텐츠가 잘리지 않도록 한다.
- 필요할 경우 `sm:`, `md:`, `lg:` breakpoint를 사용한다.
- breakpoint를 필요 이상으로 많이 사용하지 않는다.
- Table처럼 작은 화면에서 공간이 부족할 수 있는 UI는 overflow를 고려한다.

## 13. Interaction

Hover, Focus, Disabled 등의 상태를 명확하게 표현한다.

- 클릭 가능한 요소에는 `cursor-pointer` 사용
- 버튼에는 자연스러운 hover 상태 제공
- Input에는 focus border/ring 제공
- Disabled 요소에는 disabled 상태 표현
- 과도한 animation이나 transform 효과는 사용하지 않는다.

Interaction은 장식보다 사용자의 행동을 이해시키는 목적으로 사용한다.

## 14. Existing Login Design Reference

기존 Login 화면을 Admin UI의 기본 디자인 레퍼런스로 사용한다.

대표적인 요소:

```text
bg-gradient-to-br from-slate-50 via-white to-violet-50

bg-white
border border-slate-200
rounded-3xl

text-slate-900
text-slate-500
text-slate-700

bg-violet-500
hover:bg-violet-600

focus:border-violet-500
focus:ring-4
focus:ring-violet-100
```

다른 Admin 화면이 Login 화면과 완전히 동일한 레이아웃일 필요는 없지만,
컬러, border, rounded, typography, interaction 등의 시각적 언어는 일관되게 유지한다.

## 15. Important

스타일링 작업 중 다음 기존 로직은 임의로 변경하지 않는다.

- API 호출
- React state
- useEffect
- Redux
- routing
- navigate
- 로그인/세션
- 접근 제어

스타일링을 이유로 기능 구조를 임의로 리팩터링하지 않는다.

새로운 UI 또는 스타일 라이브러리를 임의로 설치하지 않는다.

스타일링 작업 후 기존 기능이 동일하게 동작하는지 확인하고
다음 명령어를 실행한다.

```bash
npm run lint
npm run build
```