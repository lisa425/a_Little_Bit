import React,{ useState } from 'react';
import '../../../css/Navbar.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../../assets/images/logo.svg';
import menuIcon from "../../../assets/images/menu_icon.png";

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    console.log(sidebar);

    return(
        <nav className="nav-bar">
            <Link to="/">
                <Logo className="nav-logo" fill="white"/>
            </Link>
            <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <h1 className="menu-title">메뉴</h1>
                    <li><Link to="">디지털 사용량 계산하기</Link></li>
                    <li>디지털 탄소가 왜 환경에 영향을 주나요?</li>
                    <li>디지털 탄소 배출량 한 눈에 파악하기</li>
                    <li>디지털 탄소를 줄이는 사소하지만 확실한 방법</li>
            </ul>
            <button className="nav-menu-icon" onClick={showSidebar}>  
                <img src={menuIcon} alt="menuIcon"/>
            </button>
        </nav>  

    );
};

export default NavBar;