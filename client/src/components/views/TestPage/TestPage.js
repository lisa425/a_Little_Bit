import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import registerUser from '../../../_actions/user_action';
import '../../../css/TestPage/TestPage.css';
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


const TestPage = (props) => {
    //다음 페이지로 넘기기
    const [next,setNext] = useState(false)
    const onClickNext = (event) => {
        event.preventDefault();
        setNext(!next);
    }
    const [next2,setNext2] = useState(false)
    const onClickNext2 = (event) => {
        event.preventDefault();
        setNext2(!next2);
    }

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
        setNetflixBox(!netflixBox);
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
        
    }
    //youtube box
    const onYoutubeBoxHandler = (event) => {
        event.preventDefault();
        setYoutubeBox(!youtubeBox);
        setNetflixBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
        
    }
    //facebook box
    const onFacebookBoxHandler = (event) => {
        event.preventDefault();
        setFacebookBox(!facebookBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
    }
    //twitter box
    const onTwitterBoxHandler = (event) => {
        event.preventDefault();
        setTwitterBox(!twitterBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
    }
    //tiktok box
    const onTiktokBoxHandler = (event) => {
        event.preventDefault();
        setTiktokBox(!tiktokBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
    }
    //instagram box
    const onInstagramBoxHandler = (event) => {
        event.preventDefault();
        setInstagramBox(!instagramBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
    }
    //kakao box
    const onKakaoTalkBoxHandler = (event) => {
        event.preventDefault();
        setKakaoTalkBox(!kakaoTalkBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setCallBox(false)
        setZoomBox(false)
        setEmailBox(false)
        
    }
    //call box
    const onCallBoxHandler = (event) => {
        event.preventDefault();
        setCallBox(!callBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setZoomBox(false)
        setEmailBox(false)
    }
    //zoom box
    const onZoomBoxHandler = (event) => {
        event.preventDefault();
        setZoomBox(!zoomBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setEmailBox(false)
    }
    //email box
    const onEmailBoxHandler = (event) => {
        event.preventDefault();
        setEmailBox(!emailBox);
        setNetflixBox(false)
        setYoutubeBox(false)
        setFacebookBox(false)
        setTwitterBox(false)
        setTiktokBox(false)
        setInstagramBox(false)
        setKakaoTalkBox(false)
        setCallBox(false)
        setZoomBox(false)
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
    const onZoomWeekChange = (e) => {
        /*input1의 value를 변화시킨다.*/
        setZoomWeek(e.currentTarget.value);
    }
    const onZoomDayChange = (event) => {
        /*input2의 value를 변화시킨다.*/
        setZoomDay(event.currentTarget.value);
    }
    const zoomResult = ZoomWeek * ZoomDay * 8.3;

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

    let emailResult;
    if(EmailDelete === false){
        emailResult = EmailCount * 4;
    }

    let appResult = netflixResult + youtubeResult + facebookResult + twitterResult + tiktokResult + instagramResult + kakaoTalkResult + callResult + zoomResult + emailResult;
    

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
        <main className="testpage">
                <form className="input-contents slider">
                {/* page 1 : 이름 입력 */}
                <div className="content-wrapper">
                    <section className={next ? "next-clicked" : "get-info page-1"} id="get-name">
                        <div className="get-info-input">
                            <p>당신의 이름을 입력하세요.</p>
                            <input className="input-info" type="text" name="name" value={name} onChange={onNameHandler} />
                        </div>
                        <button className={next ? "next-clicked" : "submit-to-next"} type="submit" onClick={onClickNext}>DONE!</button>
                    </section>


                {/* page 2 : 지역 입력 */}
                    <section className={next2 ? "next2-clicked" : "get-info page-2"} id="get-location">
                        <div className="get-info-input">
                            <p>지금 계신 위치가 어디신가요?.</p>
                            <input className="input-info" type="text" name="name" value={location} onChange={onLocationHandler} />
                            <button className={next2 ? "next2-clicked" : "submit-to-next" } type="submit" onClick={onClickNext2}>DONE!</button>
                        </div>
                    </section>


                {/* page 3 : 사용량 입력 */}
                    <section className="get-info">
                        <div className="get-info-input">
                            <div className="test page-3" id="get-appUseData">
                                <h3>서비스를 클릭해 사용량을 기록해주세요</h3>
                                <ul className="applist-btn">
                                    <li><button type="button" id="1" onClick={onNetflixBoxHandler}>
                                            넷플
                                        </button>
                                    </li>
                                    <li><button id="btn2" style={{background:'transparent'}} onClick={onYoutubeBoxHandler}>
                                        유튭
                                    </button></li>
                                    <li><button id="3" onClick={onFacebookBoxHandler}>

                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="4" onClick={onTwitterBoxHandler}>
                                
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="5" onClick={onTiktokBoxHandler}>
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="6"onClick={onInstagramBoxHandler}>
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="7" onClick={onKakaoTalkBoxHandler}>
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="8" onClick={onCallBoxHandler}>
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                    <li><button id="9" onClick={onZoomBoxHandler}>
                                        {/*<Zoom width="48" height="48" fill="blue"/>*/}
                                    </button></li>
                                    <li><button id="10" onClick={onEmailBoxHandler}>
                                        {/*<Email width="48" height="48"/>*/}
                                    </button></li>
                                </ul>

                                <div className="test-wrapper">
                                {/* =====Netflix===== */}
                                    <article id="netflix" className={netflixBox ? "index-1" : "test-box"}>
                                        <button className="ctrl-btn before_question" style={{visibility:'hidden'}}><Before/></button>
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
                                        <button className="ctrl-btn next_question" onClick={onYoutubeBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Youtube ===== */}
                                    <article id="youtube" className={youtubeBox ? "index-2" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onNetflixBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onFacebookBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Facebook ===== */}
                                    <article id="facebook" className={facebookBox ? "index-3" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onYoutubeBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onTwitterBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Twitter ===== */}
                                    <article id="twitter" className={twitterBox ? "index-4" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onFacebookBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onTiktokBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Tiktok ===== */}
                                    <article id="tiktok" className={tiktokBox ? "index-5" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onTwitterBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onInstagramBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Instagram ===== */}
                                    <article id="instagram" className={instagramBox ? "index-6" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onTiktokBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onKakaoTalkBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== KakaoTalk ===== */}
                                    <article id="kakaotalk" className={kakaoTalkBox ? "index-7" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onInstagramBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onCallBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Call ===== */}
                                    <article id="call" className={callBox ? "index-8" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onKakaoTalkBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onZoomBoxHandler}><Next/></button>
                                    </article>


                                    {/* ===== Zoom ===== */}
                                    <article id="zoom" className={zoomBox ? "index-9" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onCallBoxHandler}><Before/></button>

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
                                        <button className="ctrl-btn next_question" onClick={onEmailBoxHandler}><Next/></button>
                                    </article>

                                    {/* ===== Email ===== */}
                                    <article id="email" className={emailBox ? "index-10" : "test-box"}>
                                        <button className="ctrl-btn before_question" onClick={onZoomBoxHandler}><Before/></button>

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
                                                    <div>
                                                        <input className="btn-sm" name="email" type="button" value="예"/>
                                                        <input className="btn-sm" name="email" type="button" value="아니오" onClick={notEmailDelete}/>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <button className="ctrl-btn next_question" style={{visibility:'hidden'}}><Next/></button>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <button id="submit-test" type="submit" onClick={onSubmit}>DONE!!</button>
                    </section>
                </div>
                </form>
            
        </main>
    );
};

export default TestPage;