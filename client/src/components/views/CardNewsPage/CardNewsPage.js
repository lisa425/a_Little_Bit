import React from 'react';
import '../../../css/CardNewsPage/CardNewsPage.css'
import {ReactComponent as CardNewsPixel} from '../../../assets/images/cardNews/cardnews_pixel.svg';
import earth from '../../../assets/images/earth.png'
const CardNewsPage = () => {

    //map으로 카드뉴스 넣기
    return(
        <main className="cardNews">
            <h2>Fun Facts</h2>
            <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
            <div className="cardnews-container">
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
                <div className="cardnews-item"><img src={earth}/></div>
            </div>
            <CardNewsPixel className="card-news-pixel"/>

        </main>
    )
}

export default CardNewsPage;