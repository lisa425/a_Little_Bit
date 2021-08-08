import React from 'react';
import '../../../css/CardNewsPage/CardNewsPage.css'
import {ReactComponent as CardNewsPixel} from '../../../assets/images/cardNews/cardnews_pixel.svg';
import CardNewsPixelPng from '../../../assets/images/cardNews/cardnews_pixel.png';
const CardNewsPage = () => {

    //map으로 카드뉴스 넣기
    const cardNewsList = {
        "netflix":"url"
    }
    const cardNewsContents = () => {
        return(
            <div className="card-img" >
                <img src="" alt="thumbnail"/>
                HIHIHIHI!!!
            </div>
        )
    }
    return(
        <main className="cardNews">
            <h2>Fun Facts</h2>
            <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
            <div className="cardnews-container">
                {cardNewsContents}
            </div>
            <img src={CardNewsPixelPng} className="card-news-pixel"/>

        </main>
    )
}

export default CardNewsPage;