import React,{useState} from 'react';
import '../../../css/ActionPlanPage/ActionPlanPage.css';
import PolarBear from '../../../assets/images/actionplans/bear_img.png';
import Turtle from '../../../assets/images/actionplans/action_plan_turtle.jpg';
import Panda from '../../../assets/images/actionplans/action_plan_panda.jpg';
import { ReactComponent as Next } from '../../../assets/images/next.svg';
import { ReactComponent as Before } from '../../../assets/images/before.svg';
import { ReactComponent as Cloud } from '../../../assets/images/actionplans/actionplanicon/cloud.svg';
import { ReactComponent as Kakaotalk } from '../../../assets/images/actionplans/actionplanicon/kakaotalk.svg';
import { ReactComponent as Email } from '../../../assets/images/actionplans/actionplanicon/email.svg';
import { ReactComponent as SNS } from '../../../assets/images/actionplans/actionplanicon/instagram.svg';
import { ReactComponent as Netflix} from '../../../assets/images/actionplans/actionplanicon/netflix.svg';
import { ReactComponent as Zoom } from '../../../assets/images/actionplans/actionplanicon/zoom.svg';
//import { ReactComponent as ActionPlanPixel } from '../../../assets/images/actionplans/ActionPlan_pixel5.svg';

const ActionPlanPage = () => {
    //그리드 갯수만큼 배열 생성 
    const ROW_LENGTH = 37;
    const COLUMN_LENGTH = 65;
    let actionPlanArray = [];
    let existPositionArray = [];

    const checkExist = (row,col) => {
        existPositionArray.find(object => {
            if(object.column === col & object.row === row){
                console.log('yes 중복')
                return true;
            }else{
                console.log('no 중복')
                return false;
            }
        })
    }

    for(let i=0; i<(ROW_LENGTH*COLUMN_LENGTH); i++){
        actionPlanArray.push(i);
        // let randomPositionColumn = Math.floor(Math.random()*COLUMN_LENGTH+1);
        // let randomPositionRow = Math.floor(Math.random()*ROW_LENGTH+1);
        // existPositionArray.push({
        //     'column':randomPositionColumn,
        //     'row':randomPositionRow
        // })
        // if(!checkExist(randomPositionRow,randomPositionColumn)){
        //     existPositionArray.push({
        //         'column':randomPositionColumn,
        //         'row':randomPositionRow
        //     })
        //     console.log('push complete!')
        // }
    }
    const renderPixel = actionPlanArray.map((position,index) => {
        let classListArray = ['fill-pixel','dot-pixel','mosaic-pixel']
        
        let random_class = Math.floor(Math.random()*3);
        console.log(random_class)

        let classname = classListArray[random_class];
        // if(index>1000 && position.row>6){
        //     classname = "fill-pixel";
        // }else if(index<700 && position.row<5){
        //     classname = "dot-pixel";
        // }else{
        //     classname = "mosaic-pixel";
        // }
        return (
            <div className={`${classname} 'item-${index}'`}></div>
        )
    })

    

    const netflix_pixel =  document.querySelector('#netflix');
    const messenger_pixel =  document.querySelector('#messenger');
    const brightness_pixel =  document.querySelector('#brightness');
    const emaillist_pixel =  document.querySelector('#emaillist');
    const sns_pixel =  document.querySelector('#sns');
    const smartphone_pixel=  document.querySelector('#smartphone');
    const energymode_pixel =  document.querySelector('#energymode');
    const wifi_pixel =  document.querySelector('#wifi');
    const zoom_pixel =  document.querySelector('#zoom');
    const darkmode_pixel =  document.querySelector('#darkmode');
    const emailfile_pixel =  document.querySelector('#emailfile');
    const cloud_pixel =  document.querySelector('#cloud');


    const [VideoAction,setVideoAction] = useState(false);
    const onVideoActionHandler = (event) => {
        setVideoAction(!VideoAction);
        // if(VideoAction === false){
        //     if(netflix_pixel.classList.contains('show-pixel')){
        //         netflix_pixel.classList.remove('show-pixel')
        //     }
        //     netflix_pixel.classList.add('hide-pixel');
        // }else{
        //     if(netflix_pixel.classList.contains('hide-pixel')){
        //         netflix_pixel.classList.remove('hide-pixel');
        //     }
        //     netflix_pixel.classList.add('show-pixel');
        // }
    }

    const [SnsAction,setSnsAction] = useState(false);
    const onSnsActionHandler = (event) => {
        setSnsAction(!SnsAction);
    }

    const [CloudAction,setCloudAction] = useState(false);
    const onCloudActionHandler = (event) => {
        setCloudAction(!CloudAction);
    }

    const [MessengerAction,setMessengerAction] = useState(false);
    const onMessangerActionHandler = (event) => {
        setMessengerAction(!MessengerAction);
    }

    const [ZoomAction,setZoomAction] = useState(false);
    const onZoomActionHandler = (event) => {
        setZoomAction(!ZoomAction);
    }

    const [EmailListAction,setEmailListAction] = useState(false);
    const onEmailListActionHandler = (event) => {
        setEmailListAction(!EmailListAction);
    }

    const [WifiAction,setWifiAction] = useState(false);
    const onWifiActionHandler = (event) => {
        setWifiAction(!WifiAction);
    }

    const [DarkModeAction,setDarkModeAction] = useState(false);
    const onDarkModeActionHandler = (event) => {
        setDarkModeAction(!DarkModeAction);
    }

    const [EnergyModeAction,setEnergyModeAction] = useState(false);
    const onEnergyModeActionHandler = (event) => {
        setEnergyModeAction(!EnergyModeAction);
    }

    const [BrightnessAction,setBrightnessAction] = useState(false);
    const onBrightnessActionHandler = (event) => {
        setBrightnessAction(!BrightnessAction);
    }

    const [SmartphoneAction,setSmartphoneAction] = useState(false);
    const onSmartphoneActionHandler = (event) => {
        setSmartphoneAction(!SmartphoneAction);
    }

    const [EmailFileAction,setEmailFileAction] = useState(false);
    const onEmailFileActionHandler = (event) => {
        setEmailFileAction(!EmailFileAction);
    }


    return(
        <main className="ActionPlan">
            <div className="background-img-container">
                <img src={PolarBear} alt="북극곰(polar bear image)"/>
                <img src={Panda} alt="판다(panda image)"/>
                <img src={Turtle} alt="바다거북이(sea turtle image)"/>
            </div>
            <div id="actionplan-pixel-container">
                {/* <ActionPlanPixel /> */}
                {renderPixel}
            </div>
            <div className="background-img-handler">
                <button className="image-handler"><Before/></button>
                <button className="image-handler"><Next/></button>
            </div>
            <article className="actionplan-contents">
                <h2>Action Plan</h2>
                <p>함께 실천할 액션 플랜을 선택해, 나의 선택이 만들어내는 긍정적인 영향을 확인해보세요.</p>
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
                                <Email />
                                <span>데이터 대신 Wi-Fi 사용</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={DarkModeAction?"actionplan-item-active":"actionplan-item"} onClick={onDarkModeActionHandler}>
                            <div className="item-wrapper">
                                <Email />
                                <span>다크 모드 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={EnergyModeAction?"actionplan-item-active":"actionplan-item"} onClick={onEnergyModeActionHandler}>
                            <div className="item-wrapper">
                                <Email />
                                <span>에너지 절약 모드 설정</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={BrightnessAction?"actionplan-item-active":"actionplan-item"} onClick={onBrightnessActionHandler}>
                            <div className="item-wrapper">
                                <Email />
                                <span>화면 밝기 낮추기</span>
                            </div>
                            <hr/>
                        </li>
                        <li className={SmartphoneAction?"actionplan-item-active":"actionplan-item"} onClick={onSmartphoneActionHandler}>
                            <div className="item-wrapper">
                                <Email />
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
        </main>
    )
}

export default ActionPlanPage