@AGENTS.md

# 디자인 작업 지침

모든 UI 작업 전 반드시 `DESIGN.md`를 읽고 아래 규칙을 따른다.

## 필수 준수 사항

### 색상
- CSS 변수(`--cream`, `--navy`, `--cobalt`, `--red`, `--sage`, `--charcoal`, `--muted`)만 사용
- 배경은 반드시 `--cream` (#EDE8DF) 사용. 순백(#fff) 금지
- 한 섹션에 포인트 컬러 최대 2가지

### 타이포그래피
- 디스플레이 헤딩: `var(--font-display)` (Bebas Neue), uppercase, 자간 -0.02em
- 섹션 헤딩: `var(--font-serif)` (Playfair Display), bold
- 본문: `var(--font-sans)` (Inter)
- 레이블/캡션: uppercase, letter-spacing 0.1em 이상

### 형태
- `border-radius` 사용 금지 (버튼, 카드, 태그 모두 각지게)
- `box-shadow` 남용 금지 → border + color block으로 대체
- 호버 카드: `translate(-2px, -2px)` + 최소한의 shadow

### 레이아웃
- 섹션마다 좌/우 정렬 교차하여 리듬 부여
- 섹션 레이블: `01 / 02 / 03` 형식
- 컨테이너 최대 폭: 1280px

### 텍스처
- 배경에 grain 텍스처 (opacity 0.04~0.06) 적용

### 애니메이션
- easing: `cubic-bezier(0.25, 0, 0, 1)`
- 스크롤 진입: translateY(24px) → 0, opacity 0 → 1, duration 0.6s
