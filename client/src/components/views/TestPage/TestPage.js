import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import registerUser from '../../../_actions/user_action';
import '../../../css/TestPage/TestPage.css';
import InputName from './inputUserData/InputName'
import NavBar from '../Navbar/Navbar';


const TestPage = (props) => {
    // useEffect(() => {
    //     axios.get('api/hello')
    //     .then(response => console.log(response.data))
    // },[])

    // const dispatch = useDispatch();
    
    // const onSubmitHandler = (event) => {
    //     event.preventDefault();

    //     let body = {
    //         name: name,
    //         location: location
    //     }

    //     //axios.post('/api/users/test',body).then(response => console.log('save'));
    //     dispatch(registerUser(body))
    //     .then(response => {
    //         if(response.payload.success){
    //             props.history.push('/test') //result
    //         }else{
    //             alert('err')
    //         }
    //     })
        

    // }
    const [QuestionVisible,setQuestionVisible] = useState("");
    const [location,setLocation] = useState("");
    const [Name,setName] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onLocationHandler = (event) => {
        setLocation(event.currentTarget.value)
    }

    const showNext = (event) => {
        //이름을 객체에 저장
        //인풋 div마다 id를 부여해서 next로 이동하도록
        //일단 display.none을 제거
        const nextQuestion = document.querySelector("#get-location")
    }



    return(
        <div className="testpage">
            <NavBar />
            <form className="input-contents">
                <div className="get-info" id="get-name">
                    <p>당신의 이름을 입력하세요.</p>
                    <input className="input-info" type="text" name="name" value={Name} onChange={onNameHandler} />
                    <button className="submit-to-next" type="submit" onClick={showNext}>DONE!</button>
                </div>

                <div className="get-info" id="get-location">
                    <p>지금 계신 위치가 어디신가요?.</p>
                    <input className="input-info" type="text" name="name" value={location} onChange={onLocationHandler} />
                    <button className="submit-to-next" type="submit">DONE!</button>
                </div>
            </form>
        </div>
    );
};

export default TestPage;