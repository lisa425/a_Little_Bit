import React,{ useEffect } from 'react';
import axios from 'axios';
import { Route,Link } from 'react-router-dom';
import '../../../css/LandingPage/LandingPage.css';
import maintitle from '../../../assets/images/main_title.gif';
import NavBar from '../Navbar/Navbar';
//import StartPage from './DataTest/StartPage';

const LandingPage = () => {
    useEffect(() => {
        axios.get('api/hello')
        .then(response => console.log(response.data))
    },[])
    return(
        <div className="Mainpage">
            <NavBar />
            <img className="main_title" src={maintitle} alt="logo"/>
            <button className="start-btn"><Link to="/test">start</Link></button>
        </div> 
    );
};

export default LandingPage;