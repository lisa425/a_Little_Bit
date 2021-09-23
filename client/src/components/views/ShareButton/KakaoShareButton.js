import React,{useEffect} from 'react';
import {ReactComponent as KakaoIcon} from '../../../assets/images/appIcons/Kakaotalk/only_icon.svg';
import shareImg from '../../../assets/images/share/share_img.png';

const KakaoShareButton = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const shareKakao = () => {
        const Kakao = window.Kakao;

        Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "a Little Bit!",
                description: "디지털 없이 살아갈 수 없는 세상 속,",
                imageUrl: 'http://drive.google.com/uc?export=view&id=1J85XPPcfqDoabAZGlZMyAVUDdhKkNuV3',
                link: {
                mobileWebUrl: "http://www.alittlebit.kr",
                androidExecParams: "test",
                },
            },
            buttons: [
                {
                title: "바로가기",
                link: {
                    mobileWebUrl: "http://www.alittlebit.kr",
                },
                },
            ],
        });
        }

    return(
        <button id="kakao-share-button" onClick={shareKakao}>
            <span>테스트 공유하기</span>
            <KakaoIcon className="share-icon"/>
        </button>
    )
} 

export default KakaoShareButton;
