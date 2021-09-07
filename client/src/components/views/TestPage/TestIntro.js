import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/TestPage/TestIntro.css';
import introNext from '../../../assets/images/introNext.svg'

const StartPage = () => {
    return(
        <div className="start-page">
            <h1 className="first">Can we live</h1>
            <h1 className="second">without</h1>
            <h1 className="third">digital technology?</h1>
            <div className="intro-text">
                <p className="start">디지털 없이 살아갈 수 없는 세상 속,<br/>당신은 얼마나 잘 적응하고 있을까요?<br/>당신의 데이터 사용 습관을 분석해보세요!</p>
                <Link to="/test"><img src={introNext} alt="바로가기"/></Link>
            </div>
        </div>
        
    );
};

export default StartPage;