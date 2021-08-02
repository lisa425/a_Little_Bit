import React,{ useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import '../../../css/TestPage/TestEarthList.css';
import EarthImg from '../../../assets/images/earth.png';
import Draggable from "react-draggable";

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
    
    //지구 draggable position 설정
    // const [earthPosition, setEarthPosition] = useState({id:0,x:0,y:0});
    // const trackPosition = (event,data) => {
    //     let targetEarth = document.querySelector('#'+id);
    //     setEarthPosition({id:data.id, x: data.x, y: data.y });
    //     targetEarth.positon.x = 
    // }
    // function useDraggable(el){
    //     const [{ x, y },setOffset] = useState({x:0,y:0});

    //     useEffect(()=>{
    //         const handleMouseDown = event => {
    //             const startX = event.pageX - x;
    //             const startY = event.pageY - y;

    //             const handelMouseMove = event =>{
    //                 const newX = event.pageX - startX;
    //                 const newY = event.pageY - startY;
    //                 setOffset({x:newX,y:newY});
    //             };

    //             document.addEventListener("mousemove",handelMouseMove);

    //             document.addEventListener("mouseup",()=>{
    //                 document.removeEventListener("mousemove",handelMouseMove);
    //             },{ once:true }
    //             );
    //         };
    //         el.current.addEventListener("mousedown",handleMouseDown);

    //         return()=>{
    //             el.current.removeEventListener("mousedown",handleMouseDown);
    //         };
    //     },[x,y]);
        
    //     useEffect(()=>{
    //         el.current.style.transform = `translate(${x}px,${y}px)`;
    //     },[x,y]);
    // }

    // const DraggableEarth = ({ children }) => {
    //     const earthRef = useRef(null);
    //     useDraggable(earthRef);

    //     return(
    //         <div className="earth" ref={earthRef}>
    //             {children}
    //         </div>
    //     )
    // }
    const renderEarth = Earth.map((earth,index) => {

        // 지구를 랜덤한 위치에 출력한다. 랜덤한 position 위치 값 설정
        let min = Math.ceil(-10);
        let max = Math.floor(300);
        let valueBottom = Math.floor(Math.random()*(max-min)*15);
        let valueLeft = Math.floor(Math.random()*(max-min));
        let valueTop = Math.floor(Math.random()*(max-min));
        //style={{left:valueLeft, bottom: valueBottom, top:valueTop}}


        return(
            <Draggable>
                <div id={index+1} className="earth-list" style={{left:valueLeft, bottom: valueBottom, top:valueTop}}>
                    <div className="earth-content" key={index+1}>
                        <a href={`/test/earthlist/${earth._id}`}><img src={EarthImg} alt="earth image"/></a>
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