import React,{useState} from 'react';
import '../../../css/ActionPlanPage/ActionPlanEnding.css';
import glitch from '../../../assets/images/actionplans/glitch.gif';

const ActionPlanEnding = () => {
    const [Answer,setAnswer] = useState(true);
    const [click,setClick] = useState(false);

    const selectYesBtn = (e) => {
        setAnswer(true);
        setClick(true);
        showEnding(Answer);
        
    }
    const selectNoBtn = (e) => {
        setAnswer(false);
        setClick(true);
        console.log(Answer);
        showEnding(Answer);
        
    }

    const showEnding = (answer) => {
        if(answer){
            return;
        }else{
            return;
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
            {showEnding}
        </main>
    )
}

export default ActionPlanEnding;