import React from 'react';
import '../../../css/AboutPage/AboutPage.css';
import {ReactComponent as Logo } from '../../../assets/images/navbar/logo.svg';
import {ReactComponent as Symbol } from '../../../assets/images/symbols/symbol.svg';
const AboutPage = () => {
    return(
        <main className="AboutPage">
            <article className="about-wrapper">

                <div className="about">
                    <section>
                        <Logo className="about-logo-img"/>
                    </section>
                    <section className="about-project">
                        스마트폰이 없는 오늘을 상상하기 어려울 만큼,<br className="mobile"/> 디지털은 이미 우리 삶에서 뗄 수 없는 존재가<br className="web"/>
                        되었습니다. <br className="mobile"/>그러나, 이 디지털 사용이 도리어 지구에 악영향을 <br className="mobile"/>끼치고 있다면 어떨까요?<br className="web"/>
                        &lt;a Little bit!&gt;은 새롭게 대두되는 환경문제, 디지털 <br className="mobile"/>탄소 발자국을 널리 알리기 위해 시작된<br className="web"/>
                        프로젝트입니다. <br className="mobile"/>일상 속 디지털 매체를 통해 발생하는 디지털 탄소 발자국에 <br className="mobile"/>대한 정보와<br className="web"/>
                        사용 습관에 대한 솔루션을 제공합니다.
                    </section>
                </div>

                <div className="about-logo">
                    <Symbol className="about-logo-info"/>
                    <p className="logo-mean">
                        디지털 환경에서 발현되는 디지털 탄소의 특징을 <br className="mobile"/>컴퓨터 데이터 단위 ‘Bit(비트)’와 <br className="web"/>
                        영어 숙어 ‘a little bit’으로 엮어 <br className="mobile"/>타이틀에 반영했습니다. <br className="web"/>
                        눈에 보이지 않아 자칫 안일히 여길 수 있는 <br className="mobile"/>디지털 탄소를 주목해달라는 의미와 <br className="web"/>
                        동시에, <br className="mobile"/>작다고 하여 절대 무의미하지 않다는 중의적인 의도를 담았습니다.
                    </p>
                </div>
            </article>
        </main>
    )
}

export default AboutPage;