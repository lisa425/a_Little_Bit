import React,{useRef,useEffect} from 'react'
import '../../../css/DataCenterPage/DataCenterPage.css';

const DataCenterPage = () => {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    const article = useRef(); //스크롤 컨텐츠 영역을 감싸는 article
    const scroll_section_0 = useRef();
    const scroll_section_1 = useRef();
    const scroll_section_2 = useRef();
    const scroll_section_3 = useRef();
    const scroll_section_4 = useRef();
    const scroll_section_5 = useRef();

    const sceneInfo = [
        {
            //0    
            type:'sticky',
            heightNum: 5,
            scrollHeight:0,
            objs:{
                container:scroll_section_0
            }
        },
        {	
			//1
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:scroll_section_1
			}
		},
		{	
			//2
			type:'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:scroll_section_2
			}
		},
		{	
			//3
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:scroll_section_3
			}
		},
        {	
			//4
			type:'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: scroll_section_4
			}
		},
        {	
			//5
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: scroll_section_5
			}
		}
    ]


    const setLayout = () => {
        for(let i=0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.current.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        
        yOffset = window.pageYOffset;
		let totalScrollHeight = 0;
		for(let i = 0; i<sceneInfo.length; i++){
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if(totalScrollHeight >= yOffset){
				currentScene = i;
				break;
			}
		}
        
        article.current.id = `show-scene-${currentScene}`
    }

    const scrollLoop = () => {
        prevScrollHeight = 0;
        for(let i = 0; i < currentScene; i++){
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}
		if(yOffset > prevScrollHeight+sceneInfo[currentScene].scrollHeight){
			currentScene++;
		}
		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return; //바운스 효과로 인해 마이너스가 되는 것 방지
			currentScene--;
		}

        article.current.id = `show-scene-${currentScene}`
    }

    useEffect(() => {
        window.addEventListener('resize',setLayout);
        window.addEventListener('scroll',()=>{
		yOffset = window.pageYOffset;
		scrollLoop();
	})
	window.addEventListener('load',setLayout);
    },[]);

    return(
        <main className="DataCenterPage">
            <header className="title">
                <h1>Why is it problem?</h1>
                <h5>도대체 디지털 탄소 발자국의 정체는 무엇일까요?<br/>
                    스크롤을 내려 확인해보세요.
                </h5>
            </header>

            <article className="contents" ref={article}>
                <section className="scroll-section" id="scroll-section-0" ref={scroll_section_0}>
                    <div className="sticky-elem center-text">
                        <p className="impact-text">
                            디지털 탄소 발자국은<br/>
                            디지털 기기를 통한<br/>
                            모든 행동에서부터 시작됩니다.
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            SNS에 접속하거나
                        </p>
                    </div>
                    <div className="sticky-elem left-text">
                        <p>
                            스트리밍 하거나,<br/>
                            정보를 검색하거나,
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            심지어 메세지를<br/>
                            확인할 때 조차도,
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            네트워크 연결은 필수적입니다.
                        </p>
                    </div>
                </section>

                <section className="scroll-section" id="scroll-section-1" ref={scroll_section_1}>
                    <p className="impact-text">NETWORK</p>
                    <img className="wifi-icon" src="" alt="wifi icon"/>
                    <p className="impact-text">ACCESS !</p>
                </section>

                <section className="scroll-section" id="scroll-section-2" ref={scroll_section_2}>
                    <div className="sticky-elem left-text">
                        <p>
                            데이터센터는 말 그대로,정보를 관리하고<br/>
                            저장/공유 하는 최종 서버입니다.
                        </p>
                        <p>데이터 센터란?</p>
                        <img src="" alt="데이터 센터란?"/>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            연결된 네트워크는 데이터센터로 이어지며
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            정보를 관리하여 저장/공유하는<br/>
                            과정에서 끊임없는 열기가 발생합니다.
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            그 열을 냉각하기 위해<br/>
                            어마어마한 전력을 소모하게 되며,
                        </p>
                    </div>
                    <div className="sticky-elem right-text">
                        <p>
                            그 과정에서 발생하는 온실 가스가<br/>
                            바로 디지털 탄소 발자국의 정체입니다.
                        </p>
                    </div>
                </section>

                <section className="scroll-section" id="scroll-section-3" ref={scroll_section_3}>
                    <p className="center-text">
                        결국 우리의 손 위에서 시작되는<br/>
                        디지털 탄소 발자국.
                    </p>
                </section>

                <section className="scroll-section" id="scroll-section-4" ref={scroll_section_4}>
                    <div className="sticky-elem center-text">
                        <p>
                            우리가 만들어 낸다면,<br/>
                            반대로 직접 줄일 수도 있지 않을까요?
                        </p>
                    </div>
                </section>

                <section className="scroll-section" id="scroll-section-5" ref={scroll_section_5}>
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