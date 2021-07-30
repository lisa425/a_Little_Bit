import React, { useState} from 'react';

const TestPixel = (props) => {
    const [pixel, setPixel] = useState(1)
    const randomPosition = Math.floor(Math.random()*(1-44));
    const renderPixel = () => {

    }
    return (
        <div className="test-pixel">

        </div>
    );
}

export default TestPixel;