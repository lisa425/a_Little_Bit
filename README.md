# a Little Bit!
<img src="https://user-images.githubusercontent.com/65384154/144169812-5be01c47-d854-4642-8d4c-ce395c6cd0f6.png" style="width:500px"/>

## 소개
스마트폰이 없는 오늘을 상상하기 어려울 만큼,디지털은 이미 우리 삶에서 뗄 수 없는 존재가 되었습니다.<br>
그러나, 이 디지털 사용이 도리어 지구에 악영향을 끼치고 있다면 어떨까요?<br>
<a Little bit!>은 새롭게 대두되고 있는 환경 문제인 디지털 탄소 발자국을 널리 알리기 위해 시작된 프로젝트입니다.<br>
일상 속 디지털 매체를 통해 발생하는 디지털 탄소 발자국에 대한 정보와 사용 습관에 대한 솔루션을 테스트와 함께 제공합니다.<br>

## 01. 사용 기술
<b>FrontEnd</b> : React.js<br>
<b>BackEnd</b> : Node.js<br>
<b>Deployment</b> : AWS Lightsail, Ubuntu, Nginx<br>
<div><img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=REACT&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JAVASCRIPT&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/></div>
<br>

<br>

## 02. 구현 내용(Main Function)

### 1.디지털 사용량 테스트(Data Using Test)
✅ 디지털 사용량 테스트를 통해 사용자의 디지털 탄소 발자국 배출량을 알려주는 테스트 페이지. a Little bit 프로젝트의 메인 기능.
- 테스트 내 range 바에 반응하여 배경의 픽셀 그래픽 개수가 증가하는 인터랙션 구현
- 사용자의 디지털 탄소 배출량을 계산하는 테스트 알고리즘 구현 및 시각화
- 전세계의 디지털 탄소 배출량을 비교하며 보여주는 시각화 그래픽 인터랙션 구현

### 2.사소하지만 중요한 이야기(Story of a Little Bit)
✅ 스크롤을 따라 디지털 탄소 발자국이 어떻게 발생되는지에 대해 설명하는 페이지
- 스크롤 애니메이션 구현

### 3. 카드 뉴스(Fun facts)
✅ 디지털 플랫폼 별 디지털 탄소 발자국 발생량에 대한 이야기를 담은 카드뉴스를 모달창으로 보여주는 페이지

### 4. 액션 플랜(Action plans)
✅ 디지털 탄소 발자국을 줄이기 위한 행동들을 멸종위기종 동물들을 탄소 픽셀로부터 구하는 인터랙션을 통해 알려주는 페이지
- 액션플랜에 해당하는 버튼 클릭 시 픽셀들이 점차 사라지며 동물 이미지가 나타나는 인터랙션
- 배경 이미지 무한 롤링 기능 구현
- 유저가 사이트의 몇 번째 방문자인지 카운팅하여 노출

### 5. 방명록(Saved Earth - Guestbook)
✅ 티켓이라는 매개체를 이용해 사용자의 테스트 기록을 자신의 지구로 남기고, 다른 사람들의 지구를 탐색하며 결과를 공유하는 페이지
- 이름, 위치 키워드 기반의 기록 검색 기능 구현
- 지구 컴포넌트 드래그 앤 드롭 기능 구현
- 각 사용자의 기록 확인 모달 기능 구현
- 쿠키를 기반으로 사용자의 테스트 여부 체크, 방문 기록이 있는 경우 자신의 기록 노출

### 6. 타이머(Web Timer)
✅ 사이트에 오래 머무르는 행동도 탄소 배출을 야기할 수 있다는 메세지를 전하기 위해 사이트 내에 10분 타이머 추가
- 타이머 기능
- 타이머 종료 시 경고 그래픽 노출

### 7. 반응형 웹(Responsive Website)
✅ 웹,태블릿,모바일 화면에 반응하여 각 디바이스에 맞는 디자인을 적용하도록 구현.(액션 플랜 페이지 제외)

### 8. 카카오톡 공유 기능
✅ kakao share api를 이용하여 카카오톡에 웹사이트를 공유할 수 있는 기능 구현


