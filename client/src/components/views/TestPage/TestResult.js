import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestResult.css';
import { Link } from "react-router-dom";
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,LabelList } from "recharts";

const TestResult = () => {
    const [cookie,setCookie] = useState({});
    //test 쿠키 정보를 요청한다.
    useEffect(() => {
        Axios.get('/api/test/getResult')
        .then(response => {
            if(response.data.success){
                console.log(response.data.cookie); 
                setCookie(response.data.cookie);
            }else{
                alert('Getting Test Result is Fail');
            }
        })
    },[]);

    //앱 사용량 합산 결과
    const result = cookie.result;
    //승용차 1km 당 탄소배출량 : 96g , 결과를 승용차에 비유해 보여준다.
    const resultLikeCar = parseInt(cookie.result / 96);
    const showResultCar = (carNum) => {
        const carElement = `<img src={} alt="carIcon"/>`
    }

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
    let maxDataUrl = "";
    let maxDataName = "";
    switch(maxDataIndex){
        case 0:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = "넷플릭스";
            break;
        case 1:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '유튜브';
            break;
        case 2:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '페이스북';
            break;
        case 3:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '트위터';
            break;
        case 4:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '틱톡';
            break;
        case 5:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '인스타그램';
            break;
        case 6:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '카카오톡';
            break;
        case 7:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '전화';
            break;
        case 8:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '줌';
            break;
        case 9:
            maxDataThumbnail = "../../../assetsimages/cardNews/netflix.jpg";
            maxDataUrl = "/cardNews/netflix";
            maxDataName = '이메일';
            break;
    }


    return(
        <main className="TestResult">
            {/* --- 테스트 결과 설명 ---*/}
            <section className="test-result-section">
                <article className="test-result-summary">
                    <p className="result-sum-title">당신이 <b>한 달 동안</b> 만들어낸 <b>디지털 탄소 발자국의 양</b>은</p>
                    <p className="result-number"><span>{result}</span>g CO2eq</p>
                    <p className="result-metaphor">승용차로 약 <span>{resultLikeCar}km</span> 만큼 이동할 수 있는 양입니다.</p>
                    <div className="result-metaphor-img"></div>
                </article>
                <article className="test-result-detail">
                    <h3> 당신이 사용한 어플들은 각각 얼마만큼의 디지털 탄소 발자국을 배출했을까요? </h3>
                    <p>어플별로 발생시킨 탄소 발자국의 양을 확인해보세요!</p>
                    <div className="test-result-bargraph">
                        <BarChart
                            width={1000}
                            height={600}
                            data={data}
                            margin={{
                                top: 50,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid vertical={false} style={{stroke:"rgb(70, 70, 70)"}}/>
                            <XAxis dataKey="name" dy={13} style={{fill:"#fff",fontSize:"0.9rem"}}/>
                            <YAxis unit={"g"} dx={-10} style={{fill:"#868887",fontSize:"0.8rem"}}/>
                            <Bar dataKey="used" stackId="a" fill="#70FF00" barSize={40} label={{ fill:"#fff", fontSize:"0.8rem", fontWeight:"bold", position: 'top', formatter: labelFormatter, margin:'10px' }} animationBegin={2000} animationDuration={1200} animationEasing={'ease-in-out'}/>
                        </BarChart>
                    </div>
                </article>
                <article className="test-result-recommend">
                    <div className="recommend-text">
                        <h3><span>{maxDataName}</span>에서 탄소를 가장 많이 배출했네요!</h3>
                        <p>이 서비스를 사용하는 행동이 어째서 탄소를 발생시키는지 한 번 알아볼까요?</p>
                        <Link to=""><button className="card-navigator">지금 바로 알아보기</button></Link>
                    </div>
                    <div className="recommend-img">
                    
                    </div>
                </article>
            </section>

            {/* --- 전세계의 데이터 발생량과 디지털 탄소발자국 설명 ---*/}
            <section className="world-degital-section">
                <div className="world-degital-title">
                    <h3>전 세계의 사람들이 디지털 기기를 1분 동안 사용할 때 발생하는<br/>디지털 탄소 발자국의 양은 얼마나 될까요?</h3>
                    <p>앱 아이콘을 클릭하고 전 세계 트래픽이 발생시키는 디지털 탄소 발자국의 양을 확인하세요</p>
                </div>
                <ul>
                    <li>

                    </li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    v
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    v
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <article className="world-data-info">
                    <div className="world-data">
                        <div className="timer">01:00:00</div>
                        <div className="carbon">1729kg</div>
                        <div className="unit">
                            <span><div id="kg1"></div> 1kg</span>
                            <span><div id="kg50"></div> 50kg</span>
                            <span><div id="kg1000"></div> 1000kg</span>
                            <span><div id="kg10000"></div> 10000kg</span>
                            <span><div id="kg100000"></div> 100000kg</span>
                        </div>
                    </div>
                    <div className="world-data-carbon-visualization">

                    </div>
                </article>
                <article className="world-digital-carbon-info">
                    <p className="world-digital-carbon-title"><b>전 세계</b>에서 <b>1분간</b> 발생하는 <b>디지털 탄소 발자국의 양</b>은</p>
                    <p className="world-digital-carbon-number">762,194kg</p>
                    <p className="world-digital-carbon-unit">CO2 eq</p>
                    <div class="same">=</div>
                    <div className="world-metaphor">
                        <div className="world-metaphor-content plastic">
                            <p className="world-metaphor-object">플라스틱 컵</p>
                            <p className="world-metaphor-number">33,138,869</p>
                            <p className="world-metaphor-unit">개</p>
                            <div className="world-metaphor-img"></div>
                        </div>
                        <div className="world-metaphor-content tree">
                            <p className="world-metaphor-object">30년생 나무</p>
                            <p className="world-metaphor-number">84,688</p>
                            <p className="world-metaphor-unit">그루</p>
                            <div className="world-metaphor-img"></div>
                        </div>
                        <div className="world-metaphor-content mobility">
                            <p className="world-metaphor-object">자동차로 이동</p>
                            <p className="world-metaphor-number">7,857,670</p>
                            <p className="world-metaphor-unit">km</p>
                            <div className="world-metaphor-img"></div>
                        </div>
                    </div>
                </article>
            </section>
            
            {/* --- 다른 페이지 소개 & 이동 ---*/}
            <section className="result-navigator">
                <hr/>
                <article className="result-navigator-title">
                    <h2><span>a Little</span> ha<span>bit</span> makes Big impacts</h2>
                    <p>"나 하나쯤이야"라고 생각한 사람들의 <span>작은 습관</span>들이 모여 지구에 <span>큰 영향</span>을 끼치고 있습니다.</p>
                </article>
                <article className="result-navigator-box-container">
                    <div className="result-navigator-box">
                        <p>디지털 탄소 발자국은<br/>어떻게 해로운 영향을 끼치나요?</p>
                        <button className="navigator-btn">알아보기</button>
                    </div>
                    <div className="result-navigator-box">
                        <p>디지털 탄소 발자국을 줄이려면<br/>무엇을 해야하나요?</p>
                        <button className="navigator-btn">알아보기</button>
                    </div>
                    <div className="result-navigator-box">
                        <p>다른 사람들은 얼마나 많은<br/>디지털 탄소 발자국을 남겼을까요?</p>
                        <button className="navigator-btn"><Link to="/test/earthlist">알아보기</Link></button>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default TestResult;