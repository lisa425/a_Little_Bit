import React from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {ReactComponent as LinkIcon} from '../../../assets/images/appIcons/Kakaotalk/link.svg';

const CopyLinkButton = () => {
    const url = "http://www.alittlebit.kr";
    const clickCopy = () => {
        alert("copy!");
    }
    return(
        <CopyToClipboard text={url}>
            <button onClick={clickCopy}>
                <span>링크 복사하기</span>
                <LinkIcon className="share-icon"/>
            </button>
        </CopyToClipboard>
    )
} 

export default CopyLinkButton;
