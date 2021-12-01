# a Little Bit!
<img src="https://user-images.githubusercontent.com/65384154/144169812-5be01c47-d854-4642-8d4c-ce395c6cd0f6.png" style="width:500px"/>
스마트폰이 없는 오늘을 상상하기 어려울 만큼,디지털은 이미 우리 삶에서 뗄 수 없는 존재가 되었습니다.<br>
그러나, 이 디지털 사용이 도리어 지구에 악영향을 끼치고 있다면 어떨까요?<br>
<a Little bit!>은 새롭게 대두되고 있는 환경 문제인 디지털 탄소 발자국을 알리기 위해 시작된 프로젝트입니다.<br>
일상 속 디지털 매체를 통해 발생하는 디지털 탄소 발자국에 대한 정보와 사용 습관에 대한 솔루션을 제공합니다.<br>
실제 사이트 오픈 후 약 160명 이상의 사용자가 참여하는 성과를 이루었습니다.<br>
<br>

> 사이트 바로가기: http://alittlebit.kr

## 01. 사용 기술
### [Front-end]
<div><img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=REACT&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JAVASCRIPT&logoColor=white"/></div>
<b>프레임워크: </b>React.js

#### 라이브러리
- recharts.js : 바 그래프 차트 구현을 위해 사용
- react-scroll-motion : 자연스러운 스크롤 모션을 위해 사용
- react-draggable : 지구 드래그 이벤트를 위해 사용

#### 이용 API
- kakao share api : 카카오 공유하기 기능 구현 용도


### [Back-end]
<div><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"></div>
<b>프레임워크: </b>Node.js 및 MongoDB

#### 라이브러리
- cookie-express : 쿠키 저장 및 활용을 위해 사용

### [Deployment]
<div>  
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white"/>
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/>
</div>


## 02. 구현 내용(Main Function)

#### 1.디지털 사용량 테스트(Data Using Test)
디지털 사용량 테스트를 통해 사용자의 디지털 탄소 발자국 배출량을 알려주는 테스트 페이지입니다.a Little bit 프로젝트의 메인 기능입니다.
- useState를 활용해 디지털 사용량 테스트와 테스트를 진행할 때 발생하는 픽셀 인터랙션 기능을 구현하였습니다. 
  1. 배경에 미리 그리드를 설정해놓고, 사용자가 테스트를 진행하며 조절하는 input range의 값에 따라 임의의 위치의 배경 색상이 즉각적으로 변경되는 형태로 구현하였습니다. 
  2. 이 때 임의의 위치는 그리드의 범위 내에서 정수인 난수를 2개 발생시키고,해당 두 수를 각각 row,column의 위치로 지정되도록 하여 랜덤하게 픽셀이 나타나는 듯한 효과를 만들었습니다.
  
- 테스트 결과를 mongoDB에 저장하고 cookie-express 라이브러리를 활용해 쿠키를 통해 저장해둔 사용자의 디지털 탄소 발자국 배출량 테스트 결과를 가져와 보여주는 기능을 구현하였습니다.
- 결과량을 기반으로 결과량과 동일한 수의 아이콘을 출력하고 아이콘이 떨어지는 기능 및 애니메이션 구현
- recharts.js 라이브러리를 이용해 디테일한 결과를 차트로 보여주는 기능 구현
- svg와 useState를 이용해 서비스별로 발생하는 전세계의 디지털 탄소 발자국 발생량을 보여주는 시각화 그래픽을 인터랙션을 통해 확인할 수 있는 기능 구현
- css를 이용해 아이콘이 떨어지는 애니메이션 구현

#### 2.사소하지만 중요한 이야기(Story of a Little Bit)
디지털 탄소 발자국이 어떻게 발생되는지에 대해 설명하는 페이지입니다.
- react-scroll-motion 라이브러리를 이용하여 부드러운 스크롤 애니메이션을 구현하였습니다.

#### 3. 카드 뉴스(Fun facts)
디지털 플랫폼 별 디지털 탄소 발자국 발생량에 대한 이야기를 카드뉴스로 제작해 보여주는 페이지입니다.
- useState를 이용해 모달로 카드뉴스 이미지를 볼 수 있도록 구현하였습니다. 
- 이미지 url을 리스트에 순서대로 저장하여 Pre,Next 버튼 클릭 시 카운팅이 -1 혹은 +1 되며 각 인덱스에 해당하는 이미지를 출력하는 형태로 구현하였습니다.

#### 4. 액션 플랜(Action plans)
디지털 탄소 발자국을 줄이기 위한 행동들을 멸종위기종 동물들을 탄소 픽셀로부터 구하는 인터랙션을 통해 알려주는 페이지입니다.
- useState와 svg의 id를 이용해 각 행동에 해당하는 버튼 클릭 시 미리 지정해놓은 id에 해당하는 픽셀들이 사라지도록 인터랙션을 구현하였습니다.
- useState를 이용해 배경 이미지를 무한 루프로 변경시키는 기능을 구현하였습니다.
- axios를 이용하여 서버에 저장되어있는 사용자의 방문 정보를 가져와 a Little bit 사이트의 몇 번째 이용자인지 보여주는 기능을 구현하였습니다.
- 이를 위해 서버에서는 사용자가 접속할 때 마다 서버의 count 변수를 하나씩 증가시키도록 구현하였습니다.

#### 5. 방명록(Saved Earth - Guestbook)
티켓이라는 매개체를 이용해 사용자의 테스트 기록을 자신의 지구로 남기고, 다른 사람들의 지구를 탐방하며 결과를 공유하는 페이지입니다.
- mongoDB와 Node.js로 이름,위치를 통해 자신의 지구를 검색할 수 있는 기능을 구현했습니다.
- react-draggable 라이브러리를 적용하여 랜덤하게 배치된 지구들을 드래그 앤 드롭할 수 있는 기능을 구현했습니다. 이를 통해 사용자는 마치 지구로 가득찬 우주를 탐험하는 듯한 경험을 할 수 있습니다.
- useState,useEffect,axios,props를 이용하여 지구 모달 기능을 구현했습니다. 
  1. useEffect를 통해 서버에 저장된 기록들을 지구로 렌더링할 때 각 지구에는 고유의 id가 부여됩니다. 
  2. 지구를 클릭 시, 모달의 state가 true로 변경되며 해당 지구를 등록한 사용자의 테스트 결과 내용을 확인할 수 있는 모달이 뜹니다.
  3. 이 때 모달 컴포넌트로 props를 통해 해당 지구의 id를 전달하고, 모달 컴포넌트에서는 props를 통해 받아온 id를 axios를 이용해 서버측으로 전달하여 해당 지구의 정보를 받아와 출력하도록 구현하였습니다. 
  
- cookie-express 라이브러리를 활용하여 쿠키에 사용자의 테스트 데이터를 기록하도록 되어있습니다. 이를 바탕으로 쿠키에 테스트 데이터 기록이 없다면 테스트를 하지 않은 것으로 판단하여, 테스트 전의 티켓 제출을 막고 테스트 안내 메세지를 담은 박스가 티켓 위로 뜨도록 구현하였습니다.

#### 6. 반응형 웹(Responsive Website)
- 액션 플랜을 제외한 모든 페이지는 웹,태블릿,모바일 화면에 반응하여 각 디바이스에 맞는 디자인을 적용하도록 구현하였습니다. 반응형 처리는 css의 미디어쿼리를 이용하여 구현하였습니다.
