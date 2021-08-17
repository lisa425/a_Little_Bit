import React from 'react';
import { Link } from "react-router-dom";

const EndingYes = () => {
    return(
        <section className="yes-ending">
            <img src="" alt="earth image"/>
            <p><span>지구</span>를<span>변화</span>시키는<br/><span>609</span>번째<br/>당신의 선택</p>
            <Link to="/"><button>Home</button></Link>
        </section>
    )
}

export default EndingYes;