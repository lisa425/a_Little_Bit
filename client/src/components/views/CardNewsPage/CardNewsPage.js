import React,{useState,useEffect} from 'react';
import '../../../css/CardNewsPage/CardNewsPage.css'
import {ReactComponent as CardNewsPixel} from '../../../assets/images/cardNews/cardnews_pixel.svg';
import earth from '../../../assets/images/earth.png'
// import netflix from '../../../assets/images/cardNews/netflix.gif';
// import youtube from '../../../assets/images/cardNews/youtube.gif';
// import facebook from '../../../assets/images/cardNews/facebook.gif';
// import twitter from '../../../assets/images/cardNews/twitter.gif';
// import instagram from '../../../assets/images/cardNews/instagram.gif';
// import kakaotalk from '../../../assets/images/cardNews/kakaotalk.gif';
// import email from '../../../assets/images/cardNews/email.gif';
// import zoom from '../../../assets/images/cardNews/zoom.gif';
// import smartphone from '../../../assets/images/cardNews/smartphone.gif';
// import datacenter from '../../../assets/images/cardNews/datacenter.gif';



//TODO: 이미지 모달 슬라이드, 카드뉴스 받아오면 삽입!
const CardNewsPage = () => {

    const images = [
        earth,
        earth,
        earth,
        earth,
        earth,
        earth,
        earth,
        earth,
        earth
        // instagram,
        // netflix,
        // twitter,
        // facebook,
        // kakaotalk,
        // email,
        // zoom,
        // youtube,
        // smartphone,
        // datacenter
    ]
    const [index,setIndex] = useState(0);
    const [displayModal,setDisplayModal] = useState(false);
    const next = () => {
        setIndex((i)=>(i+1)%images.length);
        console.log(index)
    };
    const prev = () => {
        setIndex(
            (i) => (((i - 1)%images.length)+images.length)%images.length
        );
        console.log(index)
    };
    const onClickOutside = (e) => {
        if (e.target.localName !== "button"){
            console.log("onClickOutside!")
            setDisplayModal(true);
        }
        console.log(displayModal)
    };
    const showModal = () => {
        setDisplayModal(true);
        console.log(displayModal)
    };
    useEffect(()=>{
        window.addEventListener("click",onClickOutside);
        console.log("addEvent!")
        return() => window.removeEventListener("click",onClickOutside);
    },[]);

    //TODO: map으로 카드뉴스 넣기
    return(
        <main className="cardNews">
            <h2>Fun Facts</h2>
            <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
            <div className="cardnews-container">
                <div className="cardnews-item" ><img src={images[0]} onClick={showModal} /></div>
                <div className="cardnews-item" ><img src={images[1]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[2]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[3]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[4]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[5]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[6]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[7]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[8]} onClick={showModal}/></div>
                <div className="cardnews-item" ><img src={images[9]} onClick={showModal}/></div>
            </div>
            {displayModal && (
                <div className="cardnews-modal"style={{position:"absolute",top:20,left:20,backgroundColor:"white"}}>
                    <button onClick={prev}>&lt;</button>
                    <img src={images[index]} style={{width:'200px'}}/>
                    <button onClick={next}>&gt;</button>
                </div>
            )}
            <CardNewsPixel className="card-news-pixel"/>

        </main>
    )
}

export default CardNewsPage;