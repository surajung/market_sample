# Market -> Search&Cart Project
상품 검색&장바구니 구현 프로젝트


## ⚙️ 개발스택
- javascript FW : `React18` + `Next13` + `Typescript`
- 상태관리 : `React-query`, `Zustand`
- Styling : Scss(Sass)
- etc: eslint, prettier
- commit message
  - feat: 기능개발
  - refact: 리팩토링
  - build: 패키지 등 개발관련 설정
  - config: 설정 관련

## 🖥️ 디렉토리 구조 및 주요파일 설명
- components : 공통 폼요소, 컴포넌트
  - Button, Checkbox, Chips, Modal, Spinner, TextInput
  - layout
  - CategorySelect : 카테고리 선택
  - KeywordHightLight : 자동완성 키워드 하이라이트
  - MarketItem : 상품리스트 Item
  - pages : page에서 사용하는 컴포넌트
- hook
  - useItemList : 상품리스트 요청 hook, QuertKey cache
- pages
  - api : dummy json
  - search, cart : service pages
  - index : 컴포넌트 확인용 테스트 페이지
- public
  - fonts : Pretandard fonts
- store
  - item : 장바구니 아이템 store
- styles
  - common : 기본환경 설정
  - components : 컴포넌트 style
  - pages : page style
- utils
  - types : 공통으로 사용할 type
  - constants : 카테고리 code

## 🕰️ 개발 기간
* 23/06/06 ~ 23/06/14

## 📌 페이지 URL&정보
#### 검색화면 - <a href="http://localhost:3000/search">/search</a>
- 검색어 입력
  - 자동완성 - 상품리스트와 연동
- 검색결과 리스트
  - 상품 장바구니 담기
  - 중복 체크
- 필터 Chip
- 상세필터 모달
  - 총 3뎁스 카테고리
#### 장바구니 - <a href="http://localhost:3000/cart">/cart</a>
- 장바구니 리스트
  - 삭제
