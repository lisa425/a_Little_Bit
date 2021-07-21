import React from 'react';
import { Route,Link } from 'react-router-dom';
import '../../../css/TestPage/TestIntro.css';
import NavBar from '../Navbar/Navbar';
import introNext from '../../../assets/images/introNext.svg'

const StartPage = () => {
    return(
        <div className="start-page">
            <NavBar />
            <h1 className="first">Can we</h1>
            <div className="without">
                <h1 className="second">live without</h1>
                <p className="start">디지털 없이 살아갈 수 없는 세상 속,<br/>당신은 얼마나 잘 적응하고 있을까요?<br/>당신의 데이터 사용 습관을 분석해보세요!</p>
                <Link to="/test"><img src={introNext} alt="바로가기"/></Link>
            </div>
            <h1 className="third">digital technology?</h1>
        </div>
        
    );
};

export default StartPage;