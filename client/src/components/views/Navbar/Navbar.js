import React,{ useState } from 'react';
import '../../../css/Navbar.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../../assets/images/logo.svg';
import menuIcon from "../../../assets/images/menu_icon.png";

const NavBar = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    console.log(props.location);

    
    return(
        <nav className="nav-bar">
            <div className="nav-container">
                <Link to="/">
                    <Logo className="nav-logo" fill="white"/>
                </Link>
                <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <h1 className="menu-title">menu</h1>
                        <li><Link to="/testintro" onClick={closeSidebar}>
                            <p className="en-menu">Digital usage test</p>
                            <p className="kr-menu">디지털 사용량 테스트</p></Link>
                        </li>

                        <li><Link to="/test/earthlist" onClick={closeSidebar}>
                            <p className="en-menu">Future of earth</p>
                            <p className="kr-menu">지구의 미래?</p></Link>
                        </li>

                        <li><Link to="" onClick={closeSidebar}>
                            <p className="en-menu">Fun facts</p>
                            <p className="kr-menu">카드 뉴스</p></Link>
                        </li>

                        <li><Link to="" onClick={closeSidebar}>
                            <p className="en-menu">Action plan</p>
                            <p className="kr-menu">액션 플랜</p></Link>
                        </li>

                        <li><Link to="/test/earthlist" onClick={closeSidebar}>
                            <p className="en-menu">Guest book</p>
                            <p className="kr-menu">방명록</p></Link>
                        </li>
                </ul>
                <button className="nav-menu-icon" onClick={showSidebar}>  
                    <img src={menuIcon} alt="menuIcon"/>
                </button>
            </div>
        </nav>  

    );
};

export default NavBar;