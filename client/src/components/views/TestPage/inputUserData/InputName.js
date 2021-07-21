import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
//import { registerUser } from '../../../../_actions/user_action'
import '../../../../css/TestPage/inputUserData/inputName.css';
import NavBar from '../../Navbar/Navbar';



const InputName = () => {
    const [Name,setName] = useState("");

    const onNameHandler = (event) => {
        setName(event.target.value);
    }

    return(
        <div>
            <NavBar />
            <p>당신의 이름을 입력하세요.</p>
            <form>
                <input className="input-name" type="text" value={Name} onChange={onNameHandler} />
                <button className="submit-name" type="submit">DONE!</button>
            </form>
        </div>
    );
    
}
export default InputName
