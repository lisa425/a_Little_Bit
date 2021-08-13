import React,{ useEffect } from 'react';
import axios from 'axios';
import { Route,Link } from 'react-router-dom';
import '../../../css/LandingPage/LandingPage.css';
import maintitle from '../../../assets/images/main_title.gif';
import NavBar from '../Navbar/Navbar';

const LandingPage = () => {
    return(
        <div className="Mainpage">
            <img className="main_title" src={maintitle} alt="logo"/>
            <button className="start-btn"><Link to="/testintro">start</Link></button>
        </div> 
    );
};

export default LandingPage;