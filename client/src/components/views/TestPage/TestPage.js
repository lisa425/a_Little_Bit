import React,{useState,useRef,useEffect} from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestPage.css';
import {Link} from 'react-router-dom';
//app Icons
import {ReactComponent as Netflix } from '../../../assets/images/appIcons/Netflix/black.svg';
import {ReactComponent as Youtube} from '../../../assets/images/appIcons/Youtube/black.svg';
import {ReactComponent as Facebook } from '../../../assets/images/appIcons/Facebook/black.svg';
import {ReactComponent as Twitter } from '../../../assets/images/appIcons/Twitter/black.svg';
import {ReactComponent as Tiktok } from '../../../assets/images/appIcons/Tiktok/black.svg';
import {ReactComponent as Instagram } from '../../../assets/images/appIcons/Instagram/black.svg';
import {ReactComponent as Kakaotalk } from '../../../assets/images/appIcons/Kakaotalk/black.svg';
import {ReactComponent as Call } from '../../../assets/images/appIcons/Call/black.svg';
import {ReactComponent as Zoom} from '../../../assets/images/appIcons/Zoom/black.svg';
import {ReactComponent as Email } from '../../../assets/images/appIcons/Email/black.svg';
import {ReactComponent as Next } from '../../../assets/images/next.svg';
import {ReactComponent as Before } from '../../../assets/images/before.svg';
import {ReactComponent as NetflixColor } from '../../../assets/images/appIcons/Netflix/color.svg';
import {ReactComponent as YoutubeColor} from '../../../assets/images/appIcons/Youtube/color.svg';
import {ReactComponent as FacebookColor } from '../../../assets/images/appIcons/Facebook/color.svg';
import {ReactComponent as TwitterColor } from '../../../assets/images/appIcons/Twitter/color.svg';
import {ReactComponent as TiktokColor } from '../../../assets/images/appIcons/Tiktok/color.svg';
import {ReactComponent as InstagramColor } from '../../../assets/images/appIcons/Instagram/color.svg';
import {ReactComponent as KakaotalkColor } from '../../../assets/images/appIcons/Kakaotalk/color.svg';
import {ReactComponent as CallColor } from '../../../assets/images/appIcons/Call/color.svg';
import {ReactComponent as ZoomColor} from '../../../assets/images/appIcons/Zoom/color.svg';
import {ReactComponent as EmailColor } from '../../../assets/images/appIcons/Email/color.svg';




const TestPage = () => {
    //다음 페이지로 넘기기
    const [next,setNext] = useState(false);
    const onClickNext = (event) => {
        event.preventDefault();
        setNext(!next);
    }
    const [next2,setNext2] = useState(false);
    const onClickNext2 = (event) => {
        event.preventDefault();
        setNext2(!next2);
    }
    const [doneBtn, setDoneBtn] = useState(false);
    const [finished,setFinished] = useState(false);
    const onClickDone = (event) => {
        event.preventDefault();
        setFinished(!finished);
    }

    //이름 input state 설정
    const [name,setName] = useState("");
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    //위치 input state 설정
    const [location,setLocation] = useState("");
    const onLocationHandler = (event) => {
        setLocation(event.currentTarget.value);
    }

    //test pixel 인터랙션
    const pixelContainer = document.querySelector('#test-pixel-grid-container');
    const DayPixel = (appname,day) => {
        //기존의 state값에 따른 day픽셀을 제거한다.
        const oldDayPixel = document.getElementsByClassName(`day-pixel-${appname}`);
        for(let i=0;i<oldDayPixel.length;i++){
            pixelContainer.removeChild(oldDayPixel[i]);
        }

        //map을 위한 배열 생성
        let DayPixelCounter = [];
        for(let i=0;i<day*4;i++){
            DayPixelCounter.push(i);
        }
        
        //pixel을 dom에 추가
        const renderDayPixel = DayPixelCounter.map((index) => {
            let randomPositionColumn = Math.floor(Math.random()*66-1);
            let randomPositionRow = Math.floor(Math.random()*48-1);
            const DayMosaicPixel = document.createElement('div')
            
            DayMosaicPixel.style.gridColumn=randomPositionColumn;
            DayMosaicPixel.style.gridRow=randomPositionRow;
            DayMosaicPixel.classList.add(`day-pixel-${appname}`);

            pixelContainer.appendChild(DayMosaicPixel);
        })
        return {renderDayPixel}
    }

    const WeekPixel = (appname,week) => {
        //기존의 state값에 따른 week픽셀을 제거한다.
        const oldWeekPixel = document.getElementsByClassName(`week-pixel-${appname}`);
        for(let i=0;i<oldWeekPixel.length;i++){
            pixelContainer.removeChild(oldWeekPixel[i]);
        }

        //map을 위한 배열 생성,1~7의 수는 실제 보이는 픽셀 수가 적어서 한달 기준으로 4를 곱한다.
        let WeekPixelCounter = [];
        for(let i=0;i<(week*4);i++){
            WeekPixelCounter.push(i);
        }
        
        //pixel을 dom에 추가
        const renderWeekPixel = WeekPixelCounter.map((index) => {
            let randomPositionColumn = Math.floor(Math.random()*66-1);
            let randomPositionRow = Math.floor(Math.random()*48-1);
            const WeekMosaicPixel = document.createElement('div')
            
            WeekMosaicPixel.style.gridColumn=randomPositionColumn;
            WeekMosaicPixel.style.gridRow=randomPositionRow;
            WeekMosaicPixel.classList.add(`week-pixel-${appname}`);

            pixelContainer.appendChild(WeekMosaicPixel);
        })
        return {renderWeekPixel}
    }

    const textPixelGrid = useRef();
    const changePixelColor = () => {
        textPixelGrid.current.id = "change-pixel-color";
    }

    
    //앱 list 버튼 state 설정
    const [netflixBtn, setNetflixBtn] = useState(false);
    const [youtubeBtn,setYoutubeBtn] = useState(false);
    const [facebookBtn,setFacebookBtn] = useState(false);
    const [twitterBtn,setTwitterBtn] = useState(false);
    const [tiktokBtn,setTiktokBtn] = useState(false);
    const [instagramBtn,setInstagramBtn] = useState(false);
    const [kakaoTalkBtn,setKakaoTalkBtn] = useState(false);
    const [callBtn,setCallBtn] = useState(false);
    const [zoomBtn,setZoomBtn] = useState(false);
    const [emailBtn,setEmailBtn] = useState(false);

    const onNetflixBtnHandler = (event) => {
        event.preventDefault();
        setNetflixBtn(true);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);

        
    }
    
    const onYoutubeBtnHandler = (event) => {
        event.preventDefault();
        setYoutubeBtn(true);
        setNetflixBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            movePrevListBtn();
        }
    }

    const onFacebookBtnHandler = (event) => {
        event.preventDefault();
        setFacebookBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            movePrevListBtn();
        }
    }
    
    const onTwitterBtnHandler = (event) => {
        event.preventDefault();
        setTwitterBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            movePrevListBtn();
        }
    }
    
    const onTiktokBtnHandler = (event) => {
        event.preventDefault();
        setTiktokBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            movePrevListBtn();
        }
    }
    
    const onInstagramBtnHandler = (event) => {
        event.preventDefault();
        setInstagramBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            moveNextListBtn();
        }
    }
    
    const onKakaoTalkBtnHandler = (event) => {
        event.preventDefault();
        setKakaoTalkBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
        if(isMobile){
            moveNextListBtn();
        }
    }
    
    const onCallBtnHandler = (event) => {
        event.preventDefault();
        setCallBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setZoomBtn(false);
        setEmailBtn(false);
    }
    
    const onZoomBtnHandler = (event) => {
        event.preventDefault();
        setZoomBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setEmailBtn(false);
    }
    
    const onEmailBtnHandler = (event) => {
        event.preventDefault();
        setEmailBtn(true);
        setNetflixBtn(false);
        setYoutubeBtn(false);
        setFacebookBtn(false);
        setTwitterBtn(false);
        setTiktokBtn(false);
        setInstagramBtn(false);
        setKakaoTalkBtn(false);
        setCallBtn(false);
        setZoomBtn(false);
    }


    //앱 list 박스 state 설정
    const [netflixBox,setNetflixBox] = useState(false);
    const [youtubeBox,setYoutubeBox] = useState(false);
    const [facebookBox,setFacebookBox] = useState(false);
    const [twitterBox,setTwitterBox] = useState(false);
    const [tiktokBox,setTiktokBox] = useState(false);
    const [instagramBox,setInstagramBox] = useState(false);
    const [kakaoTalkBox,setKakaoTalkBox] = useState(false);
    const [callBox,setCallBox] = useState(false);
    const [zoomBox,setZoomBox] = useState(false);
    const [emailBox,setEmailBox] = useState(false);

    //netflix box
    const onNetflixBoxHandler = (event) => {
        event.preventDefault();
        setNetflixBox(true);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onNetflixBtnHandler(event);
    }
    //youtube box
    const onYoutubeBoxHandler = (event) => {
        event.preventDefault();
        setYoutubeBox(true);
        setNetflixBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onYoutubeBtnHandler(event);
    }
    //facebook box
    const onFacebookBoxHandler = (event) => {
        event.preventDefault();
        setFacebookBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onFacebookBtnHandler(event);
    }
    //twitter box
    const onTwitterBoxHandler = (event) => {
        event.preventDefault();
        setTwitterBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onTwitterBtnHandler(event);
    }
    //tiktok box
    const onTiktokBoxHandler = (event) => {
        event.preventDefault();
        setTiktokBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onTiktokBtnHandler(event);
    }
    //instagram box
    const onInstagramBoxHandler = (event) => {
        event.preventDefault();
        setInstagramBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onInstagramBtnHandler(event);
    }
    //kakao box
    const onKakaoTalkBoxHandler = (event) => {
        event.preventDefault();
        setKakaoTalkBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setCallBox(false);
        setZoomBox(false);
        setEmailBox(false);
        
        onKakaoTalkBtnHandler(event);
    }
    //call box
    const onCallBoxHandler = (event) => {
        event.preventDefault();
        setCallBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setZoomBox(false);
        setEmailBox(false);

        onCallBtnHandler(event);
    }
    //zoom box
    const onZoomBoxHandler = (event) => {
        event.preventDefault();
        setZoomBox(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setEmailBox(false);

        onZoomBtnHandler(event);
    }
    //email box
    const onEmailBoxHandler = (event) => {
        event.preventDefault();
        setEmailBox(true);
        setDoneBtn(true);
        setNetflixBox(false);
        setYoutubeBox(false);
        setFacebookBox(false);
        setTwitterBox(false);
        setTiktokBox(false);
        setInstagramBox(false);
        setKakaoTalkBox(false);
        setCallBox(false);
        setZoomBox(false);

        onEmailBtnHandler(event);
    }



    //netflix input state 설정
    const [NetflixWeek, setNetflixWeek] = useState(0);
    const [NetflixDay, setNetflixDay] = useState(0);
    const onNetflixWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setNetflixWeek(e.currentTarget.value);
        WeekPixel('netflix',NetflixWeek);
    }
    const onNetflixDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setNetflixDay(e.currentTarget.value);
        DayPixel('netflix',NetflixDay)
    }
    const netflixResult = NetflixWeek * NetflixDay * 100;

    //youtube input state 설정
    const [YoutubeWeek, setYoutubeWeek] = useState(0);
    const [YoutubeDay, setYoutubeDay] = useState(0);
    const onYoutubeWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setYoutubeWeek(e.currentTarget.value);
        WeekPixel('youtube',YoutubeWeek);
    }
    const onYoutubeDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setYoutubeDay(e.currentTarget.value);
        DayPixel('youtube',YoutubeDay)
    }

    const youtubeResult = YoutubeWeek * YoutubeDay * 6;

    //facebook input state 설정
    const [FacebookWeek, setFacebookWeek] = useState(0);
    const [FacebookDay, setFacebookDay] = useState(0);
    const onFacebookWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setFacebookWeek(e.currentTarget.value);
        WeekPixel('facebook',FacebookWeek);
    }
    const onFacebookDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setFacebookDay(e.currentTarget.value);
        DayPixel('facebook',FacebookDay)
    }
    const facebookResult = FacebookWeek * FacebookDay * 1.5;

    //Twitter input state 설정
    const [TwitterWeek, setTwitterWeek] = useState(0);
    const [TwitterDay, setTwitterDay] = useState(0);
    const onTwitterWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setTwitterWeek(e.currentTarget.value);
        WeekPixel('twitter',TwitterWeek);
    }
    const onTwitterDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setTwitterDay(e.currentTarget.value);
        DayPixel('twitter',TwitterDay);
    }
    const twitterResult = TwitterWeek * TwitterDay * 1.2;

    //Tiktok input state 설정
    const [TiktokWeek, setTiktokWeek] = useState(0);
    const [TiktokDay, setTiktokDay] = useState(0);
    const onTiktokWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setTiktokWeek(e.currentTarget.value);
        WeekPixel('tiktok',TiktokWeek);
    }
    const onTiktokDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setTiktokDay(e.currentTarget.value);
        DayPixel('tiktok',TiktokDay);
    }
    const tiktokResult = TiktokWeek * TiktokDay * 6;

    //Instagram input state 설정
    const [InstagramWeek, setInstagramWeek] = useState(0);
    const [InstagramDay, setInstagramDay] = useState(0);
    const onInstagramWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setInstagramWeek(e.currentTarget.value);
        WeekPixel('instagram',InstagramWeek);
    }
    const onInstagramDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setInstagramDay(e.currentTarget.value);
        DayPixel('instagram',InstagramDay)
    }
    const instagramResult = InstagramWeek * InstagramDay * 1.5;

    //KakaoTalk input state 설정
    const [KakaoTalkWeek, setKakaoTalkWeek] = useState(0);
    const [KakaoTalkDay, setKakaoTalkDay] = useState(0);
    const onKakaoTalkWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setKakaoTalkWeek(e.currentTarget.value);
        WeekPixel('kakaotalk',KakaoTalkWeek);
    }
    const onKakaoTalkDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setKakaoTalkDay(e.currentTarget.value);
        DayPixel('kakaotalk',KakaoTalkDay);
    }
    const kakaoTalkResult = KakaoTalkWeek * KakaoTalkDay * 1;

    //Call input state 설정
    const [CallWeek, setCallWeek] = useState(0);
    const [CallDay, setCallDay] = useState(0);
    const onCallWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setCallWeek(e.currentTarget.value);
        WeekPixel('call',CallWeek);
    }
    const onCallDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setCallDay(e.currentTarget.value);
        DayPixel('call',CallDay);
    }
    const callResult = CallWeek * CallDay * 3.6;

    //Zoom input state 설정
    const [ZoomWeek, setZoomWeek] = useState(0);
    const [ZoomDay, setZoomDay] = useState(0);
    const [ZoomOn, setZoomOn] = useState(false);
    const onZoomWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setZoomWeek(e.currentTarget.value);
        WeekPixel('zoom',ZoomWeek);
    }
    const onZoomDayChange = (event) => {
        /*input2의 value를 변화시킨다.*/
        setZoomDay(event.currentTarget.value);
        DayPixel('zoom',ZoomDay);
    }
    const notZoomOn = (e) => {
        e.preventDefault();
        setZoomOn(true);
    }
    const yesZoomOn = (e) => {
        e.preventDefault();
        setZoomOn(false);
        WeekPixel('zoom',ZoomWeek*4);
    }
    let zoomResult;
    if(ZoomOn){
        //카메라를 끈다면
        zoomResult = ZoomWeek * ZoomDay * 8.3 * 0.04;
    }else{
        zoomResult = ZoomWeek * ZoomDay * 8.3;
    }

    //email input state 설정
    const [EmailCount, setEmailCount] = useState(0);
    const [EmailDelete, setEmailDelete] = useState(true);
    const onEmailCountChange = (e) => {
        setEmailCount(e.currentTarget.value);
        WeekPixel('email',(EmailCount/100));
    }
    const notEmailDelete = (e) => {
        e.preventDefault();
        setEmailDelete(false);
        WeekPixel('email',((EmailCount/100)*4));
    }
    const yesEmailDelete = (e) => {
        e.preventDefault();
        setEmailDelete(true);
        WeekPixel('email',(EmailCount/100))
    }
    let emailResult;
    if(EmailDelete){
        emailResult = EmailCount;
    }else{
        //이메일을 주기적으로 지우지 않는다면
        emailResult = EmailCount * 4;
    }

    
    let appResult = parseInt(netflixResult + youtubeResult + facebookResult + twitterResult + tiktokResult + instagramResult + kakaoTalkResult + callResult + zoomResult + emailResult);
    

    //테스트 제출
    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            name: name,
            location: location,
            netflix: netflixResult,
            youtube:youtubeResult,
            facebook:facebookResult,
            twitter:twitterResult,
            tiktok:tiktokResult,
            instagram:instagramResult,
            kakaotalk:kakaoTalkResult,
            call:callResult,
            zoom:zoomResult,
            email:emailResult,
            result:appResult
        }

        Axios.post('/api/test',variables)
        .then(response => {
            if(response.data.success){
                console.log(response.data);
            }else{
                console.log('테스트 실패');
            }
        })

        onClickDone(event);
        setTimeout(function(){
            changePixelColor();
        },1000);
    }

    //모바일 감지 메뉴 구현

    //모바일에서 테스트를 오픈하는 인터랙션
    const ulListBtn = useRef();
    const openTest = () => {
        if(isMobile){
            ulListBtn.current.classList.remove("wrap-list");
        }else return;
    }

    //버튼 리스트 넘어가는 부분을 이동시키는 모션
    const listBtnNetflix = useRef();
    const listBtnYoutube = useRef();
    const listBtnFacebook = useRef();
    const listBtnTwitter = useRef();
    const listBtnTiktok = useRef();
    const listBtnInstagram = useRef();
    const listBtnKakaoTalk = useRef();
    const listBtnCall = useRef();
    const listBtnZoom = useRef();
    const listBtnEmail = useRef();
    const moveNextListBtn = () => {
        listBtnNetflix.current.style.left='-184px';
        listBtnYoutube.current.style.left='-184px';
        listBtnFacebook.current.style.left='-184px';
        listBtnTwitter.current.style.left='-184px';
        listBtnTiktok.current.style.left='-184px';
        listBtnInstagram.current.style.left='-184px';
        listBtnKakaoTalk.current.style.left='-184px';
        listBtnCall.current.style.left='-184px';
        listBtnZoom.current.style.left='-184px';
        listBtnEmail.current.style.left='-184px';
    }
    const movePrevListBtn = () => {
        listBtnNetflix.current.style.left='0vw';
        listBtnYoutube.current.style.left='0vw';
        listBtnFacebook.current.style.left='0vw';
        listBtnTwitter.current.style.left='0vw';
        listBtnTiktok.current.style.left='0vw';
        listBtnInstagram.current.style.left='0vw';
        listBtnKakaoTalk.current.style.left='0vw';
        listBtnCall.current.style.left='0vw';
        listBtnZoom.current.style.left='0vw';
        listBtnEmail.current.style.left='0vw';
    }

    const [isMobile,setIsMobile] = useState(false);
    const detectMobileDevice = () => {
        const minWidth = 500;
        if (window.innerWidth <= minWidth){
            setIsMobile(true)
        }else{
            setIsMobile(false);
        }
    }


    useEffect(()=>{
        detectMobileDevice();
    },[]);

    
 
    return(
        <main className="testpage">
                <div id="test-pixel-grid-container" ref={textPixelGrid}></div>
                <form className="input-contents slider">
                {/* page 1 : 이름 입력 */}
                <div className="content-wrapper">
                    <section className={next ? "next-clicked" : "get-info page-1"} id="get-name">
                        <div className="get-info-input">
                            <p>당신의 이름을 입력하세요.</p>
                            <input className="input-info" type="text" name="name" value={name} onChange={onNameHandler} maxLength='10'/>
                        </div>
                        <button className={next ? "next-clicked" : "submit-to-next"} type="submit" onClick={onClickNext}>next</button>
                    </section>


                {/* page 2 : 지역 입력 */}
                    <section className={next2 ? "next2-clicked" : "get-info page-2"} id="get-location">
                        <div className="get-info-input">
                            <p>지금 계신 위치가 어디신가요?</p>
                            <p className="location-ex">ex)서울,한국/신비한 우리집</p>
                            <input className="input-info" type="text" name="name" value={location} onChange={onLocationHandler} maxLength='50'/>
                            <button className={next2 ? "next2-clicked" : "submit-to-next" } type="submit" onClick={onClickNext2}>next</button>
                        </div>
                    </section>


                {/* page 3 : 사용량 입력 */}
                    <section className={finished? "page3-close" : "get-info"}>
                
                        <div className="get-info-input">
                            <div className="test page-3" id="get-appUseData">
                                <h3>서비스를 클릭해 사용량을 기록해주세요</h3>
                                <ul className="applist-btn wrap-list" ref={ulListBtn} onClick={openTest}>
                                    <li ref={listBtnNetflix} className="move-li">
                                        <button type="button" onClick={onNetflixBoxHandler}>
                                            <Netflix className={netflixBtn ? 'netfilx-color' : 'netflix-black'} onClick={onNetflixBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnYoutube} className="move-li">
                                        <button style={{background:'transparent'}} onClick={onYoutubeBoxHandler}>
                                            <Youtube className={youtubeBtn ? 'youtube-color' : 'youtube-black'} onClick={onYoutubeBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnFacebook} className="move-li">
                                        <button onClick={onFacebookBoxHandler}>
                                            <Facebook className={facebookBtn ? 'facebook-color' : 'facebook-black'} onClick={onFacebookBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnTwitter} className="move-li">
                                        <button onClick={onTwitterBoxHandler}>
                                            <Twitter className={twitterBtn ? 'twitter-color' : 'twitter-black'} onClick={onTwitterBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnTiktok} className="move-li">
                                        <button onClick={onTiktokBoxHandler}>
                                            <Tiktok className={tiktokBtn ? 'tiktok-color' : 'tiktok-black'} onClick={onTiktokBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnInstagram} className="move-li">
                                        <button onClick={onInstagramBoxHandler}>
                                            <Instagram className={instagramBtn ? 'instagram-color' : 'instagram-black'} onClick={onInstagramBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnKakaoTalk} className="move-li">
                                        <button onClick={onKakaoTalkBoxHandler}>
                                            <Kakaotalk className={kakaoTalkBtn ? 'katalk-color' : 'katalk-black'} onClick={onKakaoTalkBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnCall} className="move-li">
                                        <button onClick={onCallBoxHandler}>
                                            <Call className={callBtn ? 'call-color' : 'call-black'} onClick={onCallBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnZoom} className="move-li">
                                        <button onClick={onZoomBoxHandler}>
                                            <Zoom className={zoomBtn ? 'zoom-color' : 'zoom-black'} onClick={onZoomBtnHandler}/>
                                        </button>
                                    </li>
                                    <li ref={listBtnEmail} className="move-li">
                                        <button onClick={onEmailBoxHandler}>
                                            <Email className={emailBtn ? 'email-color' : 'email-black'} onClick={onEmailBtnHandler}/>
                                        </button>
                                    </li>
                                </ul>

                                <div className="test-wrapper">
                                {/* =====Netflix===== */}
                                    <article id="netflix" className={netflixBox ? "index-1" : "test-box"}>
                                        <button className="ctrl-btn before_question" style={{visibility:'hidden'}}><Before/></button>
                                        <div className="test-content">
                                            <div className="app-title">
                                                <NetflixColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Netflix</h5>
                                                    <p>넷플릭스</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">넷플릭스를 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{NetflixWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onNetflixWeekChange} value={NetflixWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">하루에 몇 시간 정도 시청하시나요?</p>
                                                    <div className="value-box">{NetflixDay}시간</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onNetflixDayChange} value={NetflixDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onYoutubeBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onYoutubeBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Youtube ===== */}
                                    <article id="youtube" className={youtubeBox ? "index-2" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onNetflixBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <YoutubeColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Youtube</h5>
                                                    <p>유튜브</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">유튜브를 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{YoutubeWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onYoutubeWeekChange} value={YoutubeWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">하루에 몇 시간 정도 시청하시나요?</p>
                                                    <div className="value-box">{YoutubeDay}시간</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onYoutubeDayChange} value={YoutubeDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onFacebookBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onFacebookBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Facebook ===== */}
                                    <article id="facebook" className={facebookBox ? "index-3" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onYoutubeBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <FacebookColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Facebook</h5>
                                                    <p>페이스북</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">페이스북을 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{FacebookWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onFacebookWeekChange} value={FacebookWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">일주일에 몇 개의 게시물을 올리시나요?</p>
                                                    <div className="value-box">{FacebookDay}개</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onFacebookDayChange} value={FacebookDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onTwitterBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onTwitterBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Twitter ===== */}
                                    <article id="twitter" className={twitterBox ? "index-4" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onFacebookBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <TwitterColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Twitter</h5>
                                                    <p>트위터</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">트위터를 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{TwitterWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onTwitterWeekChange} value={TwitterWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">일주일에 몇 개의 트윗을 올리시나요?</p>
                                                    <div className="value-box">{TwitterDay}개</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onTwitterDayChange} value={TwitterDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onTiktokBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onTiktokBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Tiktok ===== */}
                                    <article id="tiktok" className={tiktokBox ? "index-5" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onTwitterBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <TiktokColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Tiktok</h5>
                                                    <p>틱톡</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">틱톡을 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{TiktokWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onTiktokWeekChange} value={TiktokWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">일주일에 몇 개의 영상을 올리시나요?</p>
                                                    <div className="value-box">{TiktokDay}개</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onTiktokDayChange} value={TiktokDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onInstagramBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onInstagramBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Instagram ===== */}
                                    <article id="instagram" className={instagramBox ? "index-6" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onTiktokBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <InstagramColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Instagram</h5>
                                                    <p>인스타그램</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">인스타그램을 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{InstagramWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onInstagramWeekChange} value={InstagramWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">일주일에 몇 개의 콘텐츠를 업로드하시나요?</p>
                                                    <div className="value-box">{InstagramDay}개</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onInstagramDayChange} value={InstagramDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onKakaoTalkBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onKakaoTalkBoxHandler}>next</button>
                                    </article>


                                    {/* ===== KakaoTalk ===== */}
                                    <article id="kakaotalk" className={kakaoTalkBox ? "index-7" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onInstagramBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <KakaotalkColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>KakaoTalk</h5>
                                                    <p>카카오톡</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">카카오톡을 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{KakaoTalkWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onKakaoTalkWeekChange} value={KakaoTalkWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">하루에 몇 시간 정도 사용하시나요?</p>
                                                    <div className="value-box">{KakaoTalkDay}시간</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onKakaoTalkDayChange} value={KakaoTalkDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onCallBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onCallBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Call ===== */}
                                    <article id="call" className={callBox ? "index-8" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onKakaoTalkBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <CallColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Call</h5>
                                                    <p>전화</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">전화를 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{CallWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onCallWeekChange} value={CallWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">하루에 몇 시간 정도 사용하시나요?</p>
                                                    <div className="value-box">{CallDay}시간</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onCallDayChange} value={CallDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onZoomBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onZoomBoxHandler}>next</button>
                                    </article>


                                    {/* ===== Zoom ===== */}
                                    <article id="zoom" className={zoomBox ? "index-9" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onCallBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <ZoomColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>Zoom</h5>
                                                    <p>줌</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">줌을 일주일에 몇 번 사용하시나요?</p>
                                                    <div className="value-box">{ZoomWeek}번</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="7" onChange={onZoomWeekChange} value={ZoomWeek}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">사용할 때 몇 시간 정도 사용하시나요?</p>
                                                    <div className="value-box">{ZoomDay}시간</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onZoomDayChange} value={ZoomDay}/>
                                            </div>

                                            <div className="question-box zoom-camera">
                                                <div className="qna">
                                                    <p className="question">회의에 접속할 때 카메라를 키는 편인가요?</p>
                                                    <div className="button-answer"> 
                                                        <input className="btn-sm-cyan" name="zoom" type="button" value="예" onClick={yesZoomOn}/>
                                                        <input className="btn-sm-cyan" name="zoom" type="button" value="아니오" onClick={notZoomOn}/>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onEmailBoxHandler}><Next/></button>
                                        <button className="test-next-btn" onClick={onEmailBoxHandler}>next</button>
                                    </article>

                                    {/* ===== Email ===== */}
                                    <article id="email" className={emailBox ? "index-10" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onZoomBoxHandler}><Before/></button>

                                        <div className="test-content">
                                            <div className="app-title">
                                                <EmailColor width="58" height="58"/>
                                                <div className="app-name">
                                                    <h5>E-mail</h5>
                                                    <p>이메일</p>
                                                </div>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p  className="question">현재 메일함에 있는 수는?</p>
                                                    <div className="value-box">{EmailCount}개</div>
                                                </div>
                                                <input id="question1_input" className="test-range-bar" type="range" min="0" max="999" onChange={onEmailCountChange} value={EmailCount}/>
                                            </div>

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">읽은 메일을 평소 지우는 편이신가요?</p>
                                                    <div className="button-answer">
                                                        <input className="btn-sm-green" name="email" type="button" value="예" onClick={yesEmailDelete}/>
                                                        <input className="btn-sm-green" name="email" type="button" value="아니오" onClick={notEmailDelete}/>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" style={{visibility:'hidden'}}><Next/></button>
                                        <button className={doneBtn? "submit-test" : "submit-test-none"} id="submit-test" type="submit" onClick={onSubmit}>done</button>
                                    </article>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className={finished?"before-result" : "before-result-none"}>
                        <Link to="/test/result"><button className="go-result" type="submit">?</button></Link>
                    </section>
                </div>
                </form>
                
        </main>
    );
};

export default TestPage;