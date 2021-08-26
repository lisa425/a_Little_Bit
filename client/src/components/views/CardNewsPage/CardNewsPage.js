import React,{useState,useEffect,useRef} from 'react';
import '../../../css/CardNewsPage/CardNewsPage.css'
import {ReactComponent as CardNewsPixel} from '../../../assets/images/cardNews/cardnews_pixel.svg';
import {ReactComponent as Next } from '../../../assets/images/next.svg';
import {ReactComponent as Before } from '../../../assets/images/before.svg';
import instagram from '../../../assets/images/cardNews/cardNewsFile/instagram.gif'
import email from '../../../assets/images/cardNews/cardNewsFile/email.gif'
import zoom from '../../../assets/images/cardNews/cardNewsFile/zoom.gif'
import youtube from '../../../assets/images/cardNews/cardNewsFile/youtube.gif'
import datacenter from '../../../assets/images/cardNews/cardNewsFile/datacenter.gif'
import kakaotalk from '../../../assets/images/cardNews/cardNewsFile/kakaotalk.gif'
import netflix from '../../../assets/images/cardNews/cardNewsFile/netflix.gif'
import twitter from '../../../assets/images/cardNews/cardNewsFile/twitter.gif'
import facebook from '../../../assets/images/cardNews/cardNewsFile/facebook.gif'
import smartphone from '../../../assets/images/cardNews/cardNewsFile/smartphone.gif'


const CardNewsPage = () => {
    
    const images = [
        instagram,netflix,twitter,facebook,kakaotalk,email,zoom,youtube,smartphone,datacenter
    ]

    const [index,setIndex] = useState(0);
    const [displayModal,setDisplayModal] = useState(false);
    const modalRef = useRef();
    const cardNewsRef = useRef();
    const next = () => {
        setIndex((index)=>(index+1)%images.length);
    };
    const prev = () => {
        setIndex(
            (index) => (((index - 1)%images.length)+images.length)%images.length
        );
    };
    const onClickOutside = (e) => {
        if (e.target.localName !== "button" && e.target.localName !== "svg" && e.target.localName !== "path"){
            setDisplayModal(false);
        }else{
            return;
        }
    };
    const showModal = (e) => {
        setIndex(e.currentTarget.id);
        setDisplayModal(true);
    };

    const renderCardNews = images.map((cardnews,index) => {
        return(
            <div className="cardnews-item">
                <img ref={cardNewsRef} id={index} src={cardnews} onClick={showModal}/>
            </div>
        )
    });

    return(
        <main className="cardNews">
            <h2>Fun Facts</h2>
            <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
            <div className="cardnews-container">
                {renderCardNews}
            </div>
            {displayModal && (
                <div className="cardnews-modal" ref={modalRef} onClick={onClickOutside}>
                    <button className="prev-btn" onClick={prev}><Before /></button>
                    <img src={images[index]}/>
                    <button className="next-btn" onClick={next}><Next /></button>
                </div>
            )}
            <CardNewsPixel className="card-news-pixel"/>
        </main>
    )
}

export default CardNewsPage;