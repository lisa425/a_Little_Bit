import React,{useState,useRef,useEffect} from 'react'


const ScrollAnimation = () => {
    const [yOffset,setYOffset] = useState(0);
    const [prevScrollHeight,setPrevScrollHeight] = useState(0);
    const [currentScene,setCurrentScene] = useState(0);

    console.log(currentScene);
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
                container:document.querySelector('#scroll-section-0')
            }
        },
        {	
			//1
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:document.querySelector('#scroll-section-1')
			}
		},
		{	
			//2
			type:'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:document.querySelector('#scroll-section-2')
			}
		},
		{	
			//3
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:document.querySelector('#scroll-section-3')
			}
		},
        {	
			//4
			type:'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: document.querySelector('#scroll-section-4')
			}
		},
        {	
			//5
			type:'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container:document.querySelector('#scroll-section-5')
			}
		}
    ]

    const setLayout = () => {
        for(let i=0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        setYOffset(window.pageYOffset);

		let totalScrollHeight = 0;

		for(let i = 0; i<sceneInfo.length; i++){
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if(totalScrollHeight >= yOffset){
				setCurrentScene(i);
				break;
			}
		}
    }

    const scrollLoop = () => {
        setYOffset(window.pageYOffset);

        for(let i = 0; i < currentScene; i++){
			setPrevScrollHeight(prevScrollHeight + sceneInfo[i].scrollHeight);
		}

        let newScene = currentScene;

		if(yOffset > prevScrollHeight){
            newScene += 1
			setCurrentScene(newScene);
            
		}
		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return; //바운스 효과로 인해 마이너스가 되는 것 방지
            newScene -= 1
			setCurrentScene(newScene);
		}

    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', scrollLoop);
    window.addEventListener('load', setLayout);
}

export default ScrollAnimation;