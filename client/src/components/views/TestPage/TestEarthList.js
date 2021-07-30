import React,{ useEffect, useState } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestEarthList.css';
import EarthImg from '../../../assets/images/earth.png';
import moment from 'moment';
import EarthModal from './EarthModal';

const TestEarthList = () => {

    const [Earth,setEarth] = useState([])

    useEffect(() => {
        Axios.get('/api/test/getEarth')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setEarth(response.data.tests)
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
    

    const renderEarth = Earth.map((earth,index) => {
        let min = Math.ceil(100);
        let max = Math.floor(1000)
        let valueTop = Math.floor(Math.random()*(max-min)*5);
        let valueLeft = Math.floor(Math.random()*(max-min));
        // console.log("valueTop:"+valueTop);
        // console.log("vauleLeft:"+valueLeft);
        return <div id={index} className="earth-list" style={{gridColumn:index, left:valueLeft, top: valueTop}}>
            <div className="earth-content" key={index}>
                <a href={`/test/earthlist/${earth._id}`}><img src={EarthImg} alt="earth image"/></a>
                <p className="earth-index">{index+1}</p>

            </div>
        </div>
    })


    return(
        <main className="TestEarthList">
                {renderEarth}
        </main>
    )
}

export default TestEarthList;