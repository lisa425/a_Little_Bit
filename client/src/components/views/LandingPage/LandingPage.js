import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LandingPage/LandingPage.css';
import mainvideo from '../../../assets/images/main_background.mp4'
import {ReactComponent as Logo } from '../../../assets/images/navbar/logo.svg';

const LandingPage = () => {
    return(
        <div className="Mainpage">
            <Logo className="main_title"/>
            <button className="start-btn">
                <Link to="/testintro">start</Link>
            </button>
            <div className="video-area">
                <video className="back-video" autoPlay muted loop>
                    <source src={mainvideo} type="video/mp4"/>
                </video>
            </div>
        </div> 
    );
};

export default LandingPage;