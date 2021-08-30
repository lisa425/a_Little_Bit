import React, { useState,useEffect} from 'react';
import "../../../css/GuestBookPage/EarthModal.css";
import EarthImg from '../../../assets/images/earth/earth.png';
import Axios from 'axios';
import moment from 'moment';

const EarthModal = (props) => {
    const earthId = props.id;
    const variable = {earthId:earthId};
    const [earthDetail, setEarthDetail] = useState([])
    useEffect(()=>{
        Axios.post('/api/test/getEarthDetail',variable)
        .then(response => {
            if(response.data.success){
                setEarthDetail(response.data.earthDetail);
            }else{
                alert('fail');
            }
        });
    },[]);
    
    let earthIndex = parseInt(props.index);
    return(
        <div className='earth-modal'>
            <div className="modal-container">
            <div className="modal-box">
                <section className="earth-code">
                    <div><span>Code</span> <span className="code-num">{earthIndex+1}</span></div>
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
                        <p className="value">{earthDetail.message}</p>
                    </div>
                    <div className="earth-info-date">
                        <span>Date</span> <span className="value created-at">{moment(earthDetail.createdAt).format("YYYY.MM.DD HH:mm:ss")}</span>
                    </div>
                </section>
            </div>
        </div>
        </div>
    )
}

export default EarthModal