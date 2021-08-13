import React,{useState} from 'react';
import '../../../css/ActionPlanPage/ActionPlanPage.css';
import PolarBear from '../../../assets/images/actionplans/bear_img.png';
import Turtle from '../../../assets/images/actionplans/action_plan_turtle.jpg';
import Panda from '../../../assets/images/actionplans/action_plan_panda.jpg';
import {ReactComponent as Next } from '../../../assets/images/next.svg';
import {ReactComponent as Before } from '../../../assets/images/before.svg';
import {ReactComponent as Cloud } from '../../../assets/images/actionplans/actionplanicon/cloud.svg';
import {ReactComponent as Kakaotalk } from '../../../assets/images/actionplans/actionplanicon/kakaotalk.svg';
import {ReactComponent as Email } from '../../../assets/images/actionplans/actionplanicon/email.svg';
import {ReactComponent as SNS } from '../../../assets/images/actionplans/actionplanicon/instagram.svg';
import {ReactComponent as Netflix} from '../../../assets/images/actionplans/actionplanicon/netflix.svg';
import {ReactComponent as Zoom } from '../../../assets/images/actionplans/actionplanicon/zoom.svg';

const ActionPlanPage = () => {
    const [pixel,setPixel] = useState(0)
    const actionPlanHandler = (carbon) => {
        let newPixel = carbon * pixel;
        setPixel(newPixel);
    } 

    // const pixelContainer = document.querySelector('#action-plan-pixel-grid-container');
    // const DayPixel = (appname,day) => {
    //     //기존의 state값에 따른 day픽셀을 제거한다.
    //     const oldDayPixel = document.getElementsByClassName(`day-pixel-${appname}`);
    //     for(let i=0;i<oldDayPixel.length;i++){
    //         pixelContainer.removeChild(oldDayPixel[i]);
    //     }

    //     //map을 위한 배열 생성
    //     let DayPixelCounter = [];
    //     for(let i=0;i<day;i++){
    //         DayPixelCounter.push(i);
    //     }
        
    //     //pixel을 dom에 추가
    //     const renderDayPixel = DayPixelCounter.map((index) => {
    //         let randomPositionColumn = Math.floor(Math.random()*66-1);
    //         let randomPositionRow = Math.floor(Math.random()*48-1);
    //         const DayMosaicPixel = document.createElement('div')
            
    //         DayMosaicPixel.style.gridColumn=randomPositionColumn;
    //         DayMosaicPixel.style.gridRow=randomPositionRow;
    //         DayMosaicPixel.classList.add(`day-pixel-${appname}`);
    //         pixelContainer.appendChild(DayMosaicPixel);
    //     })
    //     return {renderDayPixel}
    // }

    // const WeekPixel = (appname,week) => {
    //     //기존의 state값에 따른 week픽셀을 제거한다.
    //     const oldWeekPixel = document.getElementsByClassName(`week-pixel-${appname}`);
    //     for(let i=0;i<oldWeekPixel.length;i++){
    //         pixelContainer.removeChild(oldWeekPixel[i]);
    //     }

    //     //map을 위한 배열 생성,1~7의 수는 실제 보이는 픽셀 수가 적어서 한달 기준으로 4를 곱한다.
    //     let WeekPixelCounter = [];
    //     for(let i=0;i<(week*4);i++){
    //         WeekPixelCounter.push(i);
    //     }
        
    //     //pixel을 dom에 추가
    //     const renderWeekPixel = WeekPixelCounter.map((index) => {
    //         let randomPositionColumn = Math.floor(Math.random()*66-1);
    //         let randomPositionRow = Math.floor(Math.random()*48-1);
    //         const WeekMosaicPixel = document.createElement('div')
            
    //         WeekMosaicPixel.style.gridColumn=randomPositionColumn;
    //         WeekMosaicPixel.style.gridRow=randomPositionRow;
    //         WeekMosaicPixel.classList.add(`week-pixel-${appname}`);

    //         pixelContainer.appendChild(WeekMosaicPixel);
    //     })
    //     return {renderWeekPixel}
    // }

    return(
        <main className="ActionPlan">
            <div className="background-img-container">
                <img src={PolarBear} alt="북극곰(polar bear image)"/>
                <img src={Panda} alt="판다(panda image)"/>
                <img src={Turtle} alt="바다거북이(sea turtle image)"/>
            </div>
            <div className="background-img-handler">
                <button className="image-handler"><Before/></button>
                <button className="image-handler"><Next/></button>
            </div>
            <article className="actionplan-contents">
                <h2>Action Plan</h2>
                <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
                <div className="actionplan-list-container">
                    <ul className="actionplan-list">
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <Netflix />
                                <span>고화질 -> 표준 화질 설정하기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <SNS />
                                <span>SNS 알람 차단 설정하기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <Cloud />
                                <span>자동 클라우드 백업 해제하기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <Kakaotalk />
                                <span>캐시 주기적 삭제하기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <Zoom />
                                <span>줌 비디오 끄기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className="actionplan-item">
                            <div className="item-wrapper">
                                <Email />
                                <span>메일 스팸함 비우기</span>
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </article>
        </main>
    )
}

export default ActionPlanPage