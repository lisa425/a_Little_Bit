import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestEarthList.css';
import "../../../css/TestPage/EarthModal.css";
import EarthImg from '../../../assets/images/earth/earth.png';
import Draggable from "react-draggable";
import moment from 'moment';
import { Link } from "react-router-dom";
import {ReactComponent as Arrow} from '../../../assets/images/earth/Arrow.svg'
import {ReactComponent as EarthIcon} from '../../../assets/images/earth/earth_icon.svg'

const TestEarthList = () => {

    //지구 리스트
    const [Earth,setEarth] = useState([]);
    const [cookie,setCookie] = useState({});

    useEffect(() => {
        Axios.get('/api/test/getEarth')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setEarth(response.data.tests);
                setCookie(response.data.cookie);
            }else{
                alert('Test get fail');
            }
        })
    },[]);

    //message 내용 저장
    const userMessage = useRef();
    const submitTicket = () => {
        const newMessage = {
            message:userMessage.current.value,
            _id:cookie._id
        };
        Axios.post('/api/test/getmessage',newMessage)
        .then(response => {
            if(response.data.success){
                console.log(response.data);
            }else{
                alert('테스트 실패');
            }
        })
    }
    
   
    // useEffect(()=>{
    //     Axios.post('/api/test/getEarthDetail',variab)
    // })
    

    
    const [earthModal,setEarthModal] = useState(false);
    const targetEarth = useRef();
    const showTargetEarthInfo = (e,num) => {
        <Modal earth={e} index={num} modal={earthModal}/>
        //const variable = {earthId:e.current.earth_id};
        

        // Axios.post('/api/test/getEarthDetail',variable)
        // .then(response => {
        //     if(response.data.success){
        //         console.log(response.data);
        //         setEarthDetail(response.data.earthDetail);

        //     }else{
        //         alert('fail');
        //     }
        // });
    }

    const renderEarth = Earth.map((earth,index) => {
        // 지구를 랜덤한 위치에 출력한다. 랜덤한 position 위치 값 설정
        let min = Math.ceil(-10);
        let max = Math.floor(3000);
        let valueBottom = Math.floor(Math.random()*(max-min)*2);
        let valueLeft = Math.floor(Math.random()*(max-min)/2);
        let valueTop = Math.floor(Math.random()*(max-min));
        //style={{left:valueLeft, bottom: valueBottom, top:valueTop}}

        return(
            <Draggable>
                <div 
                    ref={targetEarth}
                    id={index} 
                    className="earth-list"
                    style={{left:valueLeft, top:valueBottom}}
                >
                    <div className="earth-content" key={index+1} onClick={showTargetEarthInfo(earth,index)}>
                        <img src={EarthImg} alt="earth image"/>
                        {/* <button onClick={}> */}
                        <a href={`/guestbook/${earth._id}`}>
                            <p className="earth-index">{index+1}</p>
                         </a>
                        {/* </button> */}
                    </div>
                </div>
            </Draggable>
        )
    })

    return(
        <main className="TestEarthList">
            <section className="guestbook">
                <h1>Guest book</h1>
                <p>지구에게 하고싶은 말을 적어주세요!</p>
                <article className="earth-ticket">
                    <h3 className="title">
                        <span>Code</span>
                        <span>01</span>
                    </h3>
                    <div className="name">
                        <span>Name</span>
                        <span>{cookie.name}</span>
                    </div>
                    <div className="location">
                        <span>Location</span>
                        <span>{cookie.location}</span>
                    </div>
                    <div className="result">
                        <EarthIcon />
                        <div className="result-data">
                            <span>{cookie.result}kg</span>
                            <span>CO2 eq</span>
                        </div>
                    </div>
                    <div className="message">
                        <textarea placeholder="Type your message!" ref={userMessage}></textarea>
                    </div>
                    <div className="created_at">
                        <div className="date">
                            <span>Date /</span>
                            <span>{moment(cookie.createdAt).format("YY/MM/DD")}</span>
                        </div>
                        <hr/>
                        <div className="time">
                            <span>Time /</span>
                            <span>{moment(cookie.createdAt).format("HH:mm:ss")}</span>
                        </div>
                    </div>
                    <button className="take" onClick={submitTicket}>Take your<span><Arrow/></span>Planet!</button>
                </article>
            </section>
            {renderEarth}
        </main>
    )
}

const Modal = (props) => {
    return(
        <div className='earth-modal'>
            <div className="modal-container">
                <div className="modal-box">
                    <section className="earth-code">
                        <div><span>Code</span> <span className="code-num">{props.index}</span></div>
                        <hr/>
                    </section>

                    <img src={EarthImg} alt="earth image"/>

                    <section className="earth-info">
                        <div className="earth-info-name">
                            <span>Name</span> <span className="value">{props.earth.name}</span>
                        </div>
                        <div className="earth-info-location">
                            <p>Location</p>
                            <hr/>
                            <p className="value">{props.earth.location}</p>
                        </div>
                        <div className="earth-info-message">
                            <p>Message</p>
                            <hr/>
                            <p className="value">"신기하ㅏ당"</p>
                        </div>
                        <div className="earth-info-date">
                            <span>Date</span> <span className="value created-at">{moment(props.earth.createdAt).format("YYYY.MM.DD HH:mm:ss")}</span>
                        </div>
                    </section>
                </div>
                <Link to="/guestbook"><button id="closeModal" className="close-modal" type="button">Back</button></Link>
            </div>
        </div>
    )
}

export default TestEarthList;