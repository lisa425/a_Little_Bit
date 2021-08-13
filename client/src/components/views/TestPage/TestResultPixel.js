import React from 'react';
import '../../../css/TestPage/TestResultPixel.css';
import {ReactComponent as MosaicPixel} from '../../../assets/images/pixels/mosaic_pixel.svg'

//앱 range바의 값을 곱한 숫자를 전달받고 색깔도 숫자로 전달받기?
const TestResultPixel = (data,color) => {
    const appColor = ['#FAFF00','#FF00FE','#70FF00','#00FFF9']; //0:노랑,1:핑크,2:초록,3:블루
    
    let MosaicPixelNum = data % 100;
    let FillPixelNum = Math.floor(data / 100);
    let MosaicPixelCounter = [];
    let FillPixelCounter = [];

    for(let i=0;i<MosaicPixelNum;i++){
        MosaicPixelCounter.push(i);
    }
    for(let i=0;i<FillPixelNum;i++){
        FillPixelCounter.push(i);
    }
    
    const renderMosaicPixel = MosaicPixelCounter.map((mosaicPixel,index) => {
        let randomPositionColumn = Math.floor(Math.random()*66-1);
        let randomPositionRow = Math.floor(Math.random()*48-1);
        return( 
            <MosaicPixel class="result-mosaic-pixel"style={{gridColumn:randomPositionColumn,gridRow:randomPositionRow,fill:appColor[color],opacity:'0.3'}}/>
        )
    })
    const renderFillPixel = FillPixelCounter.map((fillPixel,index) => {
        let randomPositionColumn = Math.floor(Math.random()*66-1);
        let randomPositionRow = Math.floor(Math.random()*48-1);
        return( 
            <div class="result-fill-pixel" style={{gridColumn:randomPositionColumn,gridRow:randomPositionRow,backgroundColor:appColor[color],opacity:'0.3'}}></div>
        )
    })

    return (
        <div className="test-pixel-grid-container">
            {renderMosaicPixel}
            {renderFillPixel}
            {/* <MosaicPixel style={{gridColumn:randomPositionColumn,gridRow:randomPositionRow,fill:appColor[color]}}/> */}
        </div>
    );
}

export default TestResultPixel;