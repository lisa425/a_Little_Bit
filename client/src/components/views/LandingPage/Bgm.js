import React,{useRef} from 'react';
import musicIcon from '../../../assets/images/music2.svg';
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
            <button className="bgm-button" onClick={audioPlay}><img src={musicIcon} alt="play music"/></button>
            <audio id="audio" className="bgm-audio" autoPlay>
                <source src={bgm} />
            </audio>
        </div>
    );
};

export default Bgm;