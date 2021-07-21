import React,{ useEffect } from 'react';
import axios from 'axios';
import { Route,Link } from 'react-router-dom';
//import '../../../css/LandingPage/LandingPage.css';
//import NavBar from '../NavBar/NavBar';
//import StartPage from './DataTest/StartPage';

const LandingPage = () => {
    useEffect(() => {
        axios.get('api/hello')
        .then(response => console.log(response.data))
    },[])
    return(
        <div>Landingpage
        {/*
        <div className="Mainpage">
            <NavBar />
            <img className="main_title" src="../../../assets/images/main_title.gif" alt="logo"/>
            <button className="start-btn"><Link to="/startpage">start</Link></button>
        </div> 
        */}
        </div>
    );
};

export default LandingPage;