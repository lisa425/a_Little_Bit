import React,{ useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import registerUser from '../../../_actions/user_action';
import '../../../css/TestPage/TestPage.css';
import InputName from './inputUserData/InputName'
import NavBar from '../Navbar/Navbar';
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

//앱별 질문 저장 객체
const appList = {
    1: {   
        "name" : "Nexflix",
        "namekr" : "넷플릭스",
        "question1" : "넷플릭스를 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 한번 볼 때 몇 시간 정도 시청하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 100 
    },
    2: {
        "name" : "Youtube",
        "namekr" : "유튜브",
        "question1" : "유튜브를 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 한번 볼 때 몇 시간 정도 시청하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 6 
    },
    3: {
        "name" : "Facebook",
        "namekr" : "페이스북",
        "question1" : "페이스북을 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 하루에 몇 시간 정도 사용하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 1.5
    },
    4: {
        "name" : "Twitter",
        "namekr" : "트위터",
        "question1" : "트위터를 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 하루에 몇 시간 정도 사용하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 1.2
    },
    5: {
        "name" : "Tiktok",
        "namekr" : "틱톡",
        "question1" : "틱톡을 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 하루에 몇 시간 정도의 틱톡 영상을 보시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 6
    },
    6: {
        "name" : "Instagram",
        "namekr" : "인스타그램",
        "question1" : "인스타그램을 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 하루에 몇 시간 정도 사용 하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 1.5
    },
    7: {
        "name" : "KakaoTalk",
        "namekr" : "카카오톡",
        "question1" : "카카오톡을 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 경우 하루에 몇 시간 정도 사용하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 30
    },
    8: {
        "name" : "Call",
        "namekr" : "전화",
        "question1" : "전화를 일주일에 몇 번 사용하시나요?",
        "question2" : "건당 몇 분 정도 사용하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 3.6
    },
    9: {
        "name" : "Zoom",
        "namekr" : "줌",
        "question1" : "줌을 일주일에 몇 번 사용하시나요?",
        "question2" : "사용할 때 몇 분 정도 사용하시나요?",
        "week" : 0,
        "day" : 0,
        "carbon" : 8.3
    },
    10: {
        "name" : "E-mail",
        "namekr" : "이메일",
        "question1" : "이메일을 일주일에 몇 번 사용하시나요?",
        "question2" : "읽은 메일을 평소에 지우시는 편인가요?",
        "week" : 0,
        "day" : 0,
        "delete" : false,
        "carbon" : 4
    }
}

const TestPage = (props) => {

    let num = 1;

    //app list state
    const [netflixBox,setNetflixBox] = useState(false);
    const onNetflixBoxHandler = (event) => {
        setNetflixBox(true);
        if(netflixBox === true){
            //netflix box display:flex
            //setYoutubeBox(false)
            //setFacebookBox(false)
            //setTwitterBox(false)
            //setTiktokBox(false)
            //setInstagramBox(false)
            //setKakaoTalkBox(false)
            //setCallBox(false)
            //setZoomBox(false)
            //setEmailBox(false)
        }

    }

    const [youtubeBox,setYoutubeBox] = useState(false);
    const [facebookBox,setFacebookBox] = useState(false);
    const [twitterBox,setTwitterBox] = useState(false);
    const [tiktokBox,setTiktokBox] = useState(false);
    const [instagramBox,setInstagramBox] = useState(false);
    const [kakaoTalkBox,setKakaoTalkBox] = useState(false);
    const [callBox,setCallBox] = useState(false);
    const [zoomBox,setZoomBox] = useState(false);
    const [emailBox,setEmailBox] = useState(false);


    //이름 input state 설정
    const [name,setName] = useState("");
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    //위치 input state 설정
    const [location,setLocation] = useState("");
    const onLocationHandler = (event) => {
        setLocation(event.currentTarget.value)
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
    const netflixResult = NetflixWeek * NetflixDay;

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

    const youtubeResult = YoutubeWeek * YoutubeDay;

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
    const facebookResult = FacebookWeek * FacebookDay;

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
    const twitterResult = TwitterWeek * TwitterDay;

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
    const tiktokResult = TiktokWeek * TiktokDay;

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
    const instagramResult = InstagramWeek * InstagramDay;

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
    const kakaoTalkResult = KakaoTalkWeek * KakaoTalkDay;

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
    const callResult = CallWeek * CallDay;

    //Zoom input state 설정
    const [ZoomWeek, setZoomWeek] = useState(0);
    const [ZoomDay, setZoomDay] = useState(0);
    const onZoomWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setZoomWeek(e.currentTarget.value);
    }
    const onZoomDayChange = (event) => {
        /*input2의 value를 변화시킨다.*/
        setZoomDay(event.currentTarget.value);
    }
    const zoomResult = ZoomWeek * ZoomDay;

    //email input state 설정
    const [EmailCount, setEmailCount] = useState(0);
    const onEmailCountChange = (e) => {
        setEmailCount(e.currentTarget.value);
    }
    const emailResult = () => {
        //if emaildelete === false return EmailCount*4
        //else return EmailCount
    }


    //location 페이지 open
    const showLocation = (event) => {
        event.preventDefault();
        this.props.display = "none"
        //일단 display.none을 제거
        const nextQuestion = document.querySelector("#get-location")
    }

    //app 사용량 테스트 페이지 open
    const showAppUseData = event => {

    }


    //app 버튼 클릭 시 색상 변경
    const onclickevent = (event) => {
        event.currentTarget.fill = "green";
    }

    const appResult = () => {
        let result = netflixResult + youtubeResult + facebookResult + twitterResult + tiktokResult + instagramResult + kakaoTalkResult + callResult + zoomResult + emailResult;
        return result;
    } 

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
            tictok:tiktokResult,
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
                // setTimeout(()=>{
                //     props.history.push('/test/result');
                // },4000)
            }else{
                alert('테스트 실패');
            }
        })
    }

    //test가 끝나면 결과 페이지로 지금 입력한 정보들을 객체로 만들어서 전달
    //결과페이지는 (props)를 받아서 props.result, props.netflix 이런식으로 접근하자!
 
    return(
        <div className="testpage">
            <NavBar />
            <form className="input-contents">
                <section className="get-info page-1" id="get-name">
                    <p>당신의 이름을 입력하세요.</p>
                    <input className="input-info" type="text" name="name" value={name} onChange={onNameHandler} />
                    <button className="submit-to-next" type="submit" onClick={showLocation}>DONE!</button>
                </section>

                <section className="get-info page-2" id="get-location">
                    <p>지금 계신 위치가 어디신가요?.</p>
                    <input className="input-info" type="text" name="name" value={location} onChange={onLocationHandler} />
                    <button className="submit-to-next" type="submit" onClick={showAppUseData}>DONE!</button>
                </section>

                <section className="test page-3" id="get-appUseData">
                    <h3>서비스를 클릭해 사용량을 기록해주세요</h3>
                    <ul className="applist-btn">
                        <li><button type="button" id="1">
                            </button>
                        </li>
                        <li><button id="btn2" style={{background:'transparent'}}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect onClick={onclickevent} y="-0.000732422" width="48" height="48" rx="4" fill="black"/>
                                <path d="M36.2652 18.0732C35.9708 16.9422 35.1033 16.0516 34.0018 15.7493C32.0056 15.2 24.0002 15.2 24.0002 15.2C24.0002 15.2 15.9948 15.2 13.9984 15.7493C12.8969 16.0516 12.0294 16.9422 11.735 18.0732C11.2002 20.1231 11.2002 24.4 11.2002 24.4C11.2002 24.4 11.2002 28.6768 11.735 30.7268C12.0294 31.8578 12.8969 32.7484 13.9984 33.0508C15.9948 33.6 24.0002 33.6 24.0002 33.6C24.0002 33.6 32.0056 33.6 34.0018 33.0508C35.1033 32.7484 35.9708 31.8578 36.2652 30.7268C36.8002 28.6768 36.8002 24.4 36.8002 24.4C36.8002 24.4 36.8002 20.1231 36.2652 18.0732Z" fill="white"/>
                                <path onClick={onclickevent} d="M21.6001 28.8V20.8L28.0001 24.8001L21.6001 28.8Z" fill="black"/>
                            </svg>
                        </button></li>
                        <li><button id="3" >
                        
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="4" >
                       
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="5" >
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="6">
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="7" >
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="8" >
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                        <li><button id="9" >
                            {/*<Zoom width="48" height="48" fill="blue"/>*/}
                        </button></li>
                        <li><button id="10" >
                            {/*<Email width="48" height="48"/>*/}
                        </button></li>
                    </ul>


                    {/* =====Netflix===== */}
                    <article id="netflix" className="test-box index-1">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Netflix width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Youtube ===== */}
                    <article id="youtube" className="test-box index-2">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Youtube width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Facebook ===== */}
                    <article id="facebook" className="test-box index-3">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Facebook width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Twitter ===== */}
                    <article id="twitter" className="test-box index-4">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Twitter width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Tiktok ===== */}
                    <article id="tiktok" className="test-box index-5">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Tiktok width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Instagram ===== */}
                    <article id="instagram" className="test-box index-6">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Instagram width="58" height="58"/>
                                <div className="app-name">
                                    <h5>Instagram</h5>
                                    <p>인스타그램</p>
                                </div>
                            </div>

                            <div className="question-box">
                                <div className="qna">
                                    <p  className="question">인스타그램 일주일에 몇 번 사용하시나요?</p>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== KakaoTalk ===== */}
                    <article id="kakaotalk" className="test-box index-7">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Kakaotalk width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Call ===== */}
                    <article id="call" className="test-box index-8">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Call width="58" height="58"/>
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
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>


                    {/* ===== Zoom ===== */}
                    <article id="zoom" className="test-box index-9">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Zoom width="58" height="58"/>
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
                        </div>
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>

                    {/* ===== Email ===== */}
                    <article id="email" className="test-box index-10">
                        <button id="before_question" className="ctrl-btn" disabled><Before/></button>

                        <div className="test-content">
                            <div className="app-title">
                                <Email width="58" height="58"/>
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
                                    <input className="btn-sm" name="email" type="button" value="yes"/>
                                    <input className="btn-sm" name="email" type="button" value="no"/>
                                </div>  
                            </div>
                        </div>
                        <button id="next_question" className="ctrl-btn"><Next/></button>
                    </article>
                </section>
                <button id="submit-test" type="submit" onClick={onSubmit}>DONE!</button>
            </form>
        </div>
    );
};

export default TestPage;