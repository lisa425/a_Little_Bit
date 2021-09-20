import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LandingPage/LandingPage.css';
import mainvideo from '../../../assets/images/main_background.mp4'
import {ReactComponent as Logo } from '../../../assets/images/navbar/logo.svg';
import Axios from 'axios';

const LandingPage = () => {
    const [count,setCount] = useState(0);

    //test 쿠키 정보를 요청한다.
    useEffect(() => {
        Axios.get('/api/test/getCount')
        .then(response => {
            if(response.data.success){
                setCount(response.data.count);
            }else{
                alert('Getting count is Fail');
            }
        })


    },[]);

    return(
        <div className="Mainpage">
            <Logo className="main_title"/>
            <button className="start-btn">
                <Link to="/testintro">start</Link>
            </button>
            <p className="participant">지금까지 {count}명이 참여했습니다.</p>
            <div className="video-area">
                <video className="back-video" autoPlay muted loop>
                    <source src={mainvideo} type="video/mp4"/>
                </video>
            </div>
        </div> 
    );
};

export default LandingPage;