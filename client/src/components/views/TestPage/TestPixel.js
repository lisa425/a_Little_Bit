import React, { useState} from 'react';
import '../../../css/TestPage/TestPixel.css';

//앱 range바의 값을 곱한 숫자를 전달받고 색깔도 숫자로 전달받기?
const TestPixel = (data,color) => {
    const [pixel, setPixel] = useState(1)
    const randomPositionColumn = Math.floor(Math.random()*(1-66));
    const randomPositionRow = Math.floor(Math.random()*(1-45));
    const appColor = ['#FAFF00','#FF00FE','#70FF00','#00FFF9']; //노랑,핑크,초록,블루 순


    const renderPixel = () => {
        //reduce:누적값 이용
        return(
            <div class="test-pixel-item" style={{gridColumn:randomPositionColumn,gridRow:randomPositionRow,backgroundColor:appColor}}></div>
        )
    }
    return (
        <div className="test-pixel-grid-container">
            {renderPixel}
        </div>
    );
}

export default TestPixel;