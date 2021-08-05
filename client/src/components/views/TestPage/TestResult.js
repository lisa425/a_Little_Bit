import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestResult.css';
import { Link } from "react-router-dom";

const TestResult = () => {

    //test 쿠키 정보를 요청한다.
    useEffect(() => {
        Axios.get('/api/test/getResult')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
            }else{
                alert('Getting Test Result is Fail');
            }
        })
    },[]);

    return(
        <main className="TestResult">
            {/* --- 테스트 결과 설명 ---*/}
            <section className="test-result-section">
                <article className="test-result-summary">
                    <p className="result-sum-title">당신이 <b>한 달 동안</b> 만들어낸 <b>디지털 탄소 발자국의 양</b>은</p>
                    <p className="result-number"><span>""4,789""</span>g CO2eq</p>
                    <p className="result-metaphor">승용차로 약 <span>""49km""</span> 만큼 이동할 수 있는 양입니다.</p>
                    <div className="result-metaphor-img"></div>
                </article>
                <article className="test-result-detail">
                    <h3> 당신이 사용한 어플들은 각각 얼마만큼의 디지털 탄소 발자국을 배출했을까요? </h3>
                    <p>어플별로 발생시킨 탄소 발자국의 양을 확인해보세요!</p>
                    <div className="test-result-bargraph">
                    
                    </div>
                </article>
                <article className="test-result-recommend">
                    <div className="recommend-text">
                        <h3><span>""넷플릭스""</span>에서 탄소를 가장 많이 배출했네요!</h3>
                        <p>""넷플릭스""를 보는 행동이 어째서 탄소를 발생시키는지 한 번 알아볼까요?</p>
                        <button className="card-navigator">지금 바로 알아보기</button>
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