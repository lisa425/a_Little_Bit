<img src="https://user-images.githubusercontent.com/65384154/135461537-04aa7748-3c71-4288-9ad9-45dc19973925.jpg" style="width:500px"/>

# a Little Bit!
디지털 탄소발자국에 대한 인지와 경각심을 높이는 것을 목적으로 하는 인터랙티브 웹사이트
>http://alittlebit.kr

## 01. Framework
<img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=REACT&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white">


## 02. Main Function

#### 1.Data Using Test
디지털 사용량 테스트를 통해 사용자의 디지털 탄소 발자국 배출량을 알려주는 테스트 페이지.
- useState를 통한 디지털 사용량 테스트와 테스트를 진행할 때 발생하는 픽셀 인터랙션 기능 구현
- 테스트 결과를 mongoDB에 저장하고 cookie-express 라이브러리를 활용해 쿠키를 통해 저장해둔 사용자의 디지털 탄소 발자국 배출량 테스트 결과를 가져와 보여주는 기능 구현
- 결과량을 기반으로 결과량과 동일한 수의 아이콘을 출력하고 아이콘이 떨어지는 기능 및 애니메이션 구현
- recharts.js 라이브러리를 이용해 디테일한 결과를 차트로 보여주는 기능 구현
- svg와 useState를 이용해 서비스별로 발생하는 전세계의 디지털 탄소 발자국 발생량을 보여주는 시각화 그래픽을 인터랙션을 통해 확인할 수 있는 기능 구현
- css를 이용해 아이콘이 떨어지는 애니메이션 구현
- mobile,tab 반응형 구현

#### 2.Story of a Little Bit
디지털 탄소발자국이 어떻게 발생되는지에 대해 설명하는 페이지.
- react-scroll-motion 라이브러리를 이용하여 부드러운 스크롤 애니메이션 구현
- mobile,tab 반응형 구현

#### 3. Fun facts
디지털 플랫폼 별 디지털 탄소 발자국 발생량에 대한 이야기를 카드뉴스로 제작해 보여주는 페이지.
- useState를 이용해 모달로 이미지를 볼 수 있도록 구현
- mobile,tab 반응형 구현

#### 4. Action plans
디지털 탄소 발자국을 줄이기 위한 행동들을 멸종위기종 동물들을 탄소 픽셀로부터 구하는 인터랙션을 통해 알려주는 페이지.
- useState와 svg의 id를 이용해 각 행동에 해당하는 버튼 클릭 시 미리 지정해놓은 id에 해당하는 픽셀들이 사라지는 인터랙션 구현
- useState를 이용해 배경 이미지를 무한 루프로 변경시키는 기능 구현
- 서버에서 저장된 사용자의 방문자 숫자 기록을 가져와 몇번째 이용자인지 보여주는 기능 구현

#### 5. Saved Earth - Guestbook
티켓이라는 매개체를 이용해 사용자의 테스트 기록을 자신의 지구로 남기고, 다른 사람들의 지구를 탐방하며 결과를 공유하는 페이지.
- mongoDB를 이용한 search 기능 구현
- react-draggable 라이브러리를 이용한 지구 드래그 기능 구현
- useState,useEffect,axios,props를 이용한 지구 모달 기능 구현 
- cookie-express 라이브러리를 활용해 쿠키를 이용한 자신의 데이터 기록 세팅 및 테스트 전 티켓 제출을 막는 기능 구현
- mobile,tab 반응형 구현
