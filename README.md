## Stemps-GPT

## Chat GPT API를 활용한 검색 웹

#### 소요 기간 2023.03.26 -> 2023.03.27 (2일)

### Update

```
2023.04.02
업데이트 내용
- "Enter" 버튼으로 검색 가능하도록 기능 추가
- 검색하고자하는 텍스트가 검색버튼을 넘어가는 현상 수정
```

### Deployment Vercel: https://stemps-gpt.vercel.app/

### Technology

- React
- TypeScript
- CSS
  - StyledComponents
- API
  - fetch

### 구현

#### 반응형

```
- Mobile (Iphone 13 pro 기준)
- DeskTop
```

#### Mobile

##### 초기 페이지

<img src="https://user-images.githubusercontent.com/96061695/229357576-14b5119a-c856-48b6-8d0c-d4cec52f6af0.jpg" width="300px" />

##### 로딩 화면

![iShot_2023-04-02_23 06 59](https://user-images.githubusercontent.com/96061695/229358142-505f162b-04e9-43cf-84fa-b4cc498bdc69.gif)

##### 검색 결과

<img src="https://user-images.githubusercontent.com/96061695/229357870-5ddd264a-aaf6-4146-a0a8-e215ba06fdfd.jpg" width="300px" />

#### DeskTop

##### 초기 화면

<img width="994" alt="main" src="https://user-images.githubusercontent.com/96061695/229358613-a795c749-e1fd-46e9-b34e-ec1f96afe086.png">

##### 로딩 화면

![loading](https://user-images.githubusercontent.com/96061695/229358676-8b97b6d7-bcd0-403b-81d9-11851be30005.gif)

##### 검색 결과 데이터 구조

<img width="995" alt="data" src="https://user-images.githubusercontent.com/96061695/229358709-b5c56d93-f043-431a-95d2-b0f6cbbe13fc.png">

##### 스크롤 맨 위로 이동

![scrollTop](https://user-images.githubusercontent.com/96061695/229358744-eadc914d-599d-4635-9092-231a912232d3.gif)

> 구현 및 기능

#### 화면

```
검색 데이터가 0일 경우에만 초기 화면 렌더
```

#### 검색 버튼 클릭

```
- "Enter"로 검색 버튼 클릭 가능
-  input창 빈값으로 초기화
- 검색 버튼 / cursur: pointer -> 로딩 아이콘 / cursur: not-allowed
- API 응답을 기다리는 시간이 사용자 경험에 좋지 않기 때문에 질문을 먼저 렌더하고 GPT 로고
    색 애니메이션으로 로딩중임을 자연스럽게 보여줌
- 응답을 받으면 렌더 됐던 기존 질문과 하나의 객체로 합쳐서 관리
```

#### 스크롤

```
- 스크롤이 맨위가 아니라면 오른쪽 하단에 Top아이콘 생성
- 버튼 클릭 -> 스크롤 맨 위로 부드럽게 이동
```
