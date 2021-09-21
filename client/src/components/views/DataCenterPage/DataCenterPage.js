import React,{useState} from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FadeOut } from "react-scroll-motion";
import '../../../css/DataCenterPage/DataCenterPage.css';
import scene0 from '../../../assets/images/dataCenter/scene0.svg'
import scene1 from '../../../assets/images/dataCenter/scene1.svg'
import scene2 from '../../../assets/images/dataCenter/scene2.svg'
import scene3 from '../../../assets/images/dataCenter/scene3.svg'
import scene4 from '../../../assets/images/dataCenter/scene4.svg'
import data_info_btn from '../../../assets/images/dataCenter/data_info_btn.svg'
import scene5 from '../../../assets/images/dataCenter/scene5.svg'
import scene6 from '../../../assets/images/dataCenter/scene6.svg'
import scene7 from '../../../assets/images/dataCenter/scene7.svg'
import scene8 from '../../../assets/images/dataCenter/scene8.svg'
import scene9 from '../../../assets/images/dataCenter/scene9.svg'
import scene10 from '../../../assets/images/dataCenter/scene10.svg'
const DataCenterPage = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    const [dataCenterInfo,setDataCenterInfo] = useState(false);
    const showDataCenterInfo = () => {
        setDataCenterInfo(true);
    }
    const hideDataCenterInfo = () => {
        setDataCenterInfo(false);
    }

    return(
        <main className="DataCenterPage">
            <header className="title">
                <h1>story of a Little bit</h1>
                <h5>도대체 디지털 탄소 발자국의 정체는 무엇일까요?<br/>
                    스크롤을 내려 확인해보세요.
                </h5>
            </header>
            <article className="contents">
                <ScrollContainer id="scroll-section-0" style={{width:'100%'}}>
                    <ScrollPage page={0} style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="phone-img" src={scene0} alt="scene0"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -5))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene0">
                                <p className="impact-text center-text">
                                    디지털 탄소 발자국은<br/>
                                    디지털 기기를 통한<br/>
                                    모든 행동에서부터 시작됩니다.
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="phone-img" src={scene1} alt="scene2"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene1">
                                <p className="right-text">
                                    SNS에 접속하거나
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -700))} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="phone-img-lg" src={scene2} alt="scene2" id="scene2_img"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene2">
                                <p className="left-text">
                                    스트리밍 하거나,<br/>
                                    정보를 검색하거나,
                                </p>
                                <p className="right-text">
                                    심지어 메세지를<br/>
                                    확인할 때 조차도,<br/>
                                    <br/>
                                    네트워크 연결은 필수적입니다.
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <section className="scroll-section" id="scroll-section-1">
                        <img className="wifi-icon" src={scene3} alt="wifi icon"/>
                    </section>

                    <ScrollPage page={5} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="earth-graphic-img" src={scene4} alt="scene4"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene4">
                                {dataCenterInfo && 
                                <p className="left-text side-info info">
                                    데이터센터는 말 그대로,정보를 관리하고<br/>
                                    저장/공유 하는 최종 서버입니다.
                                </p>
                                }
                                <p className="left-text side-info info-btn" onClick={showDataCenterInfo} onMouseEnter={showDataCenterInfo} onMouseOut={hideDataCenterInfo}>
                                    데이터 센터란?<br/>
                                    <img className="data_info_btn" src={data_info_btn} alt="데이터 센터란?" onClick={showDataCenterInfo} onMouseEnter={showDataCenterInfo} onMouseOut={hideDataCenterInfo}/>
                                </p>

                                <p className="right-text">
                                    연결된 네트워크는 데이터센터로 이어지며
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={6} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="earth-graphic-img" src={scene5} alt="scene5"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <p className="right-text">
                                    정보를 관리하여 저장/공유하는<br/>
                                    과정에서 끊임없는 열기가 발생합니다.
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={7} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="earth-graphic-img" src={scene6} alt="scene6"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <p className="right-text">
                                    그 열을 냉각하기 위해<br/>
                                    어마어마한 전력을 소모하게 되며,
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={8} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="earth-graphic-img" src={scene7} alt="scene7"/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <p className="right-text">
                                    그 과정에서 발생하는 온실 가스가<br/>
                                    바로 디지털 탄소 발자국의 정체입니다.
                                </p>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={10} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div>
                                <img className="pixel-img" src={scene8} alt="scene8"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={11} className="scroll-section" style={{width:'100%'}}>
                        
                    </ScrollPage>
                </ScrollContainer>

                <section className="scroll-section" id="scroll-section-2">
                        <ScrollContainer>
                            <ScrollPage page={12} className="scroll-section" style={{width:'100%'}}>
                                <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                                    <div className="sticky-elem scene-outro">
                                        <p className="center-text">
                                            우리가 만들어 낸다면,
                                        </p>
                                        <img className="phone-img-sm" src={scene9} alt="scene9"/>
                                    </div>
                                </Animator>
                            </ScrollPage>
                            <ScrollPage page={13} className="scroll-section" style={{width:'100%'}}>
                                <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                                    <div className="sticky-elem scene-outro">
                                        <p className="center-text">
                                            우리가 만들어 낸다면,<br/>
                                            반대로 직접 줄일 수도 있지 않을까요?
                                        </p>
                                        <img className="phone-img-sm" src={scene10} alt="scene10"/>
                                    </div>
                                </Animator>
                            </ScrollPage>
                            <ScrollPage page={14} className="scroll-section" style={{width:'100%'}}>
                                <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                                    
                                </Animator>
                            </ScrollPage>
                            <ScrollPage page={15} className="scroll-section" style={{width:'100%'}}>
                                <Animator animation={batch(MoveIn(0,10), Sticky())} style={{width:'100%'}}>
                                    <div className="action-plan-nav">
                                        <p>
                                            디지털 탄소 발자국을 감소시키는<br/>
                                            간단한 실천에 대해서 알아보아요!
                                        </p>
                                        <div className="action-plan-box">
                                            <h2>Action Plan</h2>
                                            <p>액션 플랜 알아보기</p>
                                            <a href="/actionplan">
                                                <button>go</button>
                                            </a>
                                        </div>
                                    </div>
                                </Animator>
                            </ScrollPage>
                        </ScrollContainer>
                </section>
            </article>
        </main>
    )
}

export default DataCenterPage;