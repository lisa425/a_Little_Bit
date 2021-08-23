import React,{useState,useRef} from 'react';
import { Link } from "react-router-dom";
import '../../../css/ActionPlanPage/ActionPlanPage.css';
//background img
import PolarBear from '../../../assets/images/actionplans/bear_img.png';
import Turtle from '../../../assets/images/actionplans/turtle_img.png';
import Panda from '../../../assets/images/actionplans/panda_img.png';
//next button img
import { ReactComponent as Next } from '../../../assets/images/next.svg';
//action list icon
import { ReactComponent as Cloud } from '../../../assets/images/actionplans/actionplanicon/cloud.svg';
import { ReactComponent as Kakaotalk } from '../../../assets/images/actionplans/actionplanicon/kakaotalk.svg';
import { ReactComponent as Email } from '../../../assets/images/actionplans/actionplanicon/email.svg';
import { ReactComponent as SNS } from '../../../assets/images/actionplans/actionplanicon/instagram.svg';
import { ReactComponent as Netflix} from '../../../assets/images/actionplans/actionplanicon/netflix.svg';
import { ReactComponent as Zoom } from '../../../assets/images/actionplans/actionplanicon/zoom.svg';
import { ReactComponent as Brightness } from '../../../assets/images/actionplans/actionplanicon/brightness.svg';
import { ReactComponent as Darkmode } from '../../../assets/images/actionplans/actionplanicon/darkmode.svg';
import { ReactComponent as Energymode } from '../../../assets/images/actionplans/actionplanicon/energymode.svg';
import { ReactComponent as Smartphone} from '../../../assets/images/actionplans/actionplanicon/smartphone.svg';
import { ReactComponent as Wifi } from '../../../assets/images/actionplans/actionplanicon/wifi.svg';
//action plan pixel
import { ReactComponent as ZoomPixel } from '../../../assets/images/actionplans//actionplanpixel/zoompixel.svg';
import { ReactComponent as BrightnessPixel } from '../../../assets/images/actionplans//actionplanpixel/brightness.svg';
import { ReactComponent as CloudPixel } from '../../../assets/images/actionplans//actionplanpixel/cloud.svg';
import { ReactComponent as DarkmodePixel } from '../../../assets/images/actionplans//actionplanpixel/darkmode.svg';
import { ReactComponent as EmailfilePixel } from '../../../assets/images/actionplans//actionplanpixel/emailfile.svg';
import { ReactComponent as EmaillistPixel } from '../../../assets/images/actionplans//actionplanpixel/emaillist.svg';
import { ReactComponent as EnergymodePixel } from '../../../assets/images/actionplans//actionplanpixel/energymode.svg';
import { ReactComponent as MessengerPixel } from '../../../assets/images/actionplans//actionplanpixel/messenger.svg';
import { ReactComponent as NetflixPixel } from '../../../assets/images/actionplans//actionplanpixel/netflix.svg';
import { ReactComponent as SmartphonePixel } from '../../../assets/images/actionplans//actionplanpixel/smartphone.svg';
import { ReactComponent as SnsPixel } from '../../../assets/images/actionplans//actionplanpixel/sns.svg';
import { ReactComponent as WifiPixel } from '../../../assets/images/actionplans//actionplanpixel/wifi.svg';

const ActionPlanPage = () => {
    const zoom_pixel = useRef();
    const brightness_pixel = useRef();
    const cloud_pixel = useRef();
    const darkmode_pixel = useRef();
    const emailfile_pixel = useRef();
    const emaillist_pixel = useRef();
    const energymode_pixel = useRef();
    const messenger_pixel = useRef();
    const netflix_pixel = useRef();
    const smartphone_pixel = useRef();
    const sns_pixel = useRef();
    const wifi_pixel = useRef();

    const [VideoAction,setVideoAction] = useState(false);
    const onVideoActionHandler = (event) => {
        if(VideoAction){ 
            netflix_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setVideoAction(!VideoAction);
        }else{
            netflix_pixel.current.style.animation="pixelHide 0.2s forwards"
            setVideoAction(!VideoAction);
        }
    }

    const [SnsAction,setSnsAction] = useState(false);
    const onSnsActionHandler = (event) => {
        if(SnsAction){ 
            sns_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setSnsAction(!SnsAction);
        }else{
            sns_pixel.current.style.animation="pixelHide 0.2s forwards"
            setSnsAction(!SnsAction);
        }
    }

    const [CloudAction,setCloudAction] = useState(false);
    const onCloudActionHandler = (event) => {
        if(CloudAction){ 
            cloud_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setCloudAction(!CloudAction);
        }else{
            cloud_pixel.current.style.animation="pixelHide 0.2s forwards"
            setCloudAction(!CloudAction);
        }
    }

    const [MessengerAction,setMessengerAction] = useState(false);
    const onMessangerActionHandler = (event) => {
        if(MessengerAction){ 
            messenger_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setMessengerAction(!MessengerAction);
        }else{
            messenger_pixel.current.style.animation="pixelHide 0.2s forwards"
            setMessengerAction(!MessengerAction);
        }
    }

    const [ZoomAction,setZoomAction] = useState(false);
    const onZoomActionHandler = (event) => {
        if(ZoomAction){ 
            zoom_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setZoomAction(!ZoomAction);
        }else{
            zoom_pixel.current.style.animation="pixelHide 0.2s forwards"
            setZoomAction(!ZoomAction);
        }
    }

    const [EmailListAction,setEmailListAction] = useState(false);
    const onEmailListActionHandler = (event) => {
        if(EmailListAction){ 
            emaillist_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setEmailListAction(!EmailListAction);
        }else{
            emaillist_pixel.current.style.animation="pixelHide 0.2s forwards"
            setEmailListAction(!EmailListAction);
        }
    }

    const [WifiAction,setWifiAction] = useState(false);
    const onWifiActionHandler = (event) => {
        if(WifiAction){ 
            wifi_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setWifiAction(!WifiAction);
        }else{
            wifi_pixel.current.style.animation="pixelHide 0.2s forwards"
            setWifiAction(!WifiAction);
        }
    }

    const [DarkModeAction,setDarkModeAction] = useState(false);
    const onDarkModeActionHandler = (event) => {
        if(DarkModeAction){ 
            darkmode_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setDarkModeAction(!DarkModeAction);
        }else{
            darkmode_pixel.current.style.animation="pixelHide 0.2s forwards"
            setDarkModeAction(!DarkModeAction);
        }
    }

    const [EnergyModeAction,setEnergyModeAction] = useState(false);
    const onEnergyModeActionHandler = (event) => {
        if(EnergyModeAction){ 
            energymode_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setEnergyModeAction(!EnergyModeAction);
        }else{
            energymode_pixel.current.style.animation="pixelHide 0.2s forwards" 
            setEnergyModeAction(!EnergyModeAction);
        }
    }

    const [BrightnessAction,setBrightnessAction] = useState(false);
    const onBrightnessActionHandler = (event) => {
        if(BrightnessAction){ 
            brightness_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setBrightnessAction(!BrightnessAction);
        }else{
            brightness_pixel.current.style.animation="pixelHide 0.2s forwards" 
            setBrightnessAction(!BrightnessAction);
        }
    }

    const [SmartphoneAction,setSmartphoneAction] = useState(false);
    const onSmartphoneActionHandler = (event) => {
        if(SmartphoneAction){ 
            smartphone_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setSmartphoneAction(!SmartphoneAction);
        }else{
            smartphone_pixel.current.style.animation="pixelHide 0.2s forwards" 
            setSmartphoneAction(!SmartphoneAction);
        }
    }

    const [EmailFileAction,setEmailFileAction] = useState(false);
    const onEmailFileActionHandler = (event) => {
        if(EmailFileAction){ 
            emailfile_pixel.current.style.animation="pixelShow 0.2s forwards" 
            setEmailFileAction(!EmailFileAction);
        }else{
            emailfile_pixel.current.style.animation="pixelHide 0.2s forwards" 
            setEmailFileAction(!EmailFileAction);
        }
    }

    //배경이미지 조작
    const backImgObject = {1:PolarBear,2:Turtle,3:Panda}
    const [background,setBackground] = useState(1);
    const [backImg,setBackImg] = useState(backImgObject[background]);
    const [nextBtn,setNextBtn] = useState(false);

    // if(VideoAction && BrightnessAction && CloudAction && DarkModeAction && EmailFileAction && EmailListAction && EnergyModeAction && MessengerAction && SmartphoneAction && SnsAction && WifiAction && ZoomAction){
    //     console.log('bye');
    //     setNextBtn(true);
    // }

    const onNextBackgroundHandler = (event) =>{
        if(background===3){
            setNextBtn(false);
            setBackImg(backImgObject[1]);
            setBackground(1);
        }else{
            if(background===2){
                setNextBtn(true);
            }
            setBackImg(backImgObject[background+1]);
            setBackground(background+1);
        }
    }

    return(
        <main className="ActionPlan">
            <div className="background-img-container">
                <img src={backImg} alt="북극곰(polar bear image)"/>
            </div>
            <div id="actionplan-pixel-container">
                <ZoomPixel ref={zoom_pixel}/>
                <BrightnessPixel ref={brightness_pixel}/>
                <CloudPixel ref={cloud_pixel}/>
                <DarkmodePixel ref={darkmode_pixel}/>
                <EmailfilePixel ref={emailfile_pixel}/>
                <EmaillistPixel ref={emaillist_pixel}/>
                <EnergymodePixel ref={energymode_pixel}/>
                <MessengerPixel ref={messenger_pixel}/>
                <NetflixPixel ref={netflix_pixel}/>
                <SmartphonePixel ref={smartphone_pixel}/>
                <SnsPixel ref={sns_pixel}/>
                <WifiPixel ref={wifi_pixel}/>
            </div>
            <article className="actionplan-contents">
                <h2>Action Plan</h2>
                <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
                
                <button className="image-handler" onClick={onNextBackgroundHandler}><Next/></button>
                
                <div className="actionplan-list-container">
                    <ul className="actionplan-list">
                        <li className={VideoAction?"actionplan-item-active":"actionplan-item"} onClick={onVideoActionHandler}>
                            <div className="item-wrapper">
                                <Netflix />
                                <span>고화질 대신 표준 화질 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={SnsAction?"actionplan-item-active":"actionplan-item"} onClick={onSnsActionHandler}>
                            <div className="item-wrapper">
                                <SNS />
                                <span>SNS 알람 차단 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={CloudAction?"actionplan-item-active":"actionplan-item"} onClick={onCloudActionHandler}>
                            <div className="item-wrapper">
                                <Cloud />
                                <span>자동 클라우드 백업 해제</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={MessengerAction?"actionplan-item-active":"actionplan-item"} onClick={onMessangerActionHandler}>
                            <div className="item-wrapper">
                                <Kakaotalk />
                                <span>메신저 캐시 주기적 삭제</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={ZoomAction?"actionplan-item-active":"actionplan-item"} onClick={onZoomActionHandler}>
                            <div className="item-wrapper">
                                <Zoom />
                                <span>화상회의 중 비디오 끄기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={EmailListAction?"actionplan-item-active":"actionplan-item"} onClick={onEmailListActionHandler}>
                            <div className="item-wrapper">
                                <Email />
                                <span>메일 스팸함 정리</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={WifiAction?"actionplan-item-active":"actionplan-item"} onClick={onWifiActionHandler}>
                            <div className="item-wrapper">
                                <Wifi />
                                <span>데이터 대신 Wi-Fi 사용</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={DarkModeAction?"actionplan-item-active":"actionplan-item"} onClick={onDarkModeActionHandler}>
                            <div className="item-wrapper">
                                <Darkmode />
                                <span>다크 모드 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={EnergyModeAction?"actionplan-item-active":"actionplan-item"} onClick={onEnergyModeActionHandler}>
                            <div className="item-wrapper">
                                <Energymode />
                                <span>에너지 절약 모드 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={BrightnessAction?"actionplan-item-active":"actionplan-item"} onClick={onBrightnessActionHandler}>
                            <div className="item-wrapper">
                                <Brightness />
                                <span>화면 밝기 낮추기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={SmartphoneAction?"actionplan-item-active":"actionplan-item"} onClick={onSmartphoneActionHandler}>
                            <div className="item-wrapper">
                                <Smartphone />
                                <span>스마트폰 확인 빈도 수 줄이기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={EmailFileAction?"actionplan-item-active":"actionplan-item"} onClick={onEmailFileActionHandler}>
                            <div className="item-wrapper">
                                <Email />
                                <span>메일 첨부파일 링크로 대체하기</span>
                            </div>
                            <hr/>
                        </li>
                    </ul>
                </div>
            </article>
            <Link to="/actionplan/ending"><button className={nextBtn?"next-btn":"next-btn-none"}>next</button></Link>
        </main>
    )
}

export default ActionPlanPage;