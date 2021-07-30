import React, { useState,useEffect } from 'react';
import "../../../css/TestPage/EarthModal.css";
import EarthImg from '../../../assets/images/earth.png';
import TestEarthList from './TestEarthList';
import Axios from 'axios';
import moment from 'moment';
import { Link } from "react-router-dom";

const EarthModal = (props) => {
    const earthId = props.match.params.earthId;
    const variable = {earthId:earthId};


    const [earthDetail, setEarthDetail] = useState([])
    useEffect(()=>{
        Axios.post('/api/test/getEarthDetail',variable)
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setEarthDetail(response.data.earthDetail);

            }else{
                alert('fail');
            }
        });
    },[]);

    console.log(earthDetail);
    
    return(
        <div className='earth-modal'>
            <div className="modal-container">
            <div className="modal-box">
                <section className="earth-code">
                    <div><span>Code</span> <span className="code-num">{earthDetail.index}</span></div>
                    <hr/>
                </section>

                <img src={EarthImg} alt="earth image"/>

                <section className="earth-info">
                    <div className="earth-info-name">
                        <span>Name</span> <span className="value">{earthDetail.name}</span>
                    </div>
                    <div className="earth-info-location">
                        <p>Location</p>
                        <hr/>
                        <p className="value">{earthDetail.location}</p>
                    </div>
                    <div className="earth-info-message">
                        <p>Message</p>
                        <hr/>
                        <p className="value">"신기하ㅏ당"</p>
                    </div>
                    <div className="earth-info-date">
                        <span>Date</span> <span className="value created-at">{moment(earthDetail.createdAt).format("YYYY.MM.DD HH:mm:ss")}</span>
                    </div>
                </section>
            </div>
            <Link to="/test/earthlist"><button id="closeModal" className="close-modal" type="button">Back</button></Link>
        </div>
        </div>
    )
}

export default EarthModal