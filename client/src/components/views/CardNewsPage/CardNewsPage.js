import React,{useState,useRef} from 'react';
import '../../../css/CardNewsPage/CardNewsPage.css'
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
    const bodyRef = useRef();

    const next = () => {
        setIndex((index)=>(index+1)%images.length);
    };
    const prev = () => {
        setIndex(
            (index) => (((index - 1)%images.length)+images.length)%images.length
        );
    };
    const onClickBack = (e) => {
        bodyRef.current.className="cardNews";
        setDisplayModal(false);
    };

    const showModal = (e) => {
        bodyRef.current.className="cardNews-none-scroll";
        setIndex(e.currentTarget.id);
        setDisplayModal(true);
    };

    

    const renderCardNews = images.map((cardnews,index) => {
        return(
            <div className="cardnews-item" key={index}>
                <img ref={cardNewsRef} id={index} src={cardnews} onClick={showModal} alt="cardnews thumbnail"/>
            </div>
        )
    });

    return(
        <main className="cardNews" ref={bodyRef}>
            <h2>Fun Facts</h2>
            <div className="subtitle">
                <p>각 서비스 별 카드뉴스를 통해,&nbsp;</p>
                <p>디지털 탄소 배출량을 한눈에 파악해보세요</p>
            </div>
            <div className="cardnews-container">
                {renderCardNews}
            </div>
            {displayModal && (
                <div className="cardnews-modal" ref={modalRef}>
                    <button className="prev-btn" onClick={prev}><Before /></button>
                    <img src={images[index]} alt="cardnews"/>
                    <button className="next-btn" onClick={next}><Next /></button>
                    <button className="back-btn" onClick={onClickBack}>back</button>
                </div>
            )}
        </main>
    )
}

export default CardNewsPage;