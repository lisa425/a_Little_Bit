import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action'


//import { Route,Link } from 'react-router-dom';
//import '../../../css/LandingPage/LandingPage.css';
//import NavBar from '../NavBar/NavBar';
//import StartPage from './DataTest/StartPage';

const TestPage = (props) => {
    // useEffect(() => {
    //     axios.get('api/hello')
    //     .then(response => console.log(response.data))
    // },[])

    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onLocationHandler = (event) => {
        setLocation(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            name: name,
            location : location
        }

        //axios.post('/api/users/test',body)
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push('/') //result
            }else{
                alert('err')
            }
        })
        

    }


    return(
        <div>Testpage
            <form>
                <label>이름을 입력하세요</label>
                <input type="text" value={name} onChange={onNameHandler}/>
                <label>지역을 입력하세요</label>
                <input type="text" value={location} onChange={onLocationHandler}/>
                <br/>
                <button type="submit" onClick={onSubmitHandler}>DONE!</button>
            </form>
        {/*
        <div className="Mainpage">
            <NavBar />
            <img className="main_title" src="../../../assets/images/main_title.gif" alt="logo"/>
            <button className="start-btn"><Link to="/startpage">start</Link></button>
        </div> 
        */}
        </div>
    );
};

export default TestPage;