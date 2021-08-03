import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestEarthList.css';
import EarthImg from '../../../assets/images/earth.png';
import Draggable from "react-draggable";
//import {Draggable,useDraggabe} from 'use-draggable';

const TestEarthList = () => {

    //지구 리스트
    const [Earth,setEarth] = useState([]);

    useEffect(() => {
        Axios.get('/api/test/getEarth')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setEarth(response.data.tests);
            }else{
                alert('Test get fail');
            }
        })
        return () => {

        }
    },[]);

    // const [modal,setModalOpen] = useState(false);
    // const openModal = () => {
    //     setModalOpen(true);
    // }
    // const closeModal = () => {
    //     setModalOpen(false);
    // }
    const targetEarth = useRef();

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
                    id={index+1} 
                    className="earth-list"
                    style={{left:valueLeft, top:valueBottom}}
                >
                    <div className="earth-content" key={index+1}>
                        {/* <a href={`/test/earthlist/${earth._id}`}> */}
                            <img src={EarthImg} alt="earth image"/>
                        
                        <p className="earth-index">{index+1}</p>

                    </div>
                </div>
            </Draggable>
        )
    })

    return(
        <main className="TestEarthList">
                {renderEarth}
        </main>
    )
}

export default TestEarthList;