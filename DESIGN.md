# Design System — Portfolio

레퍼런스 이미지 3장을 기반으로 정의한 디자인 규칙.

---

## 1. 컨셉

**Editorial Bold** — 매거진/인쇄물 감성의 타이포그래피 중심 디자인.
거친 텍스처와 강한 컬러 대비, 비대칭 레이아웃으로 개성을 표현한다.

---

## 2. 색상 팔레트

| 역할 | 이름 | HEX | 참고 |
|------|------|-----|------|
| 배경 | Cream | `#EDE8DF` | w2, w3의 오프화이트 |
| 주요 텍스트 | Charcoal | `#1A1A1A` | 전체 공통 |
| 포인트 1 | Navy | `#1A2744` | w2의 진한 네이비 |
| 포인트 2 | Cobalt Blue | `#2B3FBF` | w1의 리소그래프 블루 |
| 강조 | Signal Red | `#E8291C` | w1의 비비드 레드 |
| 보조 | Sage | `#8A9E8E` | w3의 뮤트 그린 |

- 배경은 순백(#FFFFFF) 대신 크림(#EDE8DF)을 기본으로 사용
- 포인트 컬러는 한 섹션에 최대 2가지만 사용
- 텍스트-배경 명도 대비는 항상 4.5:1 이상 확보

---

## 3. 타이포그래피

### 폰트 패밀리

| 용도 | 폰트 | 스타일 |
|------|------|--------|
| 디스플레이 헤딩 | `Bebas Neue` 또는 `Anton` | 굵고 압축된 sans-serif |
| 섹션 헤딩 | `Playfair Display` | Bold, 세리프 |
| 본문 | `Inter` 또는 `DM Sans` | Regular/Medium |
| 레이블/캡션 | `Inter` | Uppercase, 자간 0.1em 이상 |

### 크기 스케일

```
display:  clamp(4rem, 10vw, 9rem)   — Hero 타이틀
h1:       clamp(2.5rem, 5vw, 4rem)
h2:       clamp(1.5rem, 3vw, 2.25rem)
h3:       1.25rem
body:     1rem / line-height 1.6
caption:  0.75rem / uppercase / letter-spacing 0.08em
```

### 규칙

- 헤딩은 항상 **uppercase** 또는 혼용 (w1, w2 참고)
- 디스플레이 텍스트 자간: `-0.02em` ~ `-0.04em` (타이트하게)
- 본문 자간: `0em` (자연스럽게)
- 헤딩과 본문의 크기 비율은 최소 2배 이상 차이

---

## 4. 레이아웃

### 그리드

- 기본 12컬럼 그리드
- 컨테이너 최대 폭: `1280px`
- 좌우 여백(gutter): `clamp(1.5rem, 5vw, 5rem)`
- 섹션 간 수직 여백: `clamp(5rem, 12vw, 10rem)`

### 비대칭 구성 (w1, w2 참고)

- 텍스트 블록이 항상 가운데 정렬되지 않아도 됨
- 헤딩이 이미지 위로 오버랩되는 레이아웃 허용
- 좌측 정렬과 우측 정렬을 섹션마다 교차하여 리듬감 부여

### 섹션 구조 패턴

```
[ 레이블 (uppercase, small) ]
[ 대형 헤딩 (display) ]
[ 본문 또는 콘텐츠 ]
[ 구분선 또는 넘버링 ]
```

---

## 5. 텍스처 & 이펙트

w1의 리소그래프 인쇄 감성을 참고:

- **그레인 텍스처**: 배경 또는 카드에 SVG/CSS 노이즈 필터 적용 (opacity 0.04~0.08)
- **하프톤 효과**: 이미지 오버레이로 인쇄물 느낌 연출 (선택적)
- **컬러 블록**: 단색 사각형을 장식 요소로 사용 (w1의 빨간 사각형 참고)
- **이미지 처리**: 흑백 또는 듀오톤 필터 적용 (w2, w3 참고)

```css
/* 그레인 텍스처 예시 */
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.05;
  pointer-events: none;
}
```

---

## 6. 컴포넌트 규칙

### 버튼

- 기본: 배경 없음, 테두리 2px solid, 대문자 텍스트
- 호버: 배경색 채움 (반전), 트랜지션 0.2s
- 라운딩 없음 (`border-radius: 0`)

### 카드

- 배경: Cream 또는 Navy
- 테두리: 1px solid (컬러는 컨텍스트에 따라)
- 패딩: `2rem`
- 라운딩 없음 또는 최소 (`border-radius: 2px`)
- 호버 시 미세한 translate(-2px, -2px) + box-shadow

### 구분선

- 수평선: `1px solid currentColor`, opacity 0.2
- 섹션 넘버링: `01 / 02 / 03` 형식, caption 스타일

### 네비게이션

- 배경: 투명 → 스크롤 시 Cream/Navy로 전환
- 로고: 디스플레이 폰트, uppercase
- 메뉴: caption 스타일 (uppercase, letter-spacing)

---

## 7. 애니메이션

- **원칙**: 빠르고 절제된 모션. 화려함보다 정확함.
- **기본 easing**: `cubic-bezier(0.25, 0, 0, 1)` (snappy)
- **duration**: 텍스트 페이드 `0.4s`, 요소 슬라이드 `0.6s`
- **스크롤 진입**: 아래에서 위로 `translateY(24px)` → `0`, opacity 0 → 1
- **호버**: `0.15s ~ 0.2s` (빠르게 반응)

---

## 8. 금지 규칙

- 순백(#FFFFFF) 배경 단독 사용 금지 → 크림 계열로 대체
- 그림자(box-shadow) 남용 금지 → 테두리와 컬러 블록으로 대체
- 라운딩(border-radius) 과도 사용 금지 → 각진 형태 유지
- 컬러 3가지 이상 한 섹션에 혼용 금지
- 본문 텍스트에 Bold 이상 굵기 남용 금지
