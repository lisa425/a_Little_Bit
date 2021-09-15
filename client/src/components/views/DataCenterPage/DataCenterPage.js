import React,{useState,useRef,useEffect} from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, FadeOut } from "react-scroll-motion";
import '../../../css/DataCenterPage/DataCenterPage.css';
import scene0 from '../../../assets/images/dataCenter/scene0.svg'
import scene1 from '../../../assets/images/dataCenter/scene1.svg'
import scene2 from '../../../assets/images/dataCenter/scene02.svg'
import scene3 from '../../../assets/images/dataCenter/scene032.svg'
import scene4 from '../../../assets/images/dataCenter/scene04.svg'
import scene4_earth from '../../../assets/images/dataCenter/scene4_earth.svg'
import scene4_datacenter from '../../../assets/images/dataCenter/scene4_datacenter.svg'
import scene5 from '../../../assets/images/dataCenter/scene5.svg'
import scene6 from '../../../assets/images/dataCenter/scene6.svg'
import scene7 from '../../../assets/images/dataCenter/scene7.svg'
import data_info_btn from '../../../assets/images/dataCenter/data_info_btn.svg'
const DataCenterPage = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    // let yOffset = 0;
    // let prevScrollHeight = 0;
    // let currentScene = 0;
    // let enterNewScene = false;

    // const article = useRef(); //스크롤 컨텐츠 영역을 감싸는 article
    // const scroll_section_0 = useRef();
    // const scroll_section_1 = useRef();
    // const scroll_section_2 = useRef();
    // const scroll_section_3 = useRef();
    // const scroll_section_4 = useRef();
    // const scroll_section_5 = useRef();

    // const sceneInfo = [
    //     { 
    //         type:'sticky',
    //         heightNum: 5,
    //         scrollHeight:0,
    //         objs:{
    //             container:scroll_section_0
    //         }
    //     },
    //     {	
	// 		type:'normal',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs:{
	// 			container:scroll_section_1
	// 		}
	// 	},
	// 	{	
	// 		//2
	// 		type:'sticky',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs:{
	// 			container:scroll_section_2
	// 		}
	// 	},
	// 	{	
	// 		type:'normal',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs:{
	// 			container:scroll_section_3
	// 		}
	// 	},
    //     {	
	// 		type:'sticky',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs:{
	// 			container:scroll_section_4
	// 		}
	// 	},
    //     {	
	// 		type:'normal',
	// 		heightNum: 5,
	// 		scrollHeight: 0,
	// 		objs:{
	// 			container:scroll_section_5
	// 		}
	// 	}
    // ]

    // const setLayout = () => {
    //     console.log('setLayout');
    //     for (let i=0; i<sceneInfo.length; i++){
	// 		if(sceneInfo[i].type === 'sticky'){
	// 			sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
	// 			sceneInfo[i].objs.container.current.style.height = `${sceneInfo[i].scrollHeight}px`;
	// 		}else if(sceneInfo[i].type === 'normal'){
	// 			sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.current.offsetHeight;
	// 		}
	// 		sceneInfo[i].objs.container.current.style.height = `${sceneInfo[i].scrollHeight}px`;
	// 	}

	// 	yOffset = window.pageYOffset;
	// 	let totalScrollHeight = 0;
	// 	for(let i = 0; i<sceneInfo.length; i++){
	// 		totalScrollHeight += sceneInfo[i].scrollHeight;
	// 		if(totalScrollHeight >= yOffset){
	// 			currentScene = i;
	// 			break;
	// 		}
	// 	}
    //     article.current.id = `show-scene-${currentScene}`;
    // }

    // const scrollLoop = () => {
    //     console.log('scroll loop')
    //     enterNewScene = false;
	// 	prevScrollHeight = 0;
	// 	for(let i = 0; i < currentScene; i++){
	// 		prevScrollHeight += sceneInfo[i].scrollHeight;
	// 	}

	// 	if(yOffset > prevScrollHeight+sceneInfo[currentScene].scrollHeight){
	// 		enterNewScene = true;
	// 		currentScene++;
	// 		article.current.id = `show-scene-${currentScene}`;
	// 	}
	// 	if(yOffset < prevScrollHeight){
	// 		enterNewScene = true;
	// 		if(currentScene === 0) return; //바운스 효과로 인해 마이너스가 되는 것 방지
	// 		currentScene--;
	// 		article.current.id = `show-scene-${currentScene}`;
	// 	}
		
	// 	if(enterNewScene) return;
    // }

    
    // window.addEventListener('resize', setLayout);
    // window.addEventListener('scroll', ()=>{
    //         yOffset = window.pageYOffset;
    //         console.log(yOffset);
    //         scrollLoop();
    //     });
    // window.addEventListener('load', setLayout);
    

    // useEffect(() => {
    //     window.addEventListener('resize', setLayout);
    //     window.removeEventListener('scroll', ()=>{
    //             yOffset = window.pageYOffset;
    //             console.log(yOffset);
    //             scrollLoop();
    //         });
	//     window.addEventListener('load', setLayout);

    //     return () => {
    //         window.removeEventListener('resize', setLayout);
    //         window.removeEventListener('scroll', ()=>{
    //             yOffset = window.pageYOffset;
    //             scrollLoop();
    //         });
    //         window.removeEventListener('load', setLayout);
    //     }
    // },[]);

    return(
        <main className="DataCenterPage">
            <header className="title">
                <h1>Why is it problem?</h1>
                <h5>도대체 디지털 탄소 발자국의 정체는 무엇일까요?<br/>
                    스크롤을 내려 확인해보세요.
                </h5>
            </header>
            <article className="contents">
                <ScrollContainer id="scroll-section-0">
                    <ScrollPage page={0} style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img src={scene0} alt="scene0" style={{width:'auto',height:'80vh'}}/>
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
                                <img src={scene1} alt="scene2" style={{width:'auto',height:'80vh'}}/>
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
                                <img src={scene2} alt="scene2" id="scene2_img" style={{width:'auto',height:'110vh'}}/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene2">
                                <p class="left-text">
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
                    {/* <ScrollPage page={3} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={FadeIn} style={{width:'100%'}}>
                            <section className="scroll-section" id="scroll-section-1">
                                <img className="wifi-icon" src={scene3} alt="wifi icon"/>
                            </section>
                        </Animator>
                    </ScrollPage> */}
                </ScrollContainer>

                <section className="scroll-section" id="scroll-section-1">
                    <img className="wifi-icon" src={scene3} alt="wifi icon"/>
                </section>



                <ScrollContainer>
                    <ScrollPage page={5} className="scroll-section" style={{width:'100%'}}>
                        <Animator animation={batch(Fade(), Sticky())} style={{width:'100%'}}>
                            <div className="sticky-elem">
                                <img className="earth-graphic-img" src={scene4} alt="scene4" style={{width:'auto',height:'100vh'}}/>
                            </div>
                        </Animator>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))} style={{width:'100%'}}>
                            <div className="sticky-elem" id="scene4">
                                <p className="left-text side-info">
                                    데이터센터는 말 그대로,정보를 관리하고<br/>
                                    저장/공유 하는 최종 서버입니다.
                                </p>
                                <p className="left-text side-info">
                                    데이터 센터란?<br/>
                                    <img class="data_info_btn" src={data_info_btn} alt="데이터 센터란?"/>
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
                                <img className="earth-graphic-img" src={scene5} alt="scene5" style={{width:'auto',height:'100vh'}}/>
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
                                <img className="earth-graphic-img" src={scene6} alt="scene6" style={{width:'auto',height:'100vh'}}/>
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
                                <img className="earth-graphic-img" src={scene7} alt="scene7" style={{width:'auto',height:'100vh'}}/>
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
                </ScrollContainer>

                

                <section className="scroll-section" id="scroll-section-3">
                    <p className="center-text">
                        결국 우리의 손 위에서 시작되는<br/>
                        디지털 탄소 발자국.
                    </p>
                </section>

                <section className="scroll-section" id="scroll-section-4">
                    <div className="sticky-elem center-text">
                        <p>
                            우리가 만들어 낸다면,<br/>
                            반대로 직접 줄일 수도 있지 않을까요?
                        </p>
                    </div>
                </section>

                <section className="scroll-section" id="scroll-section-5">
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
                </section>
            </article>
        </main>
    )
}

export default DataCenterPage;