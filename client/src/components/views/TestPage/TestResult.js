import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestResult.css';
import { Link } from "react-router-dom";
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,ResponsiveContainer,LabelList } from "recharts";
import { useSpring,animated } from 'react-spring';
//애니메이션,그래픽 요소
import Tree from './animation/Tree';
import Plastic from './animation/Plastic';
import Car from './animation/Car';
import {ReactComponent as Datasvg} from '../../../assets/images/resultIcons/dataGraphic.svg';
import TestResultPixel from './TestResultPixel';
//svg 아이콘 버튼 파일
import {ReactComponent as Symbol1} from '../../../assets/images/symbols/symbol.svg'
import {ReactComponent as Symbol2} from '../../../assets/images/symbols/symbol2.svg'
import {ReactComponent as Netflix } from '../../../assets/images/appIcons/Netflix/black.svg';
import {ReactComponent as Youtube} from '../../../assets/images/appIcons/Youtube/black.svg';
import {ReactComponent as Facebook } from '../../../assets/images/appIcons/Facebook/black.svg';
import {ReactComponent as Twitter } from '../../../assets/images/appIcons/Twitter/black.svg';
import {ReactComponent as Tiktok } from '../../../assets/images/appIcons/Tiktok/black.svg';
import {ReactComponent as Instagram } from '../../../assets/images/appIcons/Instagram/black.svg';
import {ReactComponent as Message } from '../../../assets/images/appIcons/Kakaotalk/black.svg';
import {ReactComponent as Search } from '../../../assets/images/appIcons/Call/black.svg';
import {ReactComponent as Zoom} from '../../../assets/images/appIcons/Zoom/black.svg';
import {ReactComponent as Email } from '../../../assets/images/appIcons/Email/black.svg';
import {ReactComponent as Minicar } from '../../../assets/images/resultIcons/minicar.svg';
//카드뉴스 썸네일 이미지
import netflix from '../../../assets/images/cardNews/cardNewsThumbnail/netflix.jpg';
import youtube from '../../../assets/images/cardNews/cardNewsThumbnail/youtube.jpg';
import facebook from '../../../assets/images/cardNews/cardNewsThumbnail/facebook.jpg';
import twitter from '../../../assets/images/cardNews/cardNewsThumbnail/twitter.jpg';
import instagram from '../../../assets/images/cardNews/cardNewsThumbnail/instagram.jpg';
import kakaotalk from '../../../assets/images/cardNews/cardNewsThumbnail/kakaotalk.jpg';
import email from '../../../assets/images/cardNews/cardNewsThumbnail/email.jpg';
import zoom from '../../../assets/images/cardNews/cardNewsThumbnail/zoom.jpg';
import datacenter from '../../../assets/images/cardNews/cardNewsThumbnail/datacenter.jpg';

const TestResult = (props) => {
    const [cookie,setCookie] = useState({});
    //test 쿠키 정보를 요청한다.
    useEffect(() => {
        Axios.get('/api/test/getResult')
        .then(response => {
            if(response.data.success){
                if(response.data.cookie == undefined){
                    alert('테스트를 진행하세요!');
                    props.history.push('/testintro');
                }else{
                    setCookie(response.data.cookie);
                }
            }else{
                alert('Getting Test Result is Fail');
            }
        })


    },[]);

    //screen size
    const size = useWindowSize();
    const xAxisAlign = () => {
        if(size.width < 481){
            return "start";
        }else{
            return "middle";
        }
    }


    //앱 사용량 합산 결과
    const result = cookie.result;
    //앱 사용량 픽셀 배경:TestResultPixel
    //승용차 1km 당 탄소배출량 : 96g , 결과를 승용차에 비유해 보여준다.
    const resultLikeCar = parseInt(cookie.result / 96);
    let carArray = [];
    const setCarArray = () => {
        for (let i = 0; i < resultLikeCar; i++){
            carArray.push(i);
        }
        return carArray;
    }

    setCarArray();

    const showResultCar = carArray.map((minicar,index) => {
        let delay = index/50;
        return(
            <Minicar key={index} style={{animationDelay:delay+'s'}}/>
        )
    })
    

    //개별 앱 사용량 데이터의 수치만 배열로 전환
    const appData = [
        parseInt(cookie.netflix),
        parseInt(cookie.youtube),
        parseInt(cookie.facebook),
        parseInt(cookie.twitter),
        parseInt(cookie.tiktok),
        parseInt(cookie.instagram),
        parseInt(cookie.kakaotalk),
        parseInt(cookie.call),
        parseInt(cookie.zoom),
        parseInt(cookie.email)
    ]; 
    //그래프를 생성한다.
    const data = [
        {
        name: "넷플릭스",
        used: appData[0]
        },
        {
        name: "유튜브",
        used: appData[1]
        },
        {
        name: "페이스북",
        used: appData[2]
        },
        {
        name: "트위터",
        used: appData[3]
        },
        {
        name: "틱톡",
        used: appData[4]
        },
        {
        name: "인스타그램",
        used: appData[5]
        },
        {
        name: "카카오톡",
        used: appData[6]
        },
        {
        name: "전화",
        used: appData[7]
        },
        {
        name: "줌",
        used: appData[8]
        },
        {
        name: "이메일",
        used: appData[9]
        }
    ];
    const labelFormatter = (value) => {
        return value + 'g';
    };

    //가장 많이 사용된 앱을 선별한다.
    let maxDataIndex = appData.indexOf(Math.max.apply(null,appData));
    let maxDataThumbnail = "";
    let maxDataName = "";
    switch(maxDataIndex){
        case 0:
            maxDataThumbnail = netflix;
            maxDataName = "넷플릭스";
            break;
        case 1:
            maxDataThumbnail = youtube;
            maxDataName = '유튜브';
            break;
        case 2:
            maxDataThumbnail = facebook;
            maxDataName = '페이스북';
            break;
        case 3:
            maxDataThumbnail = twitter;
            maxDataName = '트위터';
            break;
        case 4:
            maxDataThumbnail = datacenter;
            maxDataName = '틱톡';
            break;
        case 5:
            maxDataThumbnail = instagram;
            maxDataName = '인스타그램';
            break;
        case 6:
            maxDataThumbnail = kakaotalk;
            maxDataName = '카카오톡';
            break;
        case 7:
            maxDataThumbnail = datacenter;
            maxDataName = '전화';
            break;
        case 8:
            maxDataThumbnail = zoom;
            maxDataName = '줌';
            break;
        case 9:
            maxDataThumbnail = email;
            maxDataName = '이메일';
            break;
    }


    /* 전 세계 트래픽 디지털 탄소 배출량 설명 */
    //앱 리스트 버튼 -> 추후 컴포넌트로 뺄 것.
    const [netflixBtn, setNetflixBtn] = useState(true);
    const [youtubeBtn,setYoutubeBtn] = useState(true);
    const [facebookBtn,setFacebookBtn] = useState(true);
    const [twitterBtn,setTwitterBtn] = useState(true);
    const [tiktokBtn,setTiktokBtn] = useState(true);
    const [instagramBtn,setInstagramBtn] = useState(true);
    const [messageBtn,setMessageBtn] = useState(true);
    const [searchBtn,setSearchBtn] = useState(true);
    const [zoomBtn,setZoomBtn] = useState(true);
    const [emailBtn,setEmailBtn] = useState(true);

    //전세계 디지털 탄소발자국의 양을 설정, 초기값은 전체 수치인 762,194
    const [carbonFootprint,setCarbonFootPrint] = useState(0);

    //데이터 그래픽의 아이디를 가져온다.
    const world_netflix_data =  document.querySelector('#netflix');
    const world_youtube_data =  document.querySelector('#youtube');
    const world_facebook_data =  document.querySelector('#facebook');
    const world_twitter_data =  document.querySelector('#twitter');
    const world_tiktok_data =  document.querySelector('#tiktok');
    const world_instagram_data =  document.querySelector('#instagram');
    const world_message_data =  document.querySelector('#message');
    const world_search_data =  document.querySelector('#search');
    const world_zoom_data =  document.querySelector('#zoom');
    const world_email_data =  document.querySelector('#email');


    const onNetflixBtnHandler = (event) => {
        event.preventDefault();
        setNetflixBtn(!netflixBtn);
        if(netflixBtn===false){
            world_netflix_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-647);
        }else{
            world_netflix_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+647);
        }    
    }
    const onYoutubeBtnHandler = (event) => {
        event.preventDefault();
        setYoutubeBtn(!youtubeBtn);
        if(youtubeBtn===false){
            world_youtube_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-3000);
        }else{
            world_youtube_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+3000);
        }
    }

    const onFacebookBtnHandler = (event) => {
        event.preventDefault();
        setFacebookBtn(!facebookBtn);
        if(facebookBtn===false){
            world_facebook_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-150);
        }else{
            world_facebook_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+150);
        }
    }
    
    const onTwitterBtnHandler = (event) => {
        event.preventDefault();
        setTwitterBtn(!twitterBtn);  
        if(twitterBtn===false){
            world_twitter_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-511);
        }else{
            world_twitter_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+511);
        }  
    }
    
    const onTiktokBtnHandler = (event) => {
        event.preventDefault();
        setTiktokBtn(!tiktokBtn);
        if(tiktokBtn===false){
            world_tiktok_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-393);
        }else{
            world_tiktok_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+393);
        }
    }
    
    const onInstagramBtnHandler = (event) => {
        event.preventDefault();
        setInstagramBtn(!instagramBtn);
        if(instagramBtn===false){
            world_instagram_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-402);
        }else{
            world_instagram_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+402);
        }
    }
    
    const onMessageBtnHandler = (event) => {
        event.preventDefault();
        setMessageBtn(!messageBtn);
        if(messageBtn===false){
            world_message_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-213);
        }else{
            world_message_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+213);
        }
    }
    
    const onSearchBtnHandler = (event) => {
        event.preventDefault();
        setSearchBtn(!searchBtn);
        if(searchBtn===false){
            world_search_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-3149);
        }else{
            world_search_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+3149);
        }
    }
    
    const onZoomBtnHandler = (event) => {
        event.preventDefault();
        setZoomBtn(!zoomBtn);
        if(zoomBtn===false){
            world_zoom_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-1729);
        }else{
            world_zoom_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+1729);
        }
    }
    
    const onEmailBtnHandler = (event) => {
        event.preventDefault();
        setEmailBtn(!emailBtn);
        if(emailBtn===false){
            world_email_data.style.display="none";
            setCarbonFootPrint(carbonFootprint-752000);
        }else{
            world_email_data.style.display="block";
            setCarbonFootPrint(carbonFootprint+752000);
        }
    }
    const plasticProps = useSpring({val:33138869,from:{val:100000}});
    const treeProps = useSpring({val:84688,from:{val:1000}});
    const carProps = useSpring({val:7857670,from:{val:1000000}});
    return(
        <main className="TestResult">
            {/* --- 테스트 결과 설명 ---*/}
            <section className="test-result-section">
                <article className="test-result-summary">
                    <Symbol2 />
                    <p className="result-sum-title">당신이 <b>한 달 동안</b> 만들어낸 <b>디지털 탄소 발자국의 양</b>은</p>
                    <p className="result-number"><span>{result}</span>g CO2eq</p>
                    <p className="result-metaphor">승용차로 약 <span>{resultLikeCar}km</span> 만큼 이동할 수 있는 양입니다.</p>
                    <div className="result-metaphor-img">{showResultCar}</div>
                </article>
                <article className="test-result-detail">
                    <h3> 당신이 사용한 어플들은 <br className="mobile-br"/>각각 얼마만큼의 <br className="mobile-br"/>디지털 탄소 발자국을 <br className="mobile-br"/>배출했을까요? </h3>
                    <p>어플별로 발생시킨 <br className="mobile-br"/>탄소 발자국의 양을 확인해보세요!</p>
                    <div className="test-result-bargraph">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                // width={graphSize()}
                                // width={1000}
                                // height={600}
                                data={data}
                                margin={{
                                    top: 50,
                                    bottom: 5
                                }}
                                >
                                <CartesianGrid vertical={false} style={{stroke:"rgb(70, 70, 70)"}}/>
                                <XAxis textAnchor={xAxisAlign()} height={85} dataKey="name" dy={10} sclaeToFit="true" verticalAnchor= "start" interval={0} style={{fill:"#fff",fontSize:"0.7rem"}}/>
                                <YAxis unit={"g"} dx={-10} style={{fill:"#868887",fontSize:"0.6rem"}}/>
                                <Bar dataKey="used" stackId="a" fill="#70FF00" barSize={40} label={{ fill:"#fff", fontSize:"0.8rem", fontWeight:"medium", position: 'top', formatter: labelFormatter, margin:'10px' }} animationBegin={2000} animationDuration={1200} animationEasing={'ease-in-out'}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </article>
                <article className="test-result-recommend">
                    <div className="recommend-text">
                        <h3><span>{maxDataName}</span>에서 <br className="mobile-br"/>탄소를 가장 많이 배출했네요!</h3>
                        <p>해당 서비스들이 어째서 <br className="mobile-br"/>탄소를 발생시키는지 한 번 알아볼까요?</p>
                        <Link to="/cardnews"><button className="card-navigator">Let's GO!</button></Link>
                    </div>
                    <div className="recommend-img">
                        <img src={maxDataThumbnail} alt="card news Thumbnail"/>
                    </div>
                </article>
            </section>

            {/* --- 전세계의 데이터 발생량과 디지털 탄소발자국 설명 ---*/}
            <section className="world-degital-section">
                <div className="world-degital-title">
                    <h3>전 세계의 사람들이 서비스를 <br className="mobile-br"/>1분 동안 사용할 때 발생하는<br/>디지털 탄소 발자국의 양은 얼마나 될까요?</h3>
                    <p>앱 아이콘을 클릭하고 전 세계 트래픽이 발생시키는 <br className="mobile-br"/>디지털 탄소 발자국의 양을 확인하세요</p>
                </div>
                <ul>
                    <li><Netflix className={netflixBtn ? 'netflix-white' : 'netflix-color'} onClick={onNetflixBtnHandler}/></li>

                    <li><Youtube className={youtubeBtn ? 'youtube-white' : 'youtube-color'} onClick={onYoutubeBtnHandler}/></li>

                    <li><Facebook className={facebookBtn ? 'facebook-white' : 'facebook-color'} onClick={onFacebookBtnHandler}/></li>

                    <li><Twitter className={twitterBtn ? 'twitter-white' : 'twitter-color'} onClick={onTwitterBtnHandler}/></li>

                    <li><Tiktok className={tiktokBtn ? 'tiktok-white' : 'tiktok-color'} onClick={onTiktokBtnHandler}/></li>

                    <li><Instagram className={instagramBtn ? 'instagram-white' : 'instagram-color'} onClick={onInstagramBtnHandler}/></li>

                    <li><Message className={messageBtn ? 'message-white' : 'message-color'} onClick={onMessageBtnHandler}/></li>

                    <li><Search className={searchBtn ? 'search-white' : 'search-color'} onClick={onSearchBtnHandler}/></li>

                    <li><Zoom className={zoomBtn ? 'zoom-white' : 'zoom-color'} onClick={onZoomBtnHandler}/></li>

                    <li><Email className={emailBtn ? 'email-white' : 'email-color'} onClick={onEmailBtnHandler}/></li>
                </ul>
                <article className="world-data-info">
                    <div className="world-data">
                        <div className="timer">01:00:00</div>
                        <div className="carbon">{carbonFootprint.toLocaleString('en-US')}kg</div>
                        <div className="unit">
                            <span><div id="kg1"></div> 1kg</span>
                            <span><div id="kg50"></div> 50kg</span>
                            <span><div id="kg1000"></div> 1000kg</span>
                            <span><div id="kg10000"></div> 10000kg</span>
                            <span><div id="kg100000"></div> 100000kg</span>
                        </div>
                    </div>
                    <div className="world-data-carbon-visualization"> 
                        <Datasvg />
                    </div>
                </article>
                <article className="world-digital-carbon-info">
                    <p className="world-digital-carbon-title"><b>전 세계</b>에서 <b>1분간</b> 발생하는 <br className="mobile-br"/><b>디지털 탄소 발자국의 양</b>은</p>
                    <p className="world-digital-carbon-number">
                        762,194kg
                    </p>
                    <p className="world-digital-carbon-unit">CO2 eq</p>
                    <div className="same">=</div>
                    <div className="world-metaphor">
                        <div className="world-metaphor-content plastic">
                            <p className="world-metaphor-object">플라스틱 컵</p>
                            <p className="world-metaphor-number" style={{color:'#00FFF9'}}>
                                <animated.span className="number">
                                    {plasticProps.val.interpolate(val=>Math.floor(val).toLocaleString('en-US'))}
                                </animated.span>
                            </p>
                            <p className="world-metaphor-unit">개</p>
                            <div className="world-metaphor-img"><Plastic /></div>
                        </div>
                        <div className="world-metaphor-content tree">
                            <p className="world-metaphor-object">30년생 나무</p>
                            <p className="world-metaphor-number" style={{color:'#70FF00'}}>
                                <animated.span className="number">
                                    {treeProps.val.interpolate(val=>Math.floor(val).toLocaleString('en-US'))}
                                </animated.span>
                            </p>
                            <p className="world-metaphor-unit">그루</p>
                            <div className="world-metaphor-img"><Tree /></div>
                        </div>
                        <div className="world-metaphor-content mobility">
                            <p className="world-metaphor-object">자동차로 이동</p>
                            <p className="world-metaphor-number" style={{color:'#FAFF00'}}>
                                <animated.span className="number">
                                    {carProps.val.interpolate(val=>Math.floor(val).toLocaleString('en-US'))}
                                </animated.span>
                            </p>
                            <p className="world-metaphor-unit">km</p>
                            <div className="world-metaphor-img"><Car /></div>
                        </div>
                    </div>
                </article>
            </section>
            
            {/* --- 다른 페이지 소개 & 이동 ---*/}
            <section className="result-navigator">
                <hr/>
                <Symbol1/>
                <article className="result-navigator-title">
                    <h2>a L<span>i</span>ttle hab<span>i</span>t makes Big <span>i</span>mpacts</h2>
                    <p>"나 하나쯤이야"라고 생각한 <br className="mobile-br"/>사람들의 <span>작은 습관</span>들이 모여 <br className="mobile-br"/>지구에 <span>큰 영향</span>을 끼치고 있습니다.</p>
                </article>
                <article className="result-navigator-box-container">
                    <div className="result-navigator-box">
                        <p>디지털 탄소 발자국은<br/>어떻게 해로운 영향을 끼치나요?</p>
                        <Link to="/explain"><button className="navigator-btn">go</button></Link>
                    </div>
                    <div className="result-navigator-box">
                        <p>디지털 탄소 발자국을 줄이려면<br/>무엇을 해야하나요?</p>
                        <Link to="/actionplan"><button className="navigator-btn">go</button></Link>
                    </div>
                    <div className="result-navigator-box">
                        <p>다른 사람들은 얼마나 많은<br/>디지털 탄소 발자국을 남겼을까요?</p>
                        <Link to="/guestbook"><button className="navigator-btn">go</button></Link>
                    </div>
                </article>
            </section>
            {TestResultPixel(result,'green')}
        </main>
    )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default TestResult;