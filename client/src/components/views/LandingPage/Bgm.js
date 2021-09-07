import React,{useRef} from 'react';
import '../../../css/LandingPage/Bgm.css';
import bgm from '../../../assets/music/bgm.mp3';

const Bgm = () => {
    const audioRef = useRef();
    const audioPlay = (e) => {
        const audio = document.getElementById('audio');
        audio.play();
        audioRef.current.style.display="none";
    }
    return(
        <div className="bgm" ref={audioRef}>
            <button className="bgm-button" onClick={audioPlay}>play</button>
            <audio id="audio" className="bgm-audio" autoplay>
                <source src={bgm} />
            </audio>
        </div>
    );
};

export default Bgm;