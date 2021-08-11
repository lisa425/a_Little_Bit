import React,{useState} from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestPage.css';
import {Link} from 'react-router-dom';
import TestPixel from './TestPixel';
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
    }
    const onNetflixDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setNetflixDay(e.currentTarget.value);
    }
    const netflixResult = NetflixWeek * NetflixDay * 100;

    //youtube input state 설정
    const [YoutubeWeek, setYoutubeWeek] = useState(0);
    const [YoutubeDay, setYoutubeDay] = useState(0);
    const onYoutubeWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setYoutubeWeek(e.currentTarget.value);
    }
    const onYoutubeDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setYoutubeDay(e.currentTarget.value);
    }

    const youtubeResult = YoutubeWeek * YoutubeDay * 6;

    //facebook input state 설정
    const [FacebookWeek, setFacebookWeek] = useState(0);
    const [FacebookDay, setFacebookDay] = useState(0);
    const onFacebookWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setFacebookWeek(e.currentTarget.value);
    }
    const onFacebookDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setFacebookDay(e.currentTarget.value);
    }
    const facebookResult = FacebookWeek * FacebookDay * 1.5;

    //Twitter input state 설정
    const [TwitterWeek, setTwitterWeek] = useState(0);
    const [TwitterDay, setTwitterDay] = useState(0);
    const onTwitterWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setTwitterWeek(e.currentTarget.value);
    }
    const onTwitterDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setTwitterDay(e.currentTarget.value);
    }
    const twitterResult = TwitterWeek * TwitterDay * 1.2;

    //Tiktok input state 설정
    const [TiktokWeek, setTiktokWeek] = useState(0);
    const [TiktokDay, setTiktokDay] = useState(0);
    const onTiktokWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setTiktokWeek(e.currentTarget.value);
    }
    const onTiktokDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setTiktokDay(e.currentTarget.value);
    }
    const tiktokResult = TiktokWeek * TiktokDay * 6;

    //Instagram input state 설정
    const [InstagramWeek, setInstagramWeek] = useState(0);
    const [InstagramDay, setInstagramDay] = useState(0);
    const onInstagramWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setInstagramWeek(e.currentTarget.value);
    }
    const onInstagramDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setInstagramDay(e.currentTarget.value);
    }
    const instagramResult = InstagramWeek * InstagramDay * 1.5;

    //KakaoTalk input state 설정
    const [KakaoTalkWeek, setKakaoTalkWeek] = useState(0);
    const [KakaoTalkDay, setKakaoTalkDay] = useState(0);
    const onKakaoTalkWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setKakaoTalkWeek(e.currentTarget.value);
    }
    const onKakaoTalkDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setKakaoTalkDay(e.currentTarget.value);
    }
    const kakaoTalkResult = KakaoTalkWeek * KakaoTalkDay * 1;

    //Call input state 설정
    const [CallWeek, setCallWeek] = useState(0);
    const [CallDay, setCallDay] = useState(0);
    const onCallWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setCallWeek(e.currentTarget.value);
    }
    const onCallDayChange = (e) => {
        /*input2의 value를 변화시킨다.*/
        setCallDay(e.currentTarget.value);
    }
    const callResult = CallWeek * CallDay * 3.6;

    //Zoom input state 설정
    const [ZoomWeek, setZoomWeek] = useState(0);
    const [ZoomDay, setZoomDay] = useState(0);
    const [ZoomOn, setZoomOn] = useState(false);
    const onZoomWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setZoomWeek(e.currentTarget.value);
    }
    const onZoomDayChange = (event) => {
        /*input2의 value를 변화시킨다.*/
        setZoomDay(event.currentTarget.value);
    }
    const notZoomOn = (e) => {
        e.preventDefault();
        setZoomOn(true);
    }
    const yesZoomOn = (e) => {
        e.preventDefault();
        setZoomOn(false);
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
    }
    const notEmailDelete = (e) => {
        e.preventDefault();
        setEmailDelete(false);
    }
    const yesEmailDelete = (e) => {
        e.preventDefault();
        setEmailDelete(true);
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
                alert('테스트 실패');
            }
        })

        onClickDone(event);
    }
 
    return(
        <main className="testpage">
                <TestPixel/>
                <form className="input-contents slider">
                {/* page 1 : 이름 입력 */}
                <div className="content-wrapper">
                    <section className={next ? "next-clicked" : "get-info page-1"} id="get-name">
                        <div className="get-info-input">
                            <p>당신의 이름을 입력하세요.</p>
                            <input className="input-info" type="text" name="name" value={name} onChange={onNameHandler} />
                        </div>
                        <button className={next ? "next-clicked" : "submit-to-next"} type="submit" onClick={onClickNext}>NEXT</button>
                    </section>


                {/* page 2 : 지역 입력 */}
                    <section className={next2 ? "next2-clicked" : "get-info page-2"} id="get-location">
                        <div className="get-info-input">
                            <p>지금 계신 위치가 어디신가요?</p>
                            <p className="location-ex">ex)서울,한국/신비한 우리집</p>
                            <input className="input-info" type="text" name="name" value={location} onChange={onLocationHandler}/>
                            <button className={next2 ? "next2-clicked" : "submit-to-next" } type="submit" onClick={onClickNext2}>NEXT</button>
                        </div>
                    </section>


                {/* page 3 : 사용량 입력 */}
                    <section className={finished? "page3-close" : "get-info"}>
                
                        <div className="get-info-input">
                            <div className="test page-3" id="get-appUseData">
                                <h3>서비스를 클릭해 사용량을 기록해주세요</h3>
                                <ul className="applist-btn">
                                    <li>
                                        <button type="button" onClick={onNetflixBoxHandler}>
                                            <Netflix className={netflixBtn ? 'netfilx-color' : 'netflix-black'} onClick={onNetflixBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button style={{background:'transparent'}} onClick={onYoutubeBoxHandler}>
                                            <Youtube className={youtubeBtn ? 'youtube-color' : 'youtube-black'} onClick={onYoutubeBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onFacebookBoxHandler}>
                                            <Facebook className={facebookBtn ? 'facebook-color' : 'facebook-black'} onClick={onFacebookBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onTwitterBoxHandler}>
                                            <Twitter className={twitterBtn ? 'twitter-color' : 'twitter-black'} onClick={onTwitterBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onTiktokBoxHandler}>
                                            <Tiktok className={tiktokBtn ? 'tiktok-color' : 'tiktok-black'} onClick={onTiktokBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onInstagramBoxHandler}>
                                            <Instagram className={instagramBtn ? 'instagram-color' : 'instagram-black'} onClick={onInstagramBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onKakaoTalkBoxHandler}>
                                            <Kakaotalk className={kakaoTalkBtn ? 'katalk-color' : 'katalk-black'} onClick={onKakaoTalkBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onCallBoxHandler}>
                                            <Call className={callBtn ? 'call-color' : 'call-black'} onClick={onCallBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={onZoomBoxHandler}>
                                            <Zoom className={zoomBtn ? 'zoom-color' : 'zoom-black'} onClick={onZoomBtnHandler}/>
                                        </button>
                                    </li>
                                    <li>
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
                                                    <p className="question">일주일에 몇 개의 게시물과 스토리를 업로드하시나요?</p>
                                                    <div className="value-box">{InstagramDay}개</div>
                                                </div>
                                                <input id="question2_input" className="test-range-bar" type="range" min="0" max="24" onChange={onInstagramDayChange} value={InstagramDay}/>
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onKakaoTalkBoxHandler}><Next/></button>
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

                                            <div className="question-box">
                                                <div className="qna">
                                                    <p className="question">회의에 접속할 때 카메라를 키는 편인가요?</p>
                                                    <div>
                                                        <input className="btn-sm-cyan" name="zoom" type="button" value="예" onClick={yesZoomOn}/>
                                                        <input className="btn-sm-cyan" name="zoom" type="button" value="아니오" onClick={notZoomOn}/>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" onClick={onEmailBoxHandler}><Next/></button>
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
                                                    <div>
                                                        <input className="btn-sm-green" name="email" type="button" value="예" onClick={yesEmailDelete}/>
                                                        <input className="btn-sm-green" name="email" type="button" value="아니오" onClick={notEmailDelete}/>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" style={{visibility:'hidden'}}><Next/></button>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <button className={doneBtn? "submit-test" : "submit-test-none"} id="submit-test" type="submit" onClick={onSubmit}>DONE</button>
                    </section>
                    <section className={finished?"before-result" : "before-result-none"}>
                        <button className="go-result" type="submit"><Link to="/test/result">?</Link></button>
                    </section>
                </div>
                </form>
                
        </main>
    );
};

export default TestPage;