import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LandingPage/LandingPage.css';
import maintitle from '../../../assets/images/main_title.gif';
import mainvideo from '../../../assets/images/main_background.mp4'
import {ReactComponent as Logo } from '../../../assets/images/navbar/logo.svg';

const LandingPage = () => {
    return(
        <div className="Mainpage">
            <Logo className="main_title"/>
            {/* <img className="main_title" src={Logo} alt="logo"/> */}
            <button className="start-btn"><Link to="/testintro">start</Link></button>
            <video className="back-video" autoplay muted>
                <source src={mainvideo} type="video/mp4"/>
            </video>
        </div> 
    );
};

export default LandingPage;