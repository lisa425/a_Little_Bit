import React,{useState} from 'react';
import '../../../css/ActionPlanPage/ActionPlanEnding.css';
import glitch from '../../../assets/images/actionplans/glitch.gif';
import { Link } from "react-router-dom";

const ActionPlanEnding = () => {
    const [Answer,setAnswer] = useState(true);
    const [click,setClick] = useState(false);

    const selectYesBtn = (e) => {
        setAnswer(true);
        setClick(true);
    }
    const selectNoBtn = (e) => {
        setAnswer(false);
        setClick(true);
        console.log(Answer);
    }

    const showEnding = (answer) => {
        if(answer){
            return(
                <article className="yesEnding">
                    <div className="yes-ending-box">
                        <p><span>지구</span>를<span>변화</span>시키는<br/>
                        <span>609</span>번째<br/>당신의 선택</p>
                    </div>
                    <Link to="/"><button className="home-btn">Home</button></Link>
                </article>
            );
        }else{
            return(
                <article className="noEnding">
                    <div className="no-ending-box">
                        <Link to="/actionplan/ending"><button className="back-btn">back</button></Link>
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
                <img src={glitch} alt="earth glitch motion"/>
            </section>
            {showEnding(Answer)}
        </main>
    )
}

export default ActionPlanEnding;