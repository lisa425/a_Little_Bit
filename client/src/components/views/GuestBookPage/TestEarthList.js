import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/GuestBookPage/TestEarthList.css';
import "../../../css/GuestBookPage/EarthModal.css";
import EarthModal from "./EarthModal";
import EarthImg from '../../../assets/images/earth/earth.png';
import Draggable from "react-draggable";
import moment from 'moment';
import {ReactComponent as Arrow} from '../../../assets/images/earth/Arrow.svg'
import {ReactComponent as EarthIcon} from '../../../assets/images/earth/earth_icon.svg'
import {ReactComponent as Search} from '../../../assets/images/earth/search.svg';

const TestEarthList = (props) => {

    //지구 리스트 세팅
    const [Earth,setEarth] = useState([]);
    const [myTest,setMyTest] = useState({});
    const [isMessage,setIsMessage] = useState(true);
    const [submit,setSubmit] = useState(true)
    const [displayModal,setDisplayModal] = useState(false);
    const [displayMyModal,setDisplayMyModal] = useState(false);
    const [isCookie,setIsCookie] = useState(true);

    useEffect(() => {
        Axios.get('/api/test/getEarth')
        .then(response => {
            if(response.data.success){
                if(response.data.cookie === undefined){
                    setIsMessage(false);
                    setIsCookie(false);
                    setEarth(response.data.tests);
                }else{
                    setIsCookie(true);
                    setEarth(response.data.tests);
                    setMyTest(response.data.mytest);
                    if(response.data.mytest.message === undefined){
                        setIsMessage(false);
                        setSubmit(false);
                    }else{
                        setIsMessage(true);
                    }
                }
            }else{
                console.log('Test get fail');
            }
        })
    },[]);


    //Modal을 세팅한다. 기록별 정보를 모달로 전달 
    //내 정보 모달은...따로 정보를 전달한다..
    const earthIdArray = [];
    const [earthId,setEarthId] = useState('');

    const showModal = (e) => {
        setEarthId(earthIdArray[e.currentTarget.id]);
        setDisplayModal(true);
    }
    const closeModal = () => {
        setDisplayModal(false);
    }
    const closeMyModal = () => {
        setDisplayMyModal(false);
    }


    //search earth:지구를 검색한다.
    const searchValue = useRef();
    const onSearchSubmit = (e) => {
        e.preventDefault();
        let keyword = { keyword : searchValue.current.value };
        Axios.post('/api/test/searchEarth',keyword)
        .then(response => {
            if(response.data.success){
                setEarth(response.data.searchList);
            }else{
                console.log('Test search is fail');
            }
        })
    }

    //message 내용 저장
    const userMessage = useRef();
    const ticketRef = useRef();
    const submitTicket = () => {
        const newMessage = {
            message:userMessage.current.value,
            _id:myTest._id
        };
        Axios.post('/api/test/getmessage',newMessage)
        .then(response => {
            if(response.data.success){
                console.log('success submit message');
            }else{
                console.log('submit message is fail');
            }
        }).catch(err=>console.log(err));
        myTest.message = newMessage.message;
        setIsMessage(true);
        setSubmit(true);
        setDisplayMyModal(true);
        ticketRef.current.style.display = "none";
    }

    const alreadySubmit = () => {
        alert('이미 제출된 티켓입니다.');
    }

    //티켓 오픈 이벤트
    const openTicket = useRef();
    const openTicketHandler = (e) => {
        openTicket.current.style.display="none";
        ticketRef.current.style.bottom="15vh";
    }

    // 지구를 랜덤한 위치에 출력한다. 
    const renderEarth = Earth.map((earth,index) => {
        //랜덤한 position 위치 값 설정
        let min = Math.ceil(-10);
        let max = Math.floor(3000);
        let valueBottom = Math.floor(Math.random()*(max-min)*2);
        let valueLeft = Math.floor(Math.random()*(max-min)/2);

        //id를 배열에 저장
        earthIdArray.push(earth._id);

        return(
            <Draggable key={index}>
                <div 
                    className="earth-list"
                    style={{left:valueLeft, top:valueBottom}}
                >
                    <div className="earth-content" >
                        <img src={EarthImg} alt="earth"/>
                        <button id={index} className="earth-index" onClick={showModal}>{earth.count}</button>
                    </div>
                </div>
            </Draggable>
        )
    })

    return(
        <main className="TestEarthList">
            {/* ticket form */}
            <section className="guestbook" ref={ticketRef}>
                <h1>Guest book</h1>
                <p>지구에게 하고싶은 말을 적어주세요!</p>
                <button className="open-ticket" ref={openTicket} onClick={openTicketHandler}><Arrow className="open-arrow"/></button>
                {!isMessage && 
                <article className="earth-ticket">
                    {!isCookie && 
                        <div className="prevent-ticket">
                            <p>사용량 테스트를 마치고<br/>방명록을 작성해 주세요!</p>
                        </div>
                    }
                    <h3 className="title">
                        <span>Code</span>
                        <span>{myTest.count}</span>
                    </h3>
                    <div className="name">
                        <span>Name</span>
                        <span>{myTest.name}</span>
                    </div>
                    <div className="location">
                        <span>Location</span>
                        <span>{myTest.location}</span>
                    </div>
                    <div className="result">
                        <EarthIcon />
                        <div className="result-data">
                            <span>{myTest.result}kg</span>
                            <span>CO2 eq</span>
                        </div>
                    </div>
                    <div className="message">
                        <div className={isMessage?"message-text":"hide"}>{myTest.message}</div>
                        <textarea className={isMessage?"hide":"textarea"} placeholder="Type your message!" ref={userMessage} maxLength='150'></textarea>
                    </div>
                    <div className="created_at">
                        <div className="date">
                            <span>Date /</span>
                            <span>{moment(myTest.createdAt).format("YY/MM/DD")}</span>
                        </div>
                        <hr/>
                        <div className="time">
                            <span>Time /</span>
                            <span>{moment(myTest.createdAt).format("HH:mm:ss")}</span>
                        </div>
                    </div>
                    <button className="take" onClick={submit?alreadySubmit:submitTicket}>Take your<span><Arrow/></span>Planet!</button>
                </article>}
            </section>

            {/* rendering earth */}
            {renderEarth}

            {/* display modals */}
            {displayModal && (
                <div className="earth-modal-wrap">
                    <EarthModal id={earthId} classsname='earth-modal' />
                    <button id="closeModal" className="close-modal" type="button" onClick={closeModal}>Back</button>
                </div>
            )}

            {/* when message is submitted, display my earth information */}
            {displayMyModal && (
                <div className="earth-modal-wrap">
                    <div className='earth-modal'>
                        <div className="modal-container">
                        <div className="modal-box">
                            <section className="earth-code">
                                <div><span>Code</span> <span className="code-num">{myTest.count}</span></div>
                                <hr/>
                            </section>

                            <img src={EarthImg} alt="earth image"/>

                            <section className="earth-info">
                                <div className="earth-info-name">
                                    <span>Name</span> <span className="value">{myTest.name}</span>
                                </div>
                                <div className="earth-info-location">
                                    <p>Location</p>
                                    <hr/>
                                    <p className="value">{myTest.location}</p>
                                </div>
                                <div className="earth-info-message">
                                    <p>Message</p>
                                    <hr/>
                                    <p className="value">{myTest.message}</p>
                                </div>
                                <div className="earth-info-date">
                                    <span>Date</span> <span className="value created-at">{moment(myTest.createdAt).format("YYYY.MM.DD HH:mm:ss")}</span>
                                </div>
                            </section>
                        </div>
                    </div>
                    </div>
                    <button id="closeModal" className="close-modal" type="button" onClick={closeMyModal}>Back</button>
                </div>
            )}

            {/* search form */}
            {isMessage && 
            <form method="post" action="/api/test/searchEarth" onSubmit={onSearchSubmit} className="search-form">
                <input type="text" name="searchText" ref={searchValue} placeholder="find yours !" />
                <button type="submit" onClick={onSearchSubmit}><Search/></button>
            </form>}
        </main>
    )
}



export default TestEarthList;