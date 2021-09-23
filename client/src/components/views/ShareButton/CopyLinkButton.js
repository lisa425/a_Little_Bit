import React from 'react';
import {ReactComponent as LinkIcon} from '../../../assets/images/appIcons/Kakaotalk/link.svg';

const CopyLinkButton = () => {
    
    return(
        <button id="kakao-link-button">
            <span>링크 복사하기</span>
            <LinkIcon className="share-icon"/>
        </button>
    )
} 

export default CopyLinkButton;
