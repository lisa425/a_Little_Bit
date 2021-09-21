import React,{useState,useEffect} from 'react';
import '../../../css/ActionPlanPage/ActionPlanEnding.css';
import noGlitch from '../../../assets/images/actionplans/no-glitch.mp4';
import yesGlitch from '../../../assets/images/actionplans/yes-glitch.mp4';
import { Link } from "react-router-dom";
import Axios from 'axios';

const ActionPlanEnding = () => {

    const [count,setCount] = useState(0);

    //test 쿠키 정보를 요청한다.
    useEffect(() => {
        Axios.get('/api/test/getCount')
        .then(response => {
            if(response.data.success){
                setCount(response.data.myCount);
            }else{
                alert('Getting count is Fail');
            }
        })


    },[]);

    const [Answer,setAnswer] = useState(true);
    const [click,setClick] = useState(false);

    const selectYesBtn = (e) => {
        setAnswer(true);
        setClick(true);
    }
    const selectNoBtn = (e) => {
        setAnswer(false);
        setClick(true);
    }

    const reload = () => {
        window.location.reload();
    }

    const showEnding = (answer) => {
        if(answer){
            return(
                <article className="yesEnding">
                    <div className="yes-ending-box">
                        <p><span>지구</span>를 <span>변화</span>시키는<br/>
                        <span>{count}</span>번째<br/>당신의 선택</p>
                    </div>
                    <Link to="/guestbook"><button className="home-btn">Guestbook</button></Link>
                </article>
            );
        }else{
            return(
                <article className="noEnding">
                    <div className="no-ending-box">
                        <button className="back-btn" onClick={reload}>← back</button>
                    </div>
                </article>
            );
        }
    }
    return(
        <main className="ActionPlanEnding">
            <section className={click ? "hide":"ask-withus"}>
                <div className="ask-title">
                    <h2>Digital Co2 Free!</h2>
                    <h3>함께 할까요?</h3>
                </div>
                <div className="select-btn">
                    <button className="yes-btn" onClick={selectYesBtn}>yes</button>
                    <button className="no-btn" onClick={selectNoBtn}>no</button>
                </div>
            </section>

            <section className={click? "glitch-motion" : "hide"}>
                {Answer &&
                    <video autoPlay muted playsInline>
                        <source src={yesGlitch} type="video/mp4"/>
                    </video>
                }
                {!Answer && 
                    <video autoPlay muted playsInline>
                        <source src={noGlitch} type="video/mp4"/>
                    </video>
                }
            </section>
            {showEnding(Answer)}
        </main>
    )
}

export default ActionPlanEnding;